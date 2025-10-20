import { DOCUMENT } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { RouteSeoData } from '../../app.routes';

const CANONICAL_LINK_ID = 'app-canonical-link';
const STRUCTURED_DATA_ID = 'app-structured-data';
const STRUCTURED_DATA_TYPE = 'application/ld+json';

const defaultSeo: RouteSeoData = {
  title: 'Escriba Abogados | Defensa penal estrat&eacute;gica en Per&uacute;',
  description:
    'Estudio Escriba Abogados: litigio penal, estrategias preventivas y acompa&ntilde;amiento legal integral.',
  keywords: [
    'abogados penales',
    'estudio jur&iacute;dico',
    'defensa penal',
    'consultor&iacute;a legal',
  ],
  canonical: 'https://www.escribaabogados.com/',
  robots: 'index,follow',
  openGraph: {
    'og:type': 'website',
    'og:site_name': 'Escriba Abogados',
    'og:title':
      'Escriba Abogados | Defensa penal estrat&eacute;gica en Per&uacute;',
    'og:description':
      'Equipo legal especializado en litigio penal, diagn&oacute;stico estrat&eacute;gico y comunicaci&oacute;n efectiva.',
    'og:image': 'https://www.escribaabogados.com/images/page1-image.png',
  },
  twitter: {
    'twitter:card': 'summary_large_image',
    'twitter:title':
      'Escriba Abogados | Defensa penal estrat&eacute;gica en Per&uacute;',
    'twitter:image': 'https://www.escribaabogados.com/images/page1-image.png',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Escriba Abogados',
    url: 'https://www.escribaabogados.com/',
    areaServed: 'PE',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  private readonly seoState = signal<RouteSeoData>(defaultSeo);

  readonly currentSeo = computed(() => this.seoState());

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const resolvedSeo = this.resolveSeoData();
        this.seoState.set(resolvedSeo);
        this.applySeo(resolvedSeo);
      });

    queueMicrotask(() => {
      const resolvedSeo = this.resolveSeoData();
      this.seoState.set(resolvedSeo);
      this.applySeo(resolvedSeo);
    });
  }

  private resolveSeoData(): RouteSeoData {
    const activeSnapshot = this.getDeepestChild(
      this.router.routerState.snapshot.root
    );
    const routeSeo = (activeSnapshot.data['seo'] ??
      null) as RouteSeoData | null;

    const canonicalUrl =
      routeSeo?.canonical ?? defaultSeo.canonical ?? undefined;

    return {
      ...defaultSeo,
      ...routeSeo,
      canonical: canonicalUrl,
      openGraph: {
        ...defaultSeo.openGraph,
        ...routeSeo?.openGraph,
        'og:url': canonicalUrl || '',
      },
      twitter: {
        ...defaultSeo.twitter,
        ...routeSeo?.twitter,
        'twitter:url': canonicalUrl || '',
      },
      structuredData: routeSeo?.structuredData ?? defaultSeo.structuredData,
    };
  }

  private getDeepestChild(
    route: ActivatedRouteSnapshot
  ): ActivatedRouteSnapshot {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  private applySeo(seo: RouteSeoData): void {
    if (seo.title) {
      this.title.setTitle(this.decodeEntities(seo.title));
    }
    if (seo.description) {
      this.meta.updateTag({
        name: 'description',
        content: this.decodeEntities(seo.description),
      });
    }
    if (seo.keywords?.length) {
      this.meta.updateTag({
        name: 'keywords',
        content: seo.keywords.join(', '),
      });
    }
    this.meta.updateTag({
      name: 'robots',
      content: seo.robots ?? 'index,follow',
    });

    this.updateMetaGroup(seo.openGraph, 'property');
    this.updateMetaGroup(seo.twitter, 'name');
    this.updateCanonicalLink(seo.canonical);
    this.updateStructuredData(seo.structuredData);
  }

  private updateMetaGroup(
    values: Record<string, string | undefined> | undefined,
    attribute: 'name' | 'property'
  ): void {
    if (!values) {
      return;
    }

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        return;
      }

      this.meta.updateTag({
        [attribute]: key,
        content: this.decodeEntities(value),
      });
    });
  }

  private updateCanonicalLink(url?: string): void {
    if (!url) {
      return;
    }

    const head = this.document.head;
    let linkElement = this.document.getElementById(
      CANONICAL_LINK_ID
    ) as HTMLLinkElement | null;

    if (!linkElement) {
      linkElement = this.document.createElement('link');
      linkElement.id = CANONICAL_LINK_ID;
      linkElement.rel = 'canonical';
      head?.appendChild(linkElement);
    }

    linkElement.href = url;
  }

  private updateStructuredData(data?: Record<string, unknown>): void {
    const head = this.document.head;
    let scriptElement = this.document.getElementById(
      STRUCTURED_DATA_ID
    ) as HTMLScriptElement | null;

    if (!data) {
      if (scriptElement) {
        scriptElement.remove();
      }
      return;
    }

    if (!scriptElement) {
      scriptElement = this.document.createElement('script');
      scriptElement.id = STRUCTURED_DATA_ID;
      scriptElement.type = STRUCTURED_DATA_TYPE;
      head?.appendChild(scriptElement);
    }

    scriptElement.text = JSON.stringify(data);
  }

  private decodeEntities(text: string): string {
    const textarea = this.document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
}
