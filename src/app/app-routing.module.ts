import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./cards/home/home.component";
import { DescriptionComponent } from "./cards/description/description.component";
import { FormComponent } from "./cards/components/form/form.component";

 const routes: Routes = [
 {path:'', redirectTo:'/home', pathMatch:'full'},
 {path:'home', component:HomeComponent},
 {path:'description/:id', component:DescriptionComponent},
 {path:'newcharacter', component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
