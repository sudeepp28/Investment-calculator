export interface DataInterface{
    
        initialInvestment:number,
        duration:number,annualInvestment:number,expectedReturn:number,
      
}
export interface Results{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number ,
  }
  export interface emiDataInterface{
    
        totalAmount:number;
        downPayment:number;
        interestRate:number;
        tenureYears:number;
      
}
export interface emiResults{
        month:number,
        emi: string,
        interest: string,
        principal:string,
        balance: string
        
}