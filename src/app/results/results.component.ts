import { Component, inject, } from '@angular/core';

import { InvestmentService } from '../app.service';

@Component({
  selector: 'app-results',
  standalone:false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
 private investmentService= inject (InvestmentService);

 get results(){
  return this.investmentService.resultsData;
 }
}
