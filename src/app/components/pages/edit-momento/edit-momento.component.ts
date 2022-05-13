import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moments';
import { MomentosService } from 'src/app/service/momentos.service';
import { MensagensService } from 'src/app/service/mensagens.service';

@Component({
  selector: 'app-edit-momento',
  templateUrl: './edit-momento.component.html',
  styleUrls: ['./edit-momento.component.css']
})
export class EditMomentoComponent implements OnInit {
  moment!: Moment;
  btnText: string = "Editar";

  constructor(
    private momentosService: MomentosService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagensService: MensagensService
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentosService.pegarMomento(id).subscribe((item) => {
      this.moment = item.data
    })
  }
  
  async editar(momentData: Moment) {
    const id = this.moment.id;

    const formData = new FormData();

    formData.append("title", momentData.title);
    formData.append("description", momentData.description);

    if(momentData.image) {
      formData.append("image", momentData.image);
    }

    await this.momentosService.atualizarMomento(id!, formData).subscribe();

    this.mensagensService.add(`Momento ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
