import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { ResultsComponent } from "./results/results.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InvestmentService } from "./app.service";

@NgModule({
    declarations:[AppComponent,HeaderComponent, UserComponent, ResultsComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule, BrowserModule,CommonModule]
})

export class AppModule{}