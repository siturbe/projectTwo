
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

    }

    
})




$('#logoutBtn').on('click', function(event){
    event.preventDefault();

    localStorage.removeItem('PLPickUser');
    window.location.assign(href='/');

})