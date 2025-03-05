let age=90;
function displayAge(){
    console.log(age);
    function changeAge(updatedage){
        age=updatedage;
        return ;
    }
    changeAge(20)

    return;
}
displayAge();


console.log(age);