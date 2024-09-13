import { Component } from '@angular/core';
import { Boletim, Situação } from './boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | undefined
  avFinal: number | undefined
  boletim: Boletim
  situacao: Situação
  situacaoFinal: Situação

  constructor() {
    this.mediaParcial = undefined
    this.avFinal = undefined
    //this.situacaoFinal = Situação.AVFINAL
    this.boletim = new Boletim(0, 0, 0, 0)
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    if (b1 && b2 && b3 && b4) {
      this.boletim = new Boletim(b1, b2, b3, b4)
      this.mediaParcial = this.boletim.calcularMediaParcial()
      this.situacao = this.boletim.obterSituacao()
    }      
  }

  calcularAvFinal(nota: number) {
    this.avFinal = this.boletim.calcularMediaFinal(nota)
    this.situacaoFinal = this.boletim.obterSituacao()
  }
}