import { Component } from '@angular/core';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent {
  choice!: string;
  result!: string;

  flip() {
    const rnd = Math.random()
    const flip = rnd < 0.5 ? "Orel":"Reshka"
    if (this.choice === flip) {
      this.result = "Вы выиграли";
    }
    else {
      this.result ="Вы проиграли";
    }
  }
}
