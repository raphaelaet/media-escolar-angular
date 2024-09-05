import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | undefined
  boletim: Boletim

  constructor() {
    this.mediaParcial = undefined
    this.boletim = new Boletim(0, 0, 0, 0)
  }

  calcularMediaParcial(b1: number, 
                       b2: number, 
                       b3: number,
                       b4: number) {
      if (b1 && b2 && b3 && b4) {
        this.boletim = new Boletim(b1, b2, b3, b4)
        this.mediaParcial = this.boletim.calcularMediaParcial()
      }
      
  }
}
