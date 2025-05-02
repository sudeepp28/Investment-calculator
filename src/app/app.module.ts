import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./Investment/user/user.component";
import { ResultsComponent } from "./Investment/results/results.component";
import { EmiResultsComponent } from "./EMI/results/results.component";
import { EmiUserComponent } from "./EMI/user/user.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent, UserComponent, ResultsComponent,EmiResultsComponent,EmiUserComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule, BrowserModule,CommonModule]
})

export class AppModule{}