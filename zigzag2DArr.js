// Title: L1-Go in Zig-Zag
// Problem Statement: Given amatrixwith N rows and M columns. 
// Print the matrix elements starting from the top right corner and follow a zig-zag pattern.
// Look at the image for better understanding

// For example, for the above matrix, the required output would be as shown below.
let arr=[[1 ,2 ,3 ,4 ,5],
[6 ,7 ,8 ,9 ,1],
[3 ,2 ,5 ,4 ,6],
[7 ,8 ,9 ,1 ,2]]
// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.
let dir="left";
let zigZag="";
for(let i=0;i<arr.length;i++){

    if(dir==="left"){
        for(let j=arr[i].length-1;j>=0;j--){
            zigZag+=arr[i][j]+" ";
        }
        dir="right";
    }
    else{
        for(let j=0;j<arr[i].length;j++){
            zigZag+=arr[i][j]+" ";
        }
        dir="left";
    }
}
console.log(zigZag);




