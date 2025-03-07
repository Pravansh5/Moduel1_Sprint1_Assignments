let msg;
let sentenceBuilder ={
    subject: "I",
    verb : "am",
    object : " coding",
    buildSentence :function (){
        if(!msg){
            console.log(this.subject +" "+ this.verb +" " +this.object)
        }else{
            console.log(msg);
            console.log(sentenceBuilder)
        }

        
    
    },
    updateProperty :function (property,value){
         msg=sentenceBuilder[property]!==undefined?(value!==""?(sentenceBuilder[property]=value,""):"Incomplete sentence"):"Invalid Property";
        // if(msg){
        //     console.log(msg);
        // }
    }
}

sentenceBuilder.updateProperty("object", "on the roof");
sentenceBuilder.buildSentence();