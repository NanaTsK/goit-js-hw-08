import throttle from 'lodash.throttle';

const loginForm = document.querySelector(".js-feedback-form");
loginForm.addEventListener("submit", onSubmit);

const textArea = document.querySelector(".js-feedback-form textarea");
textArea.addEventListener("input", onTextAreaInput)

reloadForm();



function onSubmit(event) {
    event.preventDefault();

        const {elements: {email, message}} = event.currentTarget;
   
    if (email.value === "" || message.value === "") {
      
        return alert(`Please fill out all the fields`);
    }
        const loginObj = {
        email: email.value,
        message: message.value,
    }
    console.log(loginObj);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};



function onTextAreaInput(event) { 

    const massage = event.currentTarget.value;
    
    localStorage.setItem("feedback-form-state", massage)

    // console.log(massage);
};


function reloadForm() { 
    const savedMessage = localStorage.getItem("feedback-form-state");

    if (savedMessage) { 
        textArea.value = savedMessage;
    }

};


// player.on("timeupdate", throttle(onTime, 500));


// mango@mail.com