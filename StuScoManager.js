let stuScores=[30,40,70,80,93,91,89,87,72,39];
for(let i=0;i<stuScores.length;i++){
    if(stuScores[i]<40){
        stuScores[i]+=20;
    }
    else if(stuScores[i]>90){
        stuScores[i]=90;
    }
    
}
let passedStudents=0;
for(let score of stuScores){
    if(score>=50){
        passedStudents++;
    }
}
console.log("Passed Student "+passedStudents);
console.log("Adjusted Score "+stuScores);