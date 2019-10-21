import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JeuxPicoloPage } from './jeux-picolo.page';

const routes: Routes = [
  {
    path: '',
    component: JeuxPicoloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JeuxPicoloPage]
})
export class JeuxPicoloPageModule {}
