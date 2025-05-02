import { Component, inject, Input, } from '@angular/core';

import { InvestmentService } from '../../app.service';

@Component({
  selector: 'app-emiresults',
  standalone:false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class EmiResultsComponent {
 
 private investmentService= inject (InvestmentService);

 get results(){
  return this.investmentService.emiresultsData;
 }
 get totalInterest(): number {
  return this.results?.reduce((sum, item) => sum + parseFloat(item.interest), 0) ?? 0;
}
}
