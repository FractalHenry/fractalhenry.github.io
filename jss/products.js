DisplayProducts();

document.getElementById("overlay").setAttribute("onclick","hide()");


function DisplayProducts(){
    var templ = document.querySelector("#cardtempl"); 
    products.forEach(element => {
        var crd= templ.content.cloneNode(true);
        console.log(typeof(crd));
        crd.getElementById("crdimg").setAttribute("src",element.image);
        crd.getElementById("crdhdr").innerHTML = element.name;
        crd.getElementById("crddescr").innerHTML = element.description;
        crd.getElementById("crdbtn").setAttribute("onclick","ShowModal(id)");
        crd.getElementById("crdbtn").setAttribute("id",element.id);
        document.getElementById(element.category).
        appendChild(crd);
    });
    console.log("Скрипт отработал!");
}
function ShowModal(id){
    console.log(id);
    var elem = document.querySelector("#mdlcnt");
    document.getElementById("modalimg").setAttribute("src",products[id].image);
    document.getElementById("modalhdr").innerHTML= products[id].name;
    document.getElementById("modaldescr").innerHTML = products[id].description;
    document.getElementById("modalprice").innerHTML = products[id].price;
    document.getElementById("counter").innerHTML= localStorage.getItem(id) ? localStorage.getItem(id): 0;
    document.getElementById("modaltotal").innerHTML= products[id].price*localStorage.getItem(id);
    document.getElementById("basketadd").setAttribute("name",id);
    ChangeValue(0)
    elem.classList.remove("hidden");
}
function hide(){
    document.getElementById('mdlcnt').classList.add("hidden");
}
function ChangeValue(step){
    var cnt = Number(document.getElementById("counter").innerText);
    var prc = Number(document.getElementById("modalprice").innerHTML);
    if(cnt+step>=0 && cnt+step<=15){
        if(cnt+step== 0){
            document.getElementById("mdlleftbtn").classList.add("btn-disabled");
        }
        else{
            document.getElementById("mdlleftbtn").classList.remove("btn-disabled");
        }
        if(cnt+step == 15){
            document.getElementById("mdlrightbtn").classList.add("btn-disabled");
        }
        else{
            document.getElementById("mdlrightbtn").classList.remove("btn-disabled");
        }
        cnt = cnt+step;
        document.getElementById("counter").innerHTML=cnt;
        document.getElementById("modaltotal").innerHTML=prc*cnt;
   }
}
function toBasket(){
   var cnt = Number(document.getElementById("counter").innerText);
   var id = Number(document.getElementById("basketadd").getAttribute("name"));
   if(cnt>0)
      localStorage.setItem(id,cnt);
   hide();  
}
