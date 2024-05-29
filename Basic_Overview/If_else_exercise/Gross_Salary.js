const obj = {
    Basic_Salary: 35000,
    Allowances: 2000,
    Bonuses: 1500,
    Overtime_Pay: 700,
    Other_Additional_Earnings: 1200,

    result: function Gross_Salary() {
       return this.Basic_Salary + this.Allowances + this.Bonuses + this.Overtime_Pay + this.Other_Additional_Earnings ;
    }
};

console.log("Your Gross Salary is : ",obj.result());

// output ==> Your Gross Salary is : 40400  