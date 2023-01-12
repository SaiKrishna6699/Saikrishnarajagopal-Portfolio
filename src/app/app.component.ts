import { Component } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SaiKrishna-Rajagopal';

  faYoutube = faYoutube;
  faUser = faUser;
  
  
}
