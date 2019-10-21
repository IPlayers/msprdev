import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JeuxJdrHomePage } from './jeux-jdr-home.page';

const routes: Routes = [
  {
    path: '',
    component: JeuxJdrHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JeuxJdrHomePage]
})
export class JeuxJdrHomePageModule {}
