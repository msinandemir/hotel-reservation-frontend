import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  Math = Math; // Math objesini component'e ekleyin

  hotels = [
    {
      imageUrl: 'assets/picture/the-st-regis-bali-resort-Strand-Villa-pool.jpg',
      title: 'The St. Regis Bali Resort',
      description: 'A luxurious escape nestled in nature.',
      location: 'Bali, Indonesia',
      price: 300,
      rating: 4.5
    },
    {
      imageUrl: 'assets/picture/bandara-resort-and-spa-1567217079-213237-ImageGalleryLightbox.jpg',
      title: 'Bandara Resort and Spa',
      description: 'A tranquil retreat in Thailands tropical paradise.',
      location: 'Koh Samui, Thailand',
      price: 250,
      rating: 4.0
    },
    {
      imageUrl: 'assets/picture/3.jpg',
      title: 'Carya Spa Resort',
      description: 'A dream getaway for golf enthusiasts in Antalya, Turkey.',
      location: 'Antalya, Turkey',
      price: 200,
      rating: 4.2
    },
    {
      imageUrl: 'assets/picture/2.jpeg',
      title: 'Paradise Hotel',
      description: 'Relaxing stay in crystal-clear waters of Maldives.',
      location: 'Maldives',
      price: 150,
      rating: 4.8
    },
    {
      imageUrl: 'assets/picture/1.jpg',
      title: 'Padova Resort',
      description: 'Peaceful break in the historical streets of Venice, Italy.',
      location: 'Venice, Italy',
      price: 100,
      rating: 4.1
    },
    {
      imageUrl: 'assets/picture/1.jpg',
      title: 'Via Monte Cengio Resort',
      description: 'Ideal romantic getaway in Italys serene villages.',
      location: 'Vicenza, Italy',
      price: 80,
      rating: 3.9
    }
  ];
}
