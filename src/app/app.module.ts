import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductEmptyComponent } from './product-empty/product-empty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrudactNavComponent } from './prudact-nav/prudact-nav.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { AppinitModule } from './INIT/appinit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvestCompComponent } from './invest-comp/invest-comp.component';
import { CardcompComponent } from './invest-comp/cardcomp/cardcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductSingleComponent,
    ProductMainComponent,
    PrudactNavComponent,
    ProductModalComponent,
    ProductAddComponent,
    ProductEmptyComponent,
    InvestCompComponent,
    CardcompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppinitModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
