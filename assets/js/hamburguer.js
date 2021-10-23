(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#hamburguer");
    let menu=doc.querySelector(".nav")

    function toggle(event) {
        if(menu.classList.contains("activeNav")){
            menu.classList.remove("activeNav")
            console.log("oi")
        }else{
            menu.classList.add("activeNav")
            console.log("Tchau")
        }

    }



    btn.addEventListener("click",toggle, false);









})(window, document);