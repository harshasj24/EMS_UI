import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material';
import { CoreModule } from './core/core.module';
import { ViewService } from './core/services/view.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [ViewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
