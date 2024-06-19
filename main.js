const cardForm = document.querySelector(".card-desktop");
const cardSuccess = document.querySelector(".card-success");
const form = document.querySelector("form");
const btn = document.querySelectorAll(".btn");
const email = document.querySelector("#email");

function formSuccess(e) {
    e.preventDefault();
    cardForm.classList.toggle('display-none');
    cardSuccess.classList.toggle('display-none');
}

btn[0].addEventListener("click", formSuccess);
btn[1].addEventListener("click", formSuccess);