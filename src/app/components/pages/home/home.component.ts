import { Component, OnInit } from '@angular/core';
import { MomentosService } from 'src/app/service/momentos.service';
import { Moment } from 'src/app/Moments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todosMomentos: Moment[] = [];
  momentos: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentosServie: MomentosService) { }


  ngOnInit(): void {
    this.momentosServie.pegarMomentos().subscribe((itens) =>{
      const data = itens.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString("pt-BR");
      });

      this.todosMomentos = data;
      this.momentos = data;
    });
  }

  search(evento: Event): void {
    const target = evento.target as HTMLInputElement;
    const value = target.value;
    
    this.momentos = this.todosMomentos.filter((momento) => {
      return momento.title.toLocaleLowerCase().includes(value);
    })
  }
}
