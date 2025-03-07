function advUserPrivilegeManagSyst(user){
    let access=user.role==="admin"?(user.active==true?(user.experience>5?
        (user.department==="IT"?"Full IT Admin Access":"Full General Admin Access"):"Limited Admin Access"):"Admin Access Revoked"):
        user.role==="manager"?(user.active===true?(user.experience>3?(user.department==="Sales"?"Full Sales Manager Access":"Full Manager Access"):"Limited Manager Access"):"Manager Access Revoked"):
        user.role==="user"?(user.active===true?(user.department==="Support"?"Priority Support Access":"User Access"):"User Access Revoked"):"Invalid Role"
        console.log(access);
}
advUserPrivilegeManagSyst({ role: "admin", experience: 3, active: false, department: "Finance" })