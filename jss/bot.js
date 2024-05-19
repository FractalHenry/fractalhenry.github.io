var hist=[];
var answers=[
    {msg:"привет", ans:"Доброго времени суток!"},
    {msg:"что сегодня поесть?",ans:"Нам кажется лучше всего будет вок!"}
]
var msgid=0;
var text = document.getElementById("msgtext");
greetMsg()
function greetMsg(){
    var txt="Чем могу помочь?";
    var templ = document.querySelector("#msgTempl");
    var msg=templ.content.cloneNode(true);
    msg.querySelector("#msgcont").innerHTML=txt;
    document.getElementById("chatarea").appendChild(msg);
    var tuple= {msgid,txt};
    msgid++;
    hist.push(tuple);
}
function sendMsg(){
    if(text.value!=""){
    var templ = document.querySelector("#msgTempl");
    var msg=templ.content.cloneNode(true);
    msg.querySelector("#msgcont").innerHTML=text.value;
    msg.querySelector("#msgoutercont").classList.replace("row","rowr");
    document.getElementById("chatarea").appendChild(msg);
    var txt=text.value;
    var tuple= {msgid,txt};
    hist.push(tuple);
    text.value='';
    msgid++;
    answerMsg();
    }
}
function answerMsg(){
    
    var templ = document.querySelector("#msgTempl");
    var msg=templ.content.cloneNode(true);
    var ansindex= answers.map(e=>e.msg).indexOf(hist[msgid-1].txt);
    if(ansindex>-1){
        msg.querySelector("#msgcont").innerHTML=answers[ansindex].ans;
        document.getElementById("chatarea").appendChild(msg);
        var txt=answers[ansindex].ans;
    }
    else{
        msg.querySelector("#msgcont").innerHTML="Извните, я не понял вопроса";
        document.getElementById("chatarea").appendChild(msg);
        var txt="Извните, я не понял вопроса";
    }
    var tuple= {msgid,txt};
    msgid++;
    hist.push(tuple);
}
function ShowHide(){
    var container = document.getElementById("chatcont");
    if(container.checkVisibility())
        container.classList.add("hidden");
    else
        container.classList.remove("hidden");
}