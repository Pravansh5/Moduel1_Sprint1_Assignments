let person = { role: "admin", experience: 3, active: false, department: "Finance" };
let access=person.role=="admin"?(person.active==true?(person.experience>5?(person.department=="IT"?"Full IT Admin Access":"Full General Admin Access"):"Limited Admin Access"):"Admin Access Revoked")
            :person.role=="manager"?(person.active==true?(person.experience>3?(person.department=="Sales"?"Full Sales Manager Access":"Full Manager Access"):"Limited Manager Access"):"Manager Access Revoked")
            :person.role=="user"?(person.active==true?(person.department==="Support"?"Priority Support Access":"User Access"):"User Access Revoked")
            :"Invalid Role"

console.log(access);