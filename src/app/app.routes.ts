import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', redirectTo:'/anasayfa',pathMatch:'full'},
    {path:'anasayfa', component:AppComponent},
    {path:'seyahat', component:AppComponent},
    {path:'seçenekler', component:AppComponent},
    {path:'**', redirectTo:'/anasayfa'}
];

export default routes;
