import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
    {
      path: '', 
      component: LayoutComponent,
      children: [
        { path: 'anasayfa', component: AppComponent },
        { path: 'seyahat', component: AppComponent },
        { path: 'seçenekler', component: AppComponent },
        // Diğer layout içindeki rotalar
      ]
    },
    { path: '**', redirectTo: '/anasayfa' }
  ];



  export default routes;