
function OpenCloseMenu(id){
    var menulist = document.getElementsByClassName("menu");
    for(i=0;i<menulist.length;i++){
        if(id=="MenuClosed")
            menulist[i].classList.replace("mhide","mshow");
        else
            menulist[i].classList.replace("mshow","mhide");
    }
    if(id=="MenuClosed")
        document.getElementById("MenuClosed").id="MenuOpened";
    else
        document.getElementById("MenuOpened").id="MenuClosed";

}