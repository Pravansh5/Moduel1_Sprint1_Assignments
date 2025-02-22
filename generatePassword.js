function generatePassword(length,includeNumbers=true,includeSpecialChars=true){
    let lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
    let upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums="1234567890";
    let specSym="@!#"
    let allChars="";
    allChars+=lowerCaseLetters;
    allChars+=upperCaseLetters;

    let password="";
    if(includeNumbers){
        password+=nums[Math.floor(Math.random()*11)];
        allChars+=nums;
        length-=1;
    }
    if(includeSpecialChars){
        password+=specSym[Math.floor(Math.random()*3)];
        allChars+=specSym;
        length-=1;
    }
    password+=upperCaseLetters[Math.floor(Math.random()*26)];
    length-=1;
    if(length<0){
        console.log("Not possible");
    }else if(length==0){
        console.log(password);
    }else{
        n=allChars.length;
        while(length>0){
            password+=allChars[Math.floor(Math.random()*n)];
            length-=1;
        }
        let arr=password.split(" ");
        for(let i=0;i<password.length;i++){
            
            arr[i]=arr[Math.floor(Math.random()*password.length)];

        }
        password=arr.join("");
        console.log(password);
    }
}
generatePassword(3,true,false);