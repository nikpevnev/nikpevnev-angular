import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { StoreComponent } from './store/store.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MainStoreComponent } from './main/main.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'search', component: ListComponent },
          { path: 'product', component: ProductComponent },
          { path: '', component: MainStoreComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StoreRoutingModule { }
