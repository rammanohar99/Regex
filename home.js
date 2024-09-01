document.querySelector('form').addEventListener('submit',function(event){
    const nameRegex = /^[A-Za-z]{1,20}$/;
    const phoneRegex = /^[7-9][0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,100}$/;
    const passwordRegex = /^[A-Za-z0-9@#$%*]{12,20}$/

    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phone').value;
    const password = document.getElementById('pwd').value;
    if(!nameRegex.test(firstname)){
        alert("First name must be of max 20 letters");
        event.preventDefault();
    }

    if(!nameRegex.test(lastname)){
        alert("Last name must be of max 20 letters");
        event.preventDefault();
    }

    if(!phoneRegex.test(phonenumber)){
        alert("enter a valid phone number");
        event.preventDefault();
    }

    if(!emailRegex.test(email)){
        alert("enter a valid email address");
        event.preventDefault();
    }

    if(!passwordRegex.test(password)){
        alert("enter a strong password using only special charecters such as - @ # $ %*");
        event.preventDefault();
    }

    event.preventDefault();
});

