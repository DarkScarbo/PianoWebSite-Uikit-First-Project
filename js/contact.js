
import postContactDetails from "./api.js"

const form = document.querySelector("#form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const email = e.target.email.value;

    const contact = {
        name,
        email
    };
    postContactDetails(contact);

    form.reset()

});
