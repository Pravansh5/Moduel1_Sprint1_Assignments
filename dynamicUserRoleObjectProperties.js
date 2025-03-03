let user = { name: "Alice", role: "user", active: false };
let dynamicMsg= user.role==="admin"?(user.active==true?"Admin Access Granted!":"Admin Access Revoked")
:user.role==="user"?(user.active==true?"User Access Granted!":"User Access Revoked")
:"Access Denied"
console.log(dynamicMsg)


// if(user.role==="admin" && user.active==true){
//     console.log("Admin Access Granted!");
// }else if(user.role==="admin" && user.active==false){
//     console.log("Admin Access Revoked")
// }else if(user.role==="user" && user.active==true){
//     console.log("User Access Granted")
// }else if(user.role=="user" && user.active==false){
//     console.log("User Access Revoked");
// }else{
//     console.log("Access Denied");
// }