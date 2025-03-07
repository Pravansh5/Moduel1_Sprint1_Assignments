let employees=[

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]

let empPerformanceArr=employees.filter((ele,i,arr)=>{
    if(ele.tasksCompleted>5){
        return ele;
    }
}).sort((a,b)=>{
    return b.rating-a.rating
}).map((ele,i,arr)=>{
    let performance=""
    if(ele.rating>4.5){
        performance ="Excellent"
    }else if(ele.rating>3){
        performance ="Good";
    }else{
        performance ="Needs Improvement"
    }
    return {"name":ele.name,"performance":performance};
})
console.log(empPerformanceArr);