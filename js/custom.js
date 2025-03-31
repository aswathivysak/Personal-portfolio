document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let subject=document.getElementById("subject").value.trim();
    let message=document.getElementById("message").value.trim();

   
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");

    nameError.textContent="";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    let isvalid=true;

    if(name==="")
    {
        nameError.textContent="Name is reuired.";
        isvalid=false;
    }
    let emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email==="")
    {
        emailError.textContent="Email is required";
        isvalid=false;
    }else if(!emailPattern.test(email))
    {
        emailError.textContent="Enter a valid email address";
        isvalid=false;
    }
    if(subject===""){
        subjectError.textContent="subject is required";
        isvalid=false
    }

    if(message==="")
    {
        messageError.textContent="Message cannot be empty";
        isvalid=false;
    }else if(message.length<10)
    {
        messageError.textContent="Message must be atleast 10 characters."
        isvalid=false;
    }
    if(isvalid)
    {
        alert("form submitted successfully!");
        this.submit();
    }


});
document.getElementById("name").addEventListener("input",function(){
    document.getElementById("nameError").textContent="";
});
document.getElementById("email").addEventListener("input",function(){
    document.getElementById("emailError").textContent="";
});
document.getElementById("subject").addEventListener("input",function(){
    document.getElementById("subjectError").textContent="";
});
document.getElementById("message").addEventListener("input",function(){
    document.getElementById("messageError").textContent="";
});

