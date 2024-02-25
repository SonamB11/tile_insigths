import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardStates: boolean[] = [false, false, false, false, false, false];

  toggleCard(index: number): void {
    this.cardStates[index] = !this.cardStates[index];
  }
  openYoutubeVideo(): void {
    window.open('https://www.youtube.com/', '_blank');
  }
}
