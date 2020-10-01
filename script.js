let emailCollectorForm = document.getElementById('email-form');

emailCollectorForm.addEventListener('submit', event => {
    //function
    let formData = new FormData(event.target);
    let name = formData.get("firstName");
    let email = formData.get("email");

    event.preventDefault();
});