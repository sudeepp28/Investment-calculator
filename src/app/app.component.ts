import { Component } from '@angular/core';
import { InvestmentService } from './app.service';


@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
isInvestmentCalculator=false;
isEMICalculator=false;

ShowInvestmentCalculator(){
  this.isInvestmentCalculator=!this.isInvestmentCalculator
  if(this.isEMICalculator){
    this.isEMICalculator=!this.isEMICalculator
  }
}
ShowEMICalculator(){
this.isEMICalculator=!this.isEMICalculator
if(this.isInvestmentCalculator){
  this.isInvestmentCalculator=!this.isInvestmentCalculator
}
}

}
