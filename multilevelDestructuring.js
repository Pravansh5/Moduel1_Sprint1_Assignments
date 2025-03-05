const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
     { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
// let {name:userName,address:{city,street:{name:streetName}}}=people[0];
let personInfo=[];
for(let  person of people){
    let {name:personName,address:{city,street:{name:streetName}}}=person;
    personInfo.push(`${personName} lives in ${city} on ${streetName}`);

}
console.log(personInfo);