import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HotelSearchComponent } from "./components/hotel-search/hotel-search.component";
import { TextInfoComponent } from "./components/text-info/text-info.component";
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, RouterLinkActive, RouterLink, RouterOutlet ,CommonModule, NavbarComponent, HotelSearchComponent, TextInfoComponent, CardComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = 'hotel-reservation';
  aramaForm: any;

  onSubmit(){
    if (this.aramaForm.valid) {
      // Arama butonuna tıklanınca yapılacak işlemler buraya gelecek
      console.log(this.aramaForm.value);
      // Örneğin: API'ye istek göndererek otelleri filtrelemek
    } else {
      // Form geçerli değilse yapılacak işlemler buraya gelecek
      console.log('Form geçerli değil.');
    }
  }


}





