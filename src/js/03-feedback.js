import throttle from 'lodash.throttle';


const loginForm = document.querySelector(".js-feedback-form");
loginForm.addEventListener("submit", handleSubmit);

const textArea = document.querySelector(".js-feedback-form textarea");
textArea.addEventListener("input", onTextAreaInput)




function handleSubmit(event) {
    event.preventDefault();

        const {elements: {email, message}} = event.currentTarget;

        const loginObj = {
        email: email.value,
        message: message.value,
    }
    console.log(loginObj);
    event.currentTarget.reset();
};

function onTextAreaInput(event) { 

    const massage = event.currentTarget.value;
    
    localStorage.setItem("feedback-form-state", massage)

    console.log(massage);
};

