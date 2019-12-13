import { BrowserModule } from "@angular/platform-browser";
import { NgModule, PipeDecorator } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from "./app.component";
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import "hammerjs";
import { MenuComponent } from "./menu/menu.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'

import { DishDetailComponent } from "./dish-detail/dish-detail.component";
import {DishService} from './services/dish.service';
import { PromotionService} from './services/promotion.service'
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [AppComponent, MenuComponent, DishDetailComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule

    
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
],
entryComponents: [
  LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule {}
