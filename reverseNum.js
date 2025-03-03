let num=291;
let revNum=0;
while(num>0){
    revNum*=10;
    revNum+=num%10;
    num=Math.floor(num/10);
}
console.log(revNum);