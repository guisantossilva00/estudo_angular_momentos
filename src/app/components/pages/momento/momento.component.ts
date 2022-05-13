import { Component, OnInit } from '@angular/core';
import { MomentosService } from 'src/app/service/momentos.service';
import { Moment } from 'src/app/Moments';
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { MensagensService } from 'src/app/service/mensagens.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Comentario } from 'src/app/Comentarios';
import { ComentariosService } from 'src/app/service/comentarios.service';

@Component({
  selector: 'app-momento',
  templateUrl: './momento.component.html',
  styleUrls: ['./momento.component.css']
})
export class MomentoComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  comentarioForm!: FormGroup;

  constructor(private momentosService: MomentosService, 
    private route: ActivatedRoute,
    private mensagensService: MensagensService,
    private router: Router,
    private comentariosService: ComentariosService
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("aqui >", this.moment);
    this.momentosService.pegarMomento(id).subscribe(item => this.moment = item.data);
    
    this.comentarioForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.comentarioForm.get("text")!;
  }

  get username() {
    return this.comentarioForm.get("username")!;
  }

  async remove(id: number){
    await this.momentosService.removeMomento(id).subscribe();
    
    this.mensagensService.add("Momento excluído com sucesso!");

    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective){
    if(this.comentarioForm.invalid) {
      return;
    }

    const data: Comentario = this.comentarioForm.value;

    data.momentId = Number(this.moment!.id);

    await this.comentariosService.criarComentario(data).subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.mensagensService.add("Comentário adicionado!");

    // resetar o form
    this.comentarioForm.reset();

    formDirective.resetForm();
  }
}
