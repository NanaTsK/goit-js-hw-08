import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const contactForm = document.querySelector(".js-feedback-form");
const { email, message } = contactForm.elements;

contactForm.addEventListener("input", throttle(onTextAreaInput, 500));
const localData = localStorage.getItem(STORAGE_KEY);

reloadForm();

contactForm.addEventListener("submit", onSubmit);

function createFormData() {
    return {
        email: email.value,
        message: message.value,
    };
}

function onTextAreaInput() { 
    const data = createFormData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

function onSubmit(event) {
    event.preventDefault();
   
    if (email.value === "" || message.value === "") {
      
        alert(`Please fill out all the fields`);
    } else { 
        const data = createFormData();
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