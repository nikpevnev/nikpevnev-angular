import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { ListComponent } from './list/list.component';
import { StoreComponent } from './store/store.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MainStoreComponent } from './main/main.component';
import { NgxScrollPositionRestorationModule } from 'ngx-scroll-position-restoration';
import { TopComponent } from './top/top.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxScrollPositionRestorationModule
  ],
  declarations: [
    StoreComponent,
    MainStoreComponent,
    ListComponent,
    ProductComponent,
    TopComponent
  ]
})

export class StoreModule { }
