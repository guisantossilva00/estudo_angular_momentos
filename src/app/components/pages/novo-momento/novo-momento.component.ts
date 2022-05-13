import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moments';
import { MomentosService } from 'src/app/service/momentos.service';
import { MensagensService } from 'src/app/service/mensagens.service';

@Component({
  selector: 'app-novo-momento',
  templateUrl: './novo-momento.component.html',
  styleUrls: ['./novo-momento.component.css']
})
export class NovoMomentoComponent implements OnInit {
  btnText = "Compartilhar!";  

  constructor(
    private momentoService: MomentosService, 
    private mensagensService: MensagensService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formDado = new FormData();

    formDado.append("title", moment.title);
    formDado.append("description", moment.description);

    if(moment.image) {
      formDado.append("image", moment.image)
    }

    await this.momentoService.createMoment(formDado).subscribe();

    this.mensagensService.add("Momento adicionado com sucesso!")

    this.router.navigate(['/']);
  }
}
