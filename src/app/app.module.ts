import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './UI/header-component.component';
import { FooterComponent } from './UI/footer.component';
import { PageNotFoundComponent } from './UI/page-not-found.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: "home", component:DashboardComponent },
  { path: "login", component:LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component:PageNotFoundComponent }
]

 //Annotation or Decorator -> Metadata for Module Identification
@NgModule({
  /* declarations : lists all the components, directives
      defined in the application */
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent
  ],

  /* imports : lists all the external modules this module is dependent on */
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AdminModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
    ProductModule
  ],

  /* list all the modeules, that this module exports */
  exports: [],

  /* providers : lists all the services, pipes (filters) that this module is dependent on 
  [Dependent injection using providerFactories] */
  providers: [],

  /* bootstrap : should exist only in the root module, lists the components
  that should be loaded at application startup */
  bootstrap: [AppComponent]
})
export class AppModule { }
