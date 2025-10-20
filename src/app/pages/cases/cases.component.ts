import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface CaseSocialLink {
  readonly label: string;
  readonly link: string;
  readonly icon: string;
}

interface CaseVideo {
  readonly thumbnail: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  readonly socials: ReadonlyArray<CaseSocialLink>;
}

@Component({
  selector: 'app-cases',
  imports: [NgOptimizedImage],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasesComponent {
  readonly videos: ReadonlyArray<CaseVideo> = [
    {
      thumbnail:
        'https://www.shutterstock.com/image-photo/lawyers-desk-consulting-discussing-advise-600nw-2629474353.jpg',
      alt: 'Abogado revisando documentación para un caso de flagrancia',
      title: 'Defensa en caso de flagrancia',
      description:
        'Análisis de procedimientos y estrategias para responder con éxito ante detenciones en flagrancia y audiencias inmediatas.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
    {
      thumbnail:
        'https://www.shutterstock.com/image-photo/lawyer-woman-meeting-paperwork-office-600nw-2621776755.jpg',
      alt: 'Abogada preparando argumentación para juicio oral',
      title: 'Claves del juicio oral efectivo',
      description:
        'Mostramos cómo estructuramos los argumentos, el contrainterrogatorio y la comunicación para dominar audiencias complejas.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
    {
      thumbnail:
        'https://img.freepik.com/fotos-premium/abogados-leen-libros-legales-defienden-casos-sus-clientes-concepto-abogado-asume-que-acusado-defiende-al-cliente-ganar-caso-o-obtener-mayor-beneficio-acuerdo-ley_528263-3957.jpg',
      alt: 'Equipo legal trabajando en un recurso de apelación',
      title: 'Procedimientos de apelación clave',
      description:
        'Detalle de los pasos esenciales para presentar recursos sólidos y lograr la revocación de sentencias desfavorables.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
  ];
}
