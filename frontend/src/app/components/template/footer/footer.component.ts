import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
