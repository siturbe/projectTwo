let currentUser;//global variable of current user
//Code to register new user
$("#registerBtn").on("click", function (event){
    event.preventDefault();

    $.get("/api/users", function(data) {

        let nameForTest = $("#username").val();

        if(data.length !==0){
            nameAlreadyUsed = false;
            for(let i=0; i<data.length; i++){
                if(nameForTest==data[i].name){
                    nameAlreadyUsed = true;
                    confirm("That username is already taken");
                    document.location.reload();
                }
            }

            console.log("Name is good to use"); 
            let username = {
                name: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            }
    
            console.log(username);
            currentUser = $("#username").val();
            $.post("/api/newUser", username)
                .then(function(data){
                    console.log(data);
                })
            
                
            
        } else {
            console.log("Name is good to use"); 
            let username = {
                name: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            }
    
            console.log(username);
            
            $.post("/api/newUser", username)
                .then(function(data){
                    console.log(data);
                })
                
        }
    })  

})

   
//Code to login existing user
$("#loginBtn").on("click", function (event){
    event.preventDefault();

    currentUser = $("#username").val();
    let passwordForTest = $("#password").val();
    
    $.get("/api/users/", function(data) {
        console.log(data);
        console.log(currentUser);
        for(let i=0; i<data.length; i++){
            if(data[i].name==currentUser){
                if(data[i].password == passwordForTest){
                    console.log("Successful Login");
                } else {
                    confirm("That combination of username and password is incorrect");
                    document.location.reload();
                }
            } 
        }
   
        
    })  

})





