import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { SevicesComponent } from './sevices/sevices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
 // {path:'Home',component:BannerComponent},
  {path:'Service',component:SevicesComponent},
  {path:'',component:BannerComponent},
  {path:'Home',component:BannerComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"Contact",component:ContactusComponent},
  {path:"About",component:AboutusComponent},
  {path:"Our Services",component:SevicesComponent},
  {path:"About Us",component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
