let prod=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
let prodNames=prod.map((ele,arr)=>ele.name)

prod.forEach((ele,arr)=>{
    if(ele.price>50){
        console.log(`${ele.name} price is above $50`);
    }
    else{
        console.log(`${ele.name} price is below $50`)
    }
});
