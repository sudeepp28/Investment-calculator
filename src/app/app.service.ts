import { Injectable } from "@angular/core";
import { DataInterface, emiDataInterface, emiResults, Results } from "./app.model";

@Injectable({providedIn:'root'})

export class InvestmentService{
    resultsData?:Results[];
    CalculateInvestmentResults(data:DataInterface) {
        const{initialInvestment,duration,expectedReturn,annualInvestment}=data
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
       this.resultsData=annualData;
      }
      emiresultsData?:emiResults[];
   

  
  
      calculateEMI(data:emiDataInterface) {
       
        const loanAmount = data.totalAmount - data.downPayment;
        const monthlyInterestRate = data.interestRate / 12 / 100;
        const months = data.tenureYears * 12;
    
        const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
                    (Math.pow(1 + monthlyInterestRate, months) - 1);
    
        const schedule = [];
        let balance = loanAmount;
        let totalInterestPaid=0
    
        for (let i = 1; i <= months; i++) {
          const interest = balance * monthlyInterestRate;
          const principal = emi - interest;
          balance -= principal;
          totalInterestPaid+=interest;
    
          schedule.push({
            month: i,
            emi: emi.toFixed(2),
            interest: interest.toFixed(2),
            principal: principal.toFixed(2),
            balance: balance.toFixed(2)
          });
        }
        this.emiresultsData=schedule;
        
        }
}