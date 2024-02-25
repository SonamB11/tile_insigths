import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  youtubeLink = '';
  emailAddress = 'bhartisonam594@gmail.com';
constructor(public router:Router){

}

onHome(){
  window.scrollTo({top:0,behavior:'smooth'})
    }

    onAbout(){
  
      this.router.navigate(['./portfolio-website/about'])
    }
    onContact(){
  
      this.router.navigate(['./portfolio-website/contact'])
    }
}
