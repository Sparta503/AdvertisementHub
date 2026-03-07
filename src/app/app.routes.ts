import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about/about.page';
import { DoctorsPage } from './pages/doctors/doctors.page';
import { ServicesPage } from './pages/services/services.page';
import { ContactPage } from './pages/contact/contact.page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutPage },
  { path: 'doctors', component: DoctorsPage },
  { path: 'services', component: ServicesPage },
  { path: 'contact', component: ContactPage }
];
