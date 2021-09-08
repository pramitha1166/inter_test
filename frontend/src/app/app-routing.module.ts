import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ListallComponent } from './listall/listall.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SingleComponent } from './single/single.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "listall",
    component: ListallComponent
  },
  {
    path: "single/:id",
    component: SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
