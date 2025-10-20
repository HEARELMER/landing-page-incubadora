import { Routes } from '@angular/router';

export interface RouteSeoData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  robots?: string;
  structuredData?: Record<string, unknown>;
  openGraph?: Record<string, string>;
  twitter?: Record<string, string>;
}

const siteBaseUrl = 'https://www.escribaabogados.com';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: {
      seo: {
        title: 'Escriba Abogados | Defensa penal estrat&eacute;gica',
        description:
          'Diagn&oacute;stico legal, litigio penal y acompa&ntilde;amiento preventivo con metodolog&iacute;as de comunicaci&oacute;n efectiva y pensamiento estrat&eacute;gico.',
        keywords: [
          'abogados penales',
          'estudio jur&iacute;dico penal',
          'diagn&oacute;stico legal',
          'defensa penal',
        ],
        canonical: `${siteBaseUrl}/`,
        openGraph: {
          'og:title': 'Escriba Abogados | Defensa penal estrat&eacute;gica',
          'og:description':
            'Consultor&iacute;a penal, litigio estrat&eacute;gico y acompa&ntilde;amiento preventivo para empresas y personas.',
          'og:type': 'website',
        },
        twitter: {
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Escriba Abogados | Defensa penal estrat&eacute;gica',
        },
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Escriba Abogados',
          description:
            'Diagnóstico penal, litigio y estrategia preventiva brindada por Escriba Abogados.',
          url: `${siteBaseUrl}/`,
        },
      } satisfies RouteSeoData,
    },
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'enfoque',
    loadComponent: () =>
      import('./pages/enfoque/enfoque.component').then(
        (m) => m.EnfoqueComponent,
      ),
    data: {
      seo: {
        title: 'Enfoque legal | Escriba Abogados',
        description:
          'Metodolog&iacute;a de diagn&oacute;stico penal, gesti&oacute;n de riesgos y estrategias de comunicaci&oacute;n jur&iacute;dica implementadas por Escriba Abogados.',
        keywords: [
          'estrategia legal',
          'diagn&oacute;stico penal',
          'prevenci&oacute;n de riesgos legales',
        ],
        canonical: `${siteBaseUrl}/enfoque`,
        openGraph: {
          'og:title': 'Enfoque legal | Escriba Abogados',
          'og:description':
            'Conozca el enfoque estrat&eacute;gico que aplicamos en diagn&oacute;sticos y litigio penal.',
        },
        twitter: {
          'twitter:title': 'Enfoque legal | Escriba Abogados',
        },
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Enfoque legal',
          description:
            'Metodología de diagnóstico penal, gestión de riesgos y estrategias comunicacionales de Escriba Abogados.',
          url: `${siteBaseUrl}/enfoque`,
        },
      } satisfies RouteSeoData,
    },
  },
  {
    path: 'casoteca',
    loadComponent: () =>
      import('./pages/cases/cases.component').then((m) => m.CasesComponent),
    data: {
      seo: {
        title: 'Casoteca penal | Escriba Abogados',
        description:
          'Resultados destacados del equipo de Escriba Abogados en asesor&iacute;a penal y defensas estrat&eacute;gicas.',
        keywords: [
          'casos penales',
          'resultados legales',
          'estudio jur&iacute;dico casos',
        ],
        canonical: `${siteBaseUrl}/casoteca`,
        openGraph: {
          'og:title': 'Casoteca penal | Escriba Abogados',
          'og:description':
            'Revisi&oacute;n de casos relevantes trabajados por Escriba Abogados.',
        },
        twitter: {
          'twitter:title': 'Casoteca penal | Escriba Abogados',
        },
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Casoteca legal',
          description:
            'Recopilación de casos penales y estrategias destacadas de Escriba Abogados.',
          url: `${siteBaseUrl}/casoteca`,
        },
      } satisfies RouteSeoData,
    },
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent,
      ),
    data: {
      seo: {
        title: 'Equipo legal | Escriba Abogados',
        description:
          'Conozca al equipo multidisciplinario de Escriba Abogados, especialistas en litigio penal y estrategias preventivas.',
        keywords: [
          'abogados especialistas',
          'estudio legal equipo',
          'defensa penal equipo',
        ],
        canonical: `${siteBaseUrl}/nosotros`,
        openGraph: {
          'og:title': 'Equipo legal | Escriba Abogados',
          'og:description':
            'Estudio jur&iacute;dico con profesionales en derecho penal, comunicaci&oacute;n y estrategia.',
        },
        twitter: {
          'twitter:title': 'Equipo legal | Escriba Abogados',
        },
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Equipo de Escriba Abogados',
          description:
            'Equipo multidisciplinario especializado en litigio penal, comunicación estratégica y prevención de riesgos legales.',
          url: `${siteBaseUrl}/nosotros`,
        },
      } satisfies RouteSeoData,
    },
  },
  {
    path: 'contactos',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent,
      ),
    data: {
      seo: {
        title: 'Contacto | Escriba Abogados',
        description:
          'Solicite una consulta con Escriba Abogados para analizar su situaci&oacute;n penal y construir una estrategia efectiva.',
        keywords: [
          'contacto abogado penal',
          'consulta legal penal',
          'asesor&iacute;a jur&iacute;dica',
        ],
        canonical: `${siteBaseUrl}/contactos`,
        openGraph: {
          'og:title': 'Contacto | Escriba Abogados',
          'og:description':
            'Reserve una asesor&iacute;a con Escriba Abogados y reciba un diagn&oacute;stico legal inicial.',
        },
        twitter: {
          'twitter:title': 'Contacto | Escriba Abogados',
        },
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacto Escriba Abogados',
          description:
            'Opciones de contacto para coordinar diagnósticos legales y asesorías penales con Escriba Abogados.',
          url: `${siteBaseUrl}/contactos`,
        },
      } satisfies RouteSeoData,
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
