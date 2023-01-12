import { Component } from '@angular/core';
import { faAddressBook, faMailReply, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faAddress = faAddressBook;
  faMail = faMailReply;
  faMobile = faMobile;
  social: any[] = [faFacebook, faGithub, faInstagram, faLinkedin];
  faMessage = faTelegram;

  socialFacebook = "https://www.facebook.com/saikrishna.rajagopal.9/";
  socialGitHub = "https://github.com/SaiKrishna6699";
  socialInstagram = "https://www.instagram.com/saikrishna.rajagopal/";
  socialLinkedIn = "https://www.linkedin.com/in/sai-krishna-rajagopal-6134021b8/";
  https: any;


}