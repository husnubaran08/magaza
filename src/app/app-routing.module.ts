import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductComponent } from './product/product.component';
import { RaporComponent } from './rapor/rapor.component';
import { SayimHazirlaComponent } from './sayim-hazirla/sayim-hazirla.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"forgotPassword", component:ForgotPasswordComponent},
  {path:"home", component:HomeComponent},
  {path:"product", component:ProductComponent},
  {path:"sayimhazirla", component:SayimHazirlaComponent},
  {path:"rapor", component:RaporComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
