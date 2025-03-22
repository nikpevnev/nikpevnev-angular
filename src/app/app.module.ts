import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyImgDirective } from './LazyImgDirective';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { NgApexchartsModule } from 'ng-apexcharts'

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//Angular Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './store/checkout/checkout.component';

import { NgxScrollPositionRestorationModule } from 'ngx-scroll-position-restoration';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    LazyImgDirective,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollPositionRestorationModule.forRoot(), // Import NgxScrollPositionRestorationModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgApexchartsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
