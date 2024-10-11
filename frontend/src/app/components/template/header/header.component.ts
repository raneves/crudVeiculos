import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent, AppComponent, MatToolbarModule, RouterLink,
     RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
