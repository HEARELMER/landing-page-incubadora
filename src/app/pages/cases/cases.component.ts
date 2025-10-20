import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  imports: [NgClass],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
})
export class CasesComponent {
  videos = [
    {
      thumbnail:
        'https://www.shutterstock.com/image-photo/lawyers-desk-consulting-discussing-advise-600nw-2629474353.jpg',
      alt: 'Thumbnail de video sobre Caso Penal de Flagrancia',
      title: 'Defensa en Caso de Flagrancia',
      description:
        'Análisis completo de los procedimientos y las estrategias clave para defenderse en un caso de detención en flagrancia.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
    {
      thumbnail:
        'https://www.shutterstock.com/image-photo/lawyer-woman-meeting-paperwork-office-600nw-2621776755.jpg',
      alt: 'Thumbnail de video sobre Estrategias de Juicio Oral',
      title: 'Claves del Juicio Oral Efectivo',
      description:
        'Mostramos cómo estructuramos los argumentos y el contrainterrogatorio para dominar la sala en audiencias complejas.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
    {
      thumbnail:
        'https://img.freepik.com/fotos-premium/abogados-leen-libros-legales-defienden-casos-sus-clientes-concepto-abogado-asume-que-acusado-defiende-al-cliente-ganar-caso-o-obtener-mayor-beneficio-acuerdo-ley_528263-3957.jpg',
      alt: 'Thumbnail de video sobre Procedimientos de Apelación',
      title: 'Procedimientos de Apelación Clave',
      description:
        'Detalle de los pasos esenciales para presentar un recurso de apelación sólido y lograr la revocación de sentencias.',
      socials: [
        { label: 'TikTok', link: '#', icon: 'pi pi-tiktok' },
        { label: 'YouTube', link: '#', icon: 'pi pi-youtube' },
        { label: 'Facebook', link: '#', icon: 'pi pi-facebook' },
      ],
    },
  ]; 
}
