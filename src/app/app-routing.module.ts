import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMomentoComponent } from './components/pages/edit-momento/edit-momento.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentoComponent } from './components/pages/momento/momento.component';
import { NovoMomentoComponent } from './components/pages/novo-momento/novo-momento.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "momentos/novo", component: NovoMomentoComponent},
  {path: "momentos/edit/:id", component: EditMomentoComponent},
  {path: "momento/:id", component: MomentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
