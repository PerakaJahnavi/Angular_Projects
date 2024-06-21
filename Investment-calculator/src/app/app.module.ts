import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // UserInputComponent,
    InvestmentResultComponent,
  ],
  imports: [BrowserModule, 
    // FormsModule
    UserInputModule
],
  bootstrap: [AppComponent],
})
export class AppModule {}
