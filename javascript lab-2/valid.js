 
        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        
        form.addEventListener("submit", e=>{
        
          e.preventDefault();
          checkinput();
        })
        
        function checkinput(){
        
          const usernameValue = username.value.trim();
          const emailValue = email.value.trim();
          const phoneValue = phone.value.trim();
          const passwordValue = password.value.trim();
        
        if(usernameValue === ""){
        
          setError(username , "Please enter your username")
        }
        
        else if (!isUsername(usernameValue)){
            setError(username , "Use only alphanumeric characters")
        }
        
        else{
          setSuccess(username)
        }
        
        if (emailValue === ""){
        
            setError(email, "Enter your email")
        }
        
        else if (!isEmail(emailValue)){
        
            setError(email, "Email is not valid")
        
        }
        
        else {
        
            setSuccess(email)
        }  
        
        if(phoneValue === ""){
        
            setError(phone , "Enter your phone number")
        }
        else if (isNaN(phoneValue) ){
            
            setError(phone , "Dont use letter")  
        
        }
        
        else if (phoneValue.length < 10 ){
            
            setError(phone , "Phone number is too short")  
        
        }
        else if(phoneValue.length > 10 ){
        
            setError(phone , "Phone number not valid")  
        
        }
        else {
        
            setSuccess(phone)
        }
        
        if(passwordValue == ""){
        
            setError(password, "Please enter your password")
        }
        
        else if (passwordValue.length < 6){
        
            setError(password, "Password is too short")
        }
        
        else {
            
            setSuccess(password)
        }
        
        }
        
        function setError(input , message ){
        
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message
        
        }
        
        function setSuccess(input, message){
        
            const formControl = input.parentElement;
            const small = formControl.querySelector("small");
            formControl.className = "form-control success"
        }
        
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
        
        function isUsername(username){
            return /^[a-zA-Z\-]+$/.test(username)
        }
