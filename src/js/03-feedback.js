import throttle from 'lodash.throttle';

const loginForm = document.querySelector(".js-feedback-form");
loginForm.addEventListener("submit", onSubmit);

const textArea = document.querySelector(".js-feedback-form textarea");
textArea.addEventListener("input", throttle(onTextAreaInput, 500));

const STORAGE_KEY = "feedback-form-state";
reloadForm();

function onSubmit(event) {
    event.preventDefault();

        const {elements: {email, message}} = event.target;
   
    if (email.value === "" || message.value === "") {
      
        return alert(`Please fill out all the fields`);
    }
        const loginObj = {
        email: email.value,
        message: message.value,
    }
    console.log(loginObj);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextAreaInput(event) { 

    const massage = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, massage)

};

function reloadForm() { 
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) { 
        textArea.value = savedMessage;
    }

};


// mango@mail.com