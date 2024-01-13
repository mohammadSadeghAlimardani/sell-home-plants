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

/* ==== CUSTOMER-REVIEW ==== */
/* ========================= */

const customers = [
    {
        src : "./images/customer-image-1.jpg",
        comment : `
            "Its been 2 years iam using Greener to decorate my
            house with plants and iam fully satisfied.” 
        `,
        satisfy : 3,
        username : `khaled jubair abbasi`
    },
    {
        src : "./images/customer-image-2.jpg",
        comment : `
            "very good but delivery is not fast” 
        `,
        satisfy : 4,
        username : `kim min jae`
    },
    {
        src : "./images/customer-image-3.jpg",
        comment : `
            "not bad” 
        `,
        satisfy : 2,
        username : `john parker`
    },
    {
        src : "./images/customer-image-4.jpg",
        comment : `
            "I am very satsified they are the best” 
        `,
        satisfy : 5,
        username : `peter jordan`
    },

];

const carouselContent = customers.map(customer => {

    return `<div class="carousel-cell">      
                <img src="${customer.src}" alt="customer-profile"/> 
                <p class="customer-comment">                   
                    ${customer.comment}              
                </p>
                <ul class="customer-rating" data-satisfy="${customer.satisfy}">    
                    <li>
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-star"></i>
                    </li>   
                </ul>
                <h3 class="customer-username">${customer.username}</h3>
            </div>
    `;
}).join("");

const carousel = document.querySelector(".customer-review .carousel");

carousel.innerHTML = carouselContent;

// rating

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