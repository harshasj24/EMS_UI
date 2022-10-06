import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";
import { LandingPageComponent } from "./landing-page.component";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class HomeModule {}
