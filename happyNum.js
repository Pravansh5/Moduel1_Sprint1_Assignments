let num=1910;
let obj={};
let sm=0;
while(true){
    temp=num;
    sm=0;
    while(temp){
        sm+=(temp%10)**2;
        temp=Math.floor(temp/10);
    }
    if(sm==1){
        console.log("Happy Number");
        break;
    }else if(sm!=1){
        if(obj[sm]){
            // console.log(obj)
            console.log("Not a Happy Number");
            break;
        }
        else{
            obj[sm]=true;
            num=sm;
        }
    }else{
        obj[sm]=true;
        num=sm;
    }

}