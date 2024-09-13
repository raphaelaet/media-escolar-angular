export enum Situação {
    CURSANDO = 'Cursando',
    APROVADO = 'Aprovado(a)',
    REPROVADO = 'Reprovado(a)',
    AVFINAL = 'Avaliação Final',
    TRANCADO = 'Trancado(a)',
    TRANSFERIDO = 'Transferido(a)'
}

export class Boletim {
    private situacao: Situação
    private mediaParcial: number | undefined
    private notaFinal: number | undefined
    private __b1: number | undefined
    private __b2: number | undefined
    private __b3: number | undefined
    private __b4: number | undefined

    constructor(bim1: number | undefined, bim2: number | undefined, bim3: number | undefined, bim4: number | undefined) {
        this.b1 = bim1
        this.b2 = bim2
        this.b3 = bim3
        this.b4 = bim4
        this.mediaParcial = undefined
        this.notaFinal = undefined
        this.situacao = Situação.CURSANDO
    }

    set b1(nota: number | undefined) {
        if (nota) {
            if (nota >= 0 && nota <= 100) {
                this.__b1 = nota
            }
        }
    }

    get b1(): number | undefined {
        return this.__b1
    }

    set b2(nota: number | undefined) {
        if (nota) {
            if (nota >= 0 && nota <= 100) {
                this.__b2 = nota
            }
        }
    }

    get b2(): number | undefined {
        return this.__b2
    }

    set b3(nota: number | undefined) {
        if (nota) {
            if (nota >= 0 && nota <= 100) {
                this.__b3 = nota
            }
        }
    }

    get b3(): number | undefined {
        return this.__b3
    }

    set b4(nota: number | undefined) {
        if (nota) {
            if (nota >= 0 && nota <= 100) {
                this.__b4 = nota
            }
        }
    }

    get b4(): number | undefined {
        return this.__b4
    }

    calcularMediaParcial(): number | undefined {
        let mp: number | undefined = undefined

        if (this.__b1 && this.__b2 && this.__b3 && this.__b4) {
            mp = (this.__b1 * 2 + this.__b2 * 2 + this.__b3 * 3 + this.__b4 * 3) / 10
            this.mediaParcial = mp
        }

        if (mp >= 60) {
            this.alterarSituacao(Situação.APROVADO)
        }
        else if (mp >= 10) {
            this.alterarSituacao(Situação.AVFINAL)
        }
        else {
            this.alterarSituacao(Situação.REPROVADO)
        }
        return mp
    }

    alterarSituacao(s: Situação) {
        this.situacao = s
    }

    obterSituacao(): Situação {
        return this.situacao
    }

    calcularMediaFinal(avFinal: number): number | undefined {
        let ntFinal: number

        ntFinal = (this.mediaParcial + avFinal) / 2
        this.notaFinal = ntFinal

        if (ntFinal >= 60) {
            this.alterarSituacao(Situação.APROVADO)
        }
        else {
            this.alterarSituacao(Situação.REPROVADO)
        }
        return ntFinal
    }
}