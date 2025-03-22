import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  },
  { path: 'sitemap.xml', redirectTo: 'https://www.nikpevnev.com/sitemap.xml', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full'  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
