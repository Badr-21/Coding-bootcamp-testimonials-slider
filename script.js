const checked = document.querySelector('[type="checkbox"]');
const range = document.querySelector('[type="range"]');
const typeOfSubsciption = document.querySelector(".type-of-subscription");
const price = document.querySelector(".price");
const views = document.querySelector(".views");
const progress = document.querySelector(".progress")

checked.addEventListener("click", () => {
    if(checked.classList.contains("checked")) {
        checked.classList.remove("checked");
        typeOfSubsciption.innerText = "/month"
    }else {
        checked.classList.add("checked");
        typeOfSubsciption.innerText = "/year";
    }
    
})

range.addEventListener("mousemove", () => {
    progress.style.width = `${range.value }%`;
    if(checked.classList.contains("checked")) {
        let yearlyPrice = ((range.value * 32 / 100 * 12) - (range.value * 32 / 100 * 12 * (25 / 100))).toFixed(2);  
        let pageViews = range.value * 200 / 100 * 12
        price.innerText =`$${yearlyPrice}`;
        views.innerText = `${pageViews}K`;
    }else {
        let monthlyPrice = range.value * 32 / 100;  
        let pageViews = range.value * 200 / 100
        price.innerText =`$${monthlyPrice}`;
        views.innerText = `${pageViews}K`;
    }
})


