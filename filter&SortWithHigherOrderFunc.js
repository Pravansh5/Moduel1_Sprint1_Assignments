let students=[{ "name": "Alice", "marks": 58 },
    { "name": "Bob", "marks": 85 },
    { "name": "Charlie", "marks": 92 },
    { "name": "David", "marks": 45 },
    { "name": "Emma", "marks": 76 },
    { "name": "Frank", "marks": 63 },
    { "name": "Grace", "marks": 89 },
    { "name": "Hannah", "marks": 95 },
    { "name": "Ian", "marks": 54 },
    { "name": "Jack", "marks": 79 },
    { "name": "Kate", "marks": 67 },
    { "name": "Leo", "marks": 88 },
    { "name": "Mia", "marks": 91 },
    { "name": "Nathan", "marks": 72 },
    { "name": "Olivia", "marks": 82 }
  ]
  function processStudents(students){
      let sortedArr=students.filter((ele,i,arr)=>{
          return ele.marks>60;
      }).sort((a,b)=>b.marks-a.marks).map((ele,i,arr)=>ele.name)
      return sortedArr;  
  
    
  }
  console.log(processStudents(students));
// function filterStu(students){
//     let filteredArr=[];
//     console.log(typeof students)
//     for(let student of students){
//         if(student.marks>60){
//             filteredArr.push(student);
//         }
//     }
//     return sortArr(filteredArr);
// }

// function sortArr(filteredArr){
//     filteredArr.sort((a,b)=>{
//         return b.marks-a.marks;
//     });
//     return mapArr(filteredArr);
// }
// function mapArr(filteredArr){
//     let stuNameArr=[];
//     for(let stu of filteredArr){
//         stuNameArr.push(stu.name);
//     }
//     return stuNameArr;
// }
// console.log(filterStu(students));