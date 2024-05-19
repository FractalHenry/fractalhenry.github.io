readLocalStorage();

document.getElementById("MakeOrder").classList.add("btn-disabled");

function readLocalStorage(){
    localStorage.removeItem("articleId");
    var keys= Object.keys(localStorage);
    var values= [];
    for(i=0;i<keys.length;i++ ) {
        values.push(localStorage.getItem(keys[i]) );
    }
    fillBasket(keys,values);
}

function fillBasket(keys,values){
    var templ = document.querySelector("#itemTeml"); 
    if(keys.length==0)
        document.getElementById("basketempty").classList.remove("hidden");
    else
        document.getElementById("basketempty").classList.add("hidden");
    for(i=0;i<keys.length;i++){
        var item= templ.content.cloneNode(true);
        item.getElementById("basketitem").setAttribute("id",keys[i]);
        item.getElementById("name").innerHTML = products[keys[i]].name;
        item.getElementById("cnt").innerHTML = values[i];
        item.getElementById("cnt").setAttribute("id","cnt"+keys[i]);
        item.getElementById("totalprice").innerHTML = products[keys[i]].price*values[i];
        item.getElementById("totalprice").setAttribute("id","totalprice"+keys[i]);
        item.getElementById("down").setAttribute("id",keys[i]);
        item.getElementById("up").setAttribute("id",keys[i]);
        item.getElementById("del").setAttribute("id",keys[i]);
        document.getElementById("basket").
        appendChild(item);
    }
    UpdateTotal();
}

function ChangeValue(step,id){
    console.log(id);
    var cnt = Number(document.getElementById("cnt"+id).innerText);
    var prc = products[Number(id)].price;
    if(cnt+step>=1 && cnt+step<=15){
        cnt = cnt+step;
        document.getElementById("cnt"+id).innerHTML=cnt;
        document.getElementById("totalprice"+id).innerHTML=prc*cnt;
        if(step<0 && cnt==1)
            document.getElementById("cnt"+id).parentNode.getElementsByTagName("img").item(0).setAttribute("src","images/left arrow disabled.png");
        else if(step>0 && cnt==15)
            document.getElementById("cnt"+id).parentNode.getElementsByTagName("img").item(1).setAttribute("src","images/right arrow disabled.png");
        else{
            document.getElementById("cnt"+id).parentNode.getElementsByTagName("img").item(0).setAttribute("src","images/left arrow.png");
            document.getElementById("cnt"+id).parentNode.getElementsByTagName("img").item(1).setAttribute("src","images/right arrow.png");
            
        }
       localStorage.setItem(Number(id),cnt);
       UpdateTotal();
    }
 }
 
 function del(id){
    localStorage.removeItem(id);
    document.getElementById(id).remove();
    UpdateTotal();
    var keys= Object.keys(localStorage);
    if(keys.length==0)
        document.getElementById("basketempty").classList.remove("hidden");
    else
        document.getElementById("basketempty").classList.add("hidden");
    
 }

 function UpdateTotal(){
    var keys= Object.keys(localStorage);
    var values= [];
    i= keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    var sum=0;
    for(i=0;i<values.length;i++){
        sum+=products[keys[i]].price*Number(values[i]);
    }
    if(values.length==0){
        sum=0;
    }
    document.getElementById("summary").innerHTML=sum;
 }
function Payment(id){
    if(id=="card")
        document.getElementById("cashpayment").classList.add("hidden")
    if(id=="cash")
        document.getElementById("cashpayment").classList.remove("hidden")
    
}
function clearRadio(){
    var radios = document.getElementsByName("change");
    radios.forEach(element =>{
        element.checked=false;
    });
    return true;
}
function clearInput(){
    document.getElementById("changeinput").value=null;
}
function checkInputs(){
    var address= document.getElementById("addr").value.length>=5;
    var mobnum = document.getElementById("mobnum").value.length>=6;
    var name = document.getElementById("custname").value.length>=2;
    var agreed = document.getElementById("agreed").checked
    var keys= Object.keys(localStorage).length;
    if(address && mobnum && name && agreed && keys>0){
        document.getElementById("MakeOrder").classList.remove("btn-disabled");
        return true;
    }
    else{
        document.getElementById("MakeOrder").classList.add("btn-disabled");
        return false;
    }   
}
function showModal(){
    if(checkInputs()){
        var time= document.getElementById("delivertime").innerHTML;
        var sum = document.getElementById("summary").innerHTML;
        var pay = document.getElementById("cash").checked? "наличными":"картой";
        document.getElementById("mdlcnt").classList.remove("hidden");
        document.getElementById("modalhdr").innerHTML = "Ваш заказ принят!";
        document.getElementById("modaldescr").innerHTML =
        "Будет доставлен к "+time+". К оплате "+sum+" ₽."+
        "Оплата "+pay;
        localStorage.clear();
    }
}
function closeModal(){
    document.getElementById("mdlcnt").classList.add("hidden");
    location.reload();
}

