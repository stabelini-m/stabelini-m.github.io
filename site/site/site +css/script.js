function sidebar_close_open(){
    const sidebar=document.querySelector(".sidebar");
    const menu=document.querySelector(".mobileMenu");
    if(sidebar.style.display=="flex") 
        sidebar.style.display="none";
    else 
        sidebar.style.display="flex";
    if(menu.classList.contains("left")){
        menu.classList.add("right");
        menu.classList.remove("left");
    }
    else{
        menu.classList.add("left");
        menu.classList.remove("right");
    }
}   