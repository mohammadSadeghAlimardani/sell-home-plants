/* ==== CUSTOMER-REVIEW ==== */
/* ========================= */

const customerRating = [...document.querySelectorAll(".customer-rating")];

customerRating.map(item => {

    const stars = item.dataset.satisfy;
    let step = 0;
    for (const element of [...item.querySelectorAll("li i")]) {
        element.style.color = "rgb(247, 226, 15)";
        step++;
        if(step == stars){
            break;
        } 
    }
})

/* ==== SHOW-SIDEBAR ==== */
/* ====================== */

const showSidebar = document.querySelector(".show-sidebar");
const closeSidebar = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

showSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.add("show");
})
closeSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.remove("show");
})