let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  for(let name in studentScores){
    if(studentScores[name]>=90){
        console.log(`${name} - A`);
    }else if(studentScores[name]>=80){
        console.log(`${name} - B`);
    }else if(studentScores[name]>=70){
        console.log(`${name} - C`);
    }else if (studentScores[name]>=60){
        console.log(`${name} - D`);
    }else{
        console.log(`${name} - F`);
    }
  }