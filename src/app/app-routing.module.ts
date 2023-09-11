import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { SubCategoryComponent } from './Components/sub-category/sub-category.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
  { path: 'SubCategory/:id', component: SubCategoryComponent },
  {path:'',redirectTo:'/Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
