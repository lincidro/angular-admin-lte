import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './shared/content/content.component';
import { ControlSidebarComponent } from './shared/control-sidebar/control-sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './pages/ui/general/general.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { SlidersComponent } from './pages/ui/sliders/sliders.component';
import { ModalsComponent } from './pages/ui/modals/modals.component';
import { TimelineComponent } from './pages/ui/timeline/timeline.component';
import { RibbonsComponent } from './pages/ui/ribbons/ribbons.component';
import { UINavbarComponent } from './pages/ui/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ControlSidebarComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidersComponent,
    ModalsComponent,
    TimelineComponent,
    RibbonsComponent,
    UINavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
