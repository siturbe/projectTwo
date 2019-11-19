//Checks if already picked
let currentUser = localStorage.getItem('PLPickUser');
let alreadyPicked = false;
$.get("/api/getPicks/" + currentUser, function(data){
        if(data.length > 0){
            alreadyPicked = true
        }
    

    console.log(alreadyPicked);
})
