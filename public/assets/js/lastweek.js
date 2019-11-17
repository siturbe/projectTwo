//Populate table with the results of last week
let currentUser = localStorage.getItem('PLPickUser');
let matchDayBase;

$.get('/api/getScores', function(data){
    matchdayBase = data[0].matchday;

    for(let i=0; i<data.length; i++){
        let matchday = data[i].matchday;
        let homeTeam = data[i].team1;
        let homeTeamScore = data[i].team1score;
        let awayTeam = data[i].team2;
        let awayTeamScore = data[i].team2score;

        let tableRow = $('<tr/>')
            .appendTo($('#optionsTableBody'))
        let TDmatchday = $('<td>' + matchday +'</td>')
            .appendTo(tableRow)
        let TDhomeTeam = $('<td>' + homeTeam + '</td>')
            .appendTo(tableRow)
        let TDhomeTeamScore = $('<td>' + homeTeamScore + '</td>')
            .appendTo(tableRow)
        let TDawayTeam = $('<td>'+ awayTeam + '</td>')
            .appendTo(tableRow)
        let TDawayTeamScore = $('<td>'+ awayTeamScore + '</td>')
            .appendTo(tableRow)
    }
})


$.get('/api/points/' + currentUser, function(data){
    let seasonPoints = 0;
    for(let i =0; i<data.length; i++){
        let tableRow = $('<tr/>')
            .appendTo($('#pointsTableBody'))
        let TDmatchday = $('<td>' + data[i].matchDay +'</td>')
            .appendTo(tableRow)
        let TDmatchdayPoints = $('<td>' + data[i].totalPoints +'</td>')
        .appendTo(tableRow)

        seasonPoints += data[i].totalPoints;
    }

    let tableRowTotal = $('<tr/>')
        .appendTo($('#pointsTableBody'))
    let TDtotal = $('<td> TOTOAL </td>')
        .appendTo(tableRowTotal)
    let TDtotPoints = $('<td>' + seasonPoints +'</td>')
        .appendTo(tableRowTotal)
    
        
})