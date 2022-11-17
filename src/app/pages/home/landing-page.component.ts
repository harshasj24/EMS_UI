import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';
import { LoginComponent } from '../auth/components/login.component';

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    public dailog: MatDialog,
    private auth: AuthService,
    private router: Router
  ) {}
  config: SwiperOptions = {
    spaceBetween: 30,
    effect: 'flip',
    navigation: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };
  ngOnInit(): void {
    if (this.auth.getEmployee()) {
      if (this.auth.getRole() === 'ROLE_EMPLOYEE') {
        this.router.navigate(['/employee']);
      } else {
        this.router.navigate(['/admin']);
      }
    }
  }
  openDailog() {
    this.dailog.open(LoginComponent, { disableClose: true, autoFocus: false });
  }
}
