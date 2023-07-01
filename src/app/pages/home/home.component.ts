import { Component, OnInit, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    const typed = new Typed('#typed-text', {
      strings: ["Nail's Art Suray"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false,
      onComplete: () => {
        // Función que se ejecuta después de que se complete la escritura
        this.showPresentation();
      }
    });
  }

  ngOnInit() {
  }

  showPresentation() {
    const presentationText = "¡Embellece tus uñas con nosotros!";
    // Mostrar el texto de presentación gradualmente
    const presentationTyped = new Typed('#presentation-text', {
      strings: [presentationText],
      typeSpeed: 50,
      startDelay: 500,
      showCursor: false
    });
  }

}



