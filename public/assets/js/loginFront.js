localStorage.removeItem('PLPickUser');

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
            if(nameAlreadyUsed == false){
                console.log("Name is good to use"); 
                let username = {
                    name: $("#username").val(),
                    email: $("#email").val(),
                    password: $("#password").val(),
                }
        
                console.log(username);
                let currentUser = $("#username").val();
                localStorage.setItem('PLPickUser', currentUser);
                $.post("/api/newUser", username)
                    .then(function(data){
                        console.log(data);

                        let userForResults ={
                            user: $("#username").val(),
                            matchDay: 0,
                            pick1: null,
                            pick1points: 0,
                            pick2: null,
                            pick2points: 0,
                            pick3: null,
                            pick3points: 0,
                            totalPoints: 0,
                        }
            
                        $.post('/api/compileResults', userForResults)
                            .then(function(data){
                                console.log('New User Added to work with Results')
                            })

                        window.location.assign(href='/standings');
                    })
                }
                
            
        } else {
            console.log("Name is good to use"); 
            let username = {
                name: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            }
    
            console.log(username);
            let currentUser = $("#username").val();
            localStorage.setItem('PLPickUser', currentUser);
            $.post("/api/newUser", username)
                .then(function(data){
                    console.log(data);

                    let userForResults ={
                        user: $("#username").val(),
                        matchDay: 0,
                        pick1: null,
                        pick1points: 0,
                        pick2: null,
                        pick2points: 0,
                        pick3: null,
                        pick3points: 0,
                        totalPoints: 0,
                    }
        
                    $.post('/api/compileResults', userForResults)
                        .then(function(data){
                            console.log('New User Added to work with Results')
                        })

                    window.location.assign(href='/standings');
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
                    localStorage.setItem('PLPickUser', currentUser);
                    window.location.assign(href='/standings');
                } else {
                    confirm("That combination of username and password is incorrect");
                    document.location.reload();
                }
            } 
        }
   
        
    })  

})

 // let userForResults ={
            //     user: $("#username").val(),
            //     matchDay: 0,
            //     pick1: null,
            //     pick1points: null,
            //     pick2: null,
            //     pick2points: null,
            //     pick3: null,
            //     pick3points: null,
            //     totalPoints: 0,
            // }

            // $.post('/api/compileResults', userForResults)
            //     .then(function(data){
            //         console.log('New User Added to work with Results')
            //     })