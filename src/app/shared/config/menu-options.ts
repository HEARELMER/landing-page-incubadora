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
    key: 'defense',
    label: 'Diagnóstico',
    routerLink: '/home',
  },
  {
    key: 'defense',
    label: 'Defensa',
    routerLink: '/defense',
  },
  {
    key: 'cases-library',
    label: 'Casoteca',
    routerLink: '/cases_library',
  },
  {
    key: 'about_us',
    label: 'Quiénes Somos',
    routerLink: '/about_us',
  },
  {
    key: 'contacts',
    label: 'Contactos',
    routerLink: '/contacts',
  }
];