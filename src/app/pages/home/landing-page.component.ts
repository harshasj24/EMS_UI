import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  SwiperOptions,
} from "swiper";
import { LoginComponent } from "../auth/components/login.component";

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  constructor(public dailog: MatDialog) {}
  config: SwiperOptions = {
    spaceBetween: 30,
    effect: "flip",
    navigation: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };
  ngOnInit(): void {}
  openDailog() {
    this.dailog.open(LoginComponent, { disableClose: true, autoFocus: false });
  }
}
