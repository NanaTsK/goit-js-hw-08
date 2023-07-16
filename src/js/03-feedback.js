import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const loginForm = document.querySelector(".js-feedback-form");
const { email, message } = loginForm.elements;

loginForm.addEventListener("input", throttle(onTextAreaInput, 500));
const localData = localStorage.getItem(STORAGE_KEY);

reloadForm();

loginForm.addEventListener("submit", onSubmit);

function onTextAreaInput() { 
    const data = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

function onSubmit(event) {
    event.preventDefault();
   
    if (email.value === "" || message.value === "") {
      
        alert(`Please fill out all the fields`);
    } else { 
        const data = {
        email: email.value,
        message: message.value,
    }
    console.log(data);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    }    
};

function reloadForm() { 
    if (localData) {
        const parcedData = JSON.parse(localData);
        email.value = parcedData.email;
        message.value = parcedData.message;
    } else {
        email.value = '';
        message.value = '';
    }

};
