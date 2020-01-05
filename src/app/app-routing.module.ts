import { RibbonsComponent } from './pages/ui/ribbons/ribbons.component';
import { TimelineComponent } from './pages/ui/timeline/timeline.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalsComponent } from './pages/ui/modals/modals.component';
import { SlidersComponent } from './pages/ui/sliders/sliders.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ContentComponent } from './shared/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './pages/ui/general/general.component';
import { UINavbarComponent } from './pages/ui/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'pages/ui/general', component: GeneralComponent },
  { path: 'pages/ui/icons', component: IconsComponent },
  { path: 'pages/ui/buttons', component: ButtonsComponent },
  { path: 'pages/ui/sliders', component: SlidersComponent },
  { path: 'pages/ui/modals', component: ModalsComponent },
  { path: 'pages/ui/navbar', component: UINavbarComponent },
  { path: 'pages/ui/timeline', component: TimelineComponent },
  { path: 'pages/ui/ribbons', component: RibbonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
