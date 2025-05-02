import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentService } from '../../app.service';



@Component({
  selector: 'app-emiuser',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class EmiUserComponent {
constructor(private emiService:InvestmentService){}
  enteredTotalAmout=0
  enteredDownPayment=0
  enteredAnnualInterestRate=10
  enteredTenure=1
  onsubmit(){
    this.emiService.calculateEMI({
      totalAmount:this.enteredTotalAmout,
      downPayment:this.enteredDownPayment,
      interestRate:this.enteredAnnualInterestRate,
      tenureYears:this.enteredTenure
    })
  }
}
