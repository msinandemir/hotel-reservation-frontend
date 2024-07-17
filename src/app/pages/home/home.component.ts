import { Component } from '@angular/core';
import { HotelSearchComponent } from "../../components/hotel-search/hotel-search.component";
import { TextInfoComponent } from "../../components/text-info/text-info.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HotelSearchComponent, TextInfoComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
