// Title: L2-Circular Traversal

// Problem Statement: Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// Note: No element should be visited more than once.


let arr=[[1 ,2, 3],
[4 ,5 ,6],
[7 ,8 ,9]]
// 7 4 1 2 3 6 9 8

let N=3;

let M=3;

let circularTreversal="";
for(let i=N-1;i>=0;i--){
    circularTreversal+=arr[i][0]+" ";
}
for(let j=1;j<M;j++){
    circularTreversal+=arr[0][j]+" ";
}
for(let i=1;i<N;i++){
    circularTreversal+=arr[i][M-1]+" ";
}
for(let j=M-2;j>0;j--){
    circularTreversal+=arr[N-1][j]+" ";
}
console.log(circularTreversal);


