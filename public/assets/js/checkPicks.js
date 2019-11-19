//Checks if already picked
let currentUser = localStorage.getItem('PLPickUser');
let alreadyPicked = false;
$.get("/api/getPicks",function(data){
    for (let i=0; i<data.length; i++){
        if(data[i].user = currentUser){
            alreadyPicked = true
        }
    }

    console.log(alreadyPicked);
})
