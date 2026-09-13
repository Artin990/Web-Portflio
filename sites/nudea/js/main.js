/*=========================
        LOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    },1200);

});


/*=========================
      SIDEBAR MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close-menu");

menuBtn.addEventListener("click",()=>{

    sidebar.classList.add("active");

});

closeBtn.addEventListener("click",()=>{

    sidebar.classList.remove("active");

});


/*=========================
      BACK TO TOP
=========================*/

const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backBtn.style.display="flex";

    }else{

        backBtn.style.display="none";

    }

});

backBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*=========================
      STICKY HEADER
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.padding="0";

        header.style.background="rgba(255,255,255,.95)";

    }else{

        header.style.background="rgba(255,255,255,.75)";

    }

});


/*=========================
      NEWSLETTER
=========================*/

const newsletter = document.querySelector(".newsletter form");

newsletter.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("با موفقیت عضو خبرنامه شدید 💖");

});


/*=========================
      REVIEW FORM
=========================*/

const review = document.querySelector(".review-form");

review.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("نظر شما ثبت شد 🌸");

});
