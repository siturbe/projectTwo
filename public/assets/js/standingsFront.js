

$.get("/api/standings", function(data){
    for (let i=0; i<data.length; i++){
        let tableSection = $("<div>");
        tableSection.addClass("standingsRow");
        tableSection.attr("id", "ranking-" + i);
        $("#standingsTable").append(tableSection);

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
    
})


$('#logoutBtn').on('click', function(event){
    event.preventDefault();

    localStorage.removeItem('PLPickUser');
    window.location.assign(href='/');

})