
$.get("/api/pickResults", function(data){
    let allUserPoints = []
    for (let i=0; i<data.length; i++){
        let player = {
            user: data[i].user,
            points: data[i].totalPoints,
        }
        allUserPoints.push(player);
    }

    var result = allUserPoints.reduce(function(acc, val){
        var o = acc.filter(function(obj){
            return obj.user==val.user;
        }).pop() || {user:val.user, points:0};
    
        o.points += val.points;
        acc.push(o);
        return acc;
    },[]);


    let finalresult = result.filter(function(itm, i, a){
        return i == a.indexOf(itm);
    })

    let sortedStandings = finalresult.sort((a, b) => (a.points < b.points) ? 1: -1);

    //Now that have sorted and aggregated array (from code above) create table in html
    for (let i=0; i<sortedStandings.length; i++){
        let user = sortedStandings[i].user;
        let points = sortedStandings[i].points;

        let tableRow = $('<tr/>')
            .appendTo($('#standingsTableBody'))

        let TDuser = $('<td>' + user + '</td>')
            .appendTo(tableRow)

        let TDpoints = $('<td>' + points + '</td>')
            .appendTo(tableRow)

<<<<<<< HEAD
        // $('#ranking-' + i).append("<h4>" + data[i].name + " \xa0\xa0\xa0\xa0  " + data[i].points +"</h4>");
        
        let tableRow = $('<tr/>')
        .appendTo($('#pointsTableBody'))

        let PlayerName = $('<td>' + data[i].name +'</td>')
        .appendTo(tableRow)

        // let tableSpace = $('<td>' + data[i].id + '</td>')
        //         .appendTo(tableRow)

        let PlayerPoints = $('<td>' + data[i].points + '<td>')
        .appendTo(tableRow)
    }
=======
    }

>>>>>>> 4ea0584c94d5ac8c5bb4b4e19698ab34776edbb8
    
})




$('#logoutBtn').on('click', function(event){
    event.preventDefault();

    localStorage.removeItem('PLPickUser');
    window.location.assign(href='/');

})