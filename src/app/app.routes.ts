import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        title: 'About',
        loadComponent:() =>
            import('../app/pages/about/about.component')
      },
      {
        path: 'contact',
        title: 'Contact',
        loadComponent:() =>
          import('../app/pages/contact/contact.component')
      },
];