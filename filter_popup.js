// For searching through filters
let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let inputfield = document.getElementById("inputfield");
let filters = document.getElementsByClassName("filters"); 

// When dropdown menu is clicked, show the options
select.onclick = function(){
    list.classList.toggle("open");
}

// When an option of filter is clicked, change the text in search bar
for (let option of filters) { 
    option.onclick = function() {
        selectText.innerHTML = this.innerHTML; 
        inputfield.placeholder = "Search In " + selectText.innerHTML; 
        list.classList.remove("open"); 
    }
}

// For Add review pop-up
const addButton = document.querySelector(".floating-add-button"), 
    addReview = document.querySelector(".popup-container"), 
    submit = document.querySelector(".popup .close-btn");

// Show the pop-up when the "+" button is clicked
addButton.addEventListener("click", () => {
    addReview.style.display = "flex";
});

// Close the pop-up when the close button is clicked
submit.addEventListener("click", () => {
    addReview.style.display = "none";
});

// Select the 'Add Review' option from the navbar
const addReviewNav = document.querySelector("#add-review-nav");

// When the 'Add Review' in the navbar is clicked, show the pop-up
addReviewNav.addEventListener("click", () => {
    addReview.style.display = "flex";
});