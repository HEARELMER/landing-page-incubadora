export interface MenuNode {
  key: string;
  label: string;
  icon?: string;
  routerLink?: string;
  children?: MenuNode[];
  isNode?: boolean;
}
export const MENU_OPTIONS: MenuNode[] = [
  {
    key: '',
    label: 'Inicio',
    routerLink: '/',
  },
  {
    key: 'enfoque',
    label: 'Enfoque',
    routerLink: '/enfoque',
  },
  {
    key: 'casoteca',
    label: 'Casoteca',
    routerLink: '/casoteca',
  },
  {
    key: 'nosotros',
    label: 'Nuestro Equipo',
    routerLink: '/nosotros',
  }, 
  {
    key: 'contactos',
    label: 'Contactos',
    routerLink: '/contactos',
  },
];
