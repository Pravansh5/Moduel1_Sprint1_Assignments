// **Title:**L1-Pattern Printing III

// **Problem Statement:**You are given a number stored in a variable with the name N 
// You have to print the pattern as shown below according to the value stored in N For example, 
// consider the value stored in N = 5, then the required pattern will be.

// * * * * *

// *

// *

// *

// * * * * *
let N=7;
let str="*".repeat(N);
console.log(str);
for(let i=0;i<N-2;i++){
    console.log("*");
}
console.log(str);


