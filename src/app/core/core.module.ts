import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CoreRoutingModule,
    // LeaguesModule,
    // AppRoutingModule
  ],
  exports: [
    // AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule {
}
