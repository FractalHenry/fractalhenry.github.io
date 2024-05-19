let onpage = 2;
let currpg;
let pgbtns = news.length%onpage==0 ? news.length/onpage : Math.floor(news.length/onpage)+1;;

loadNews();
loadPagination();

function loadPagination(){
    var templ = document.querySelector("#newsBtn"); 
    for(i=2;i<=pgbtns;i++){
        var btn = templ.content.cloneNode(true);
        btn.getElementById("pg").innerHTML = i;
        btn.getElementById("pg").setAttribute("id","pg"+i);
        document.getElementById("pgbtns").
        appendChild(btn);
    }
}
function loadNews(){
    currpg=1;
    var templ = document.querySelector("#newsTempl");
    for(i=0;i<onpage;i++) {
        var newss=templ.content.cloneNode(true);
        newss.getElementById("newsimg").setAttribute("src",news[i].img);
        newss.getElementById("newshdr").innerHTML = news[i].name;
        newss.getElementById("newsdescr").innerHTML = news[i].descr;
        newss.getElementById("newsdate").innerHTML = news[i].date;
        newss.getElementById("newscont").setAttribute("value",news[i].id);
        newss.getElementById("articleOpenBtn").setAttribute("value",news[i].id);
        document.getElementById("newsblock").
        appendChild(newss);
    }
    document.getElementById("leftbt").setAttribute("value",currpg==1? currpg:currpg-1);
    document.getElementById("leftbt").setAttribute("src",currpg==1? "images/left arrow disabled.png":"images/left arrow.png");
    document.getElementById("rightbt").setAttribute("value",currpg<pgbtns? currpg+1:pgbtns);
    document.getElementById("rightbt").setAttribute("src",currpg==pgbtns? "images/right arrow disabled.png":"images/right arrow.png");

}
function updateNews(pg){
    i=0;

    if(pg=="leftbt")
        pg="pg"+document.getElementById("leftbt").getAttribute("value");
    else if (pg=="rightbt")
        pg="pg"+document.getElementById("rightbt").getAttribute("value");

    var newsblocks= document.getElementsByName("newscont");
    var pageto=Number(pg[pg.length-1]);
    var startfrom =onpage*pageto-onpage;
    for(;i<onpage;i++) {
        if(startfrom<news.length){
            newsblocks[i].classList.remove("hidden");
            newsblocks[i].querySelector("#newsimg").setAttribute("src",news[startfrom].img);
            newsblocks[i].querySelector("#newshdr").innerHTML = news[startfrom].name;
            newsblocks[i].querySelector("#newsdescr").innerHTML = news[startfrom].descr;
            newsblocks[i].querySelector("#newsdate").innerHTML = news[startfrom].date;
            newsblocks[i].querySelector("#articleOpenBtn").setAttribute("value",news[startfrom].id);
            newsblocks[i].setAttribute("value",news[startfrom].id);
        }
        startfrom++;
        if(startfrom>news.length) 
        newsblocks[i].classList.add("hidden");
    }
    currpg=pageto;
    document.getElementById("leftbt").setAttribute("value",currpg==1? currpg:currpg-1);
    document.getElementById("leftbt").setAttribute("src",currpg==1? "images/left arrow disabled.png":"images/left arrow.png");
    document.getElementById("rightbt").setAttribute("value",currpg<pgbtns? currpg+1:pgbtns);
    document.getElementById("rightbt").setAttribute("src",currpg==pgbtns? "images/right arrow disabled.png":"images/right arrow.png");

    var pages= document.getElementsByName("pgs");
    for(j=0;j<pages.length;j++){
        if(pages[j].id==pg)
            pages[j].classList.replace("btn-pagination","btn-pagination-active")
        else
            pages[j].classList.replace("btn-pagination-active","btn-pagination")
    }
}
function SaveArticle(sender){
    localStorage.setItem("articleId",sender.getAttribute("value"));
}
