import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HotelSearchComponent } from "./hotel-search/hotel-search.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInfoComponent } from "./text-info/text-info.component";
import { CardComponent } from "./card/card.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HotelSearchComponent, TextInfoComponent, CardComponent, FooterComponent]
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





