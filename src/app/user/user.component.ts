import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentService } from '../app.service';



@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

constructor(private investmentService:InvestmentService){}

 enteredIntialInvestment:number=0;
 enteredAnnualInvestment:number=0;
 enteredExpectedReturn:number=5;
 enteredDuration:number=12;



 onSubmit(){
  this.investmentService.CalculateInvestmentResults
  ({
    initialInvestment: +this.enteredIntialInvestment,duration: 
    +this.enteredDuration,expectedReturn:+ this.enteredExpectedReturn,annualInvestment:+ this.enteredAnnualInvestment
  })
 }
}
