import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListagemPage } from './listagem.page';

import { ModalPage } from '../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListagemPage, ModalPage],
  entryComponents: [ModalPage]
})
export class ListagemPageModule {}
