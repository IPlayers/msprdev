import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemboursementHomePage } from './remboursement-home.page';

const routes: Routes = [
  {
    path: '',
    component: RemboursementHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemboursementHomePage]
})
export class RemboursementHomePageModule {}
