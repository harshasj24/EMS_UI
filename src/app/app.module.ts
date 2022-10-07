import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material';
import { CoreModule } from './core/core.module';
import { ViewService } from './core/services/view.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [ViewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
