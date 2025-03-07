let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let itemsCountObj=arr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]++;
    }else{
        acc[curr]=1;
    }
    return acc;
},{})
console.log(itemsCountObj);
