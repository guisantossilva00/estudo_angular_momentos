import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MensagensService } from 'src/app/service/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
  faTimes = faTimes;

  constructor(public mensagensService: MensagensService) { }

  ngOnInit(): void {
  }

}
