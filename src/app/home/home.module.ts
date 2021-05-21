import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatSidenavModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class HomeModule { }
