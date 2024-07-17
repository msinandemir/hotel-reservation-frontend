import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
    { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
    {
      path: '', 
      component: LayoutComponent,
      children: [
        { path: 'anasayfa', component: HomeComponent },
        { path: 'favorites', component: FavoritesComponent },
        { path: 'login', component:LoginComponent },
        { path: 'signup', component:SignupComponent}
        // Diğer layout içindeki rotalar
      ]
    },
    { path: '**', redirectTo: '/anasayfa' }
  ];

  export default routes;
  