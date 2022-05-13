import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  mensagem: string = '';

  constructor() { }

  add(mensagem: string) {
    this.mensagem = mensagem;

    setTimeout(() => {
      this.limpar();
    }, 4000);
  }


  limpar(){
    this.mensagem = '';
  }
}
