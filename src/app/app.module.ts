import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { CustomToastrComponent } from './components/custom-toastr/custom-toastr.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CustomToastrComponent
  ],
  entryComponents: [CustomToastrComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastrComponent
    }),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
