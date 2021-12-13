import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SayimHazirlaComponent } from './sayim-hazirla/sayim-hazirla.component';
import { RaporComponent } from './rapor/rapor.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateProductComponent } from './createProduct/createProduct.component';
import { FormsModule } from '@angular/forms';
import { SayimComponent } from './sayim/sayim.component';
import { AccountService } from './services/account.service';
import { ProductService } from './services/product.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [				
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProductComponent,
    ForgotPasswordComponent,
      SayimHazirlaComponent,
      RaporComponent,
      CreateProductComponent,
      SayimComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService,ProductService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
