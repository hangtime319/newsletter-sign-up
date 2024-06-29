const cardForm = document.querySelector(".card-desktop");
const cardSuccess = document.querySelector(".card-success");
const form = document.querySelector("form");
const btn = document.querySelectorAll(".btn");
const email = document.getElementById("email");
const error = document.querySelector(".error");


email.addEventListener("input", (e) => {
    if(email.validity.valid) {
        error.innerHTML = "";
        error.className = "error";
    }
}, false,
);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email != '' && email.validity.valid) {
        // error.className = "error";
        cardForm.classList.toggle('display-none');
        cardSuccess.classList.toggle('display-none');
    } else {
        error.innerHTML = 'Valid email required'
        error.className = "error";       
    }
    }, false,
);

btn[1].addEventListener("click", function(e) {
    cardForm.classList.toggle('display-none');
    cardSuccess.classList.toggle("display-none");
});


