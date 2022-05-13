import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-momento-form',
  templateUrl: './momento-form.component.html',
  styleUrls: ['./momento-form.component.css']
})
export class MomentoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!:string;
  @Input() momentData: Moment | null = null;

  momentoForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentoForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ""),
      title: new FormControl(this.momentData ? this.momentData.title : "", [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : "", [Validators.required]),
      image: new FormControl(""),
    });
  }

  get title(){
    return this.momentoForm.get("title")!;
  }
  get description(){
    return this.momentoForm.get("description")!;
  }
  onFileSelected(event: any){
    const file: File = event.target.files[0];

    this.momentoForm.patchValue({image: file});
  }
  enviar(){
    if(this.momentoForm.invalid){
      return;
    }

    this.onSubmit.emit(this.momentoForm.value)
  }
}
