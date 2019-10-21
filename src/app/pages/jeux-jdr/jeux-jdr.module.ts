import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JeuxJdrPage } from './jeux-jdr.page';

const routes: Routes = [
  {
    path: '',
    component: JeuxJdrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JeuxJdrPage]
})
export class JeuxJdrPageModule {}
