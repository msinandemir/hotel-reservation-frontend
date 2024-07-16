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
      { path: 'secenekler', component: AppComponent }, // 'seçenekler' yerine 'secenekler' olarak güncelledim
      // Diğer layout içindeki rotalar buraya eklenebilir
    ]
  },
  { path: '**', redirectTo: '/anasayfa' } // Bilinmeyen rotalar için anasayfaya yönlendirme
];
