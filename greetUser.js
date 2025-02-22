function greatUser(){
    let userName=prompt("Please enter your name");
    if(userName==null || userName.length==0 ){
        alert("Hello, Guest");
    }else{
        alert(`Hello, ${userName}`);
    }
}
greatUser()