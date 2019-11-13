

$.get("/api/standings", function(data){
    for (let i=0; i<data.length; i++){
        let tableSection = $("<div>");
        tableSection.addClass("standingsRow");
        tableSection.attr("id", "ranking-" + i);
        $("#standingsTable").append(tableSection);

        $('#ranking-' + i).append("<h4>" + data[i].name + " \xa0\xa0\xa0\xa0  " + data[i].points +"</h4>");
    }
})


$('#logoutBtn').on('click', function(event){
    event.preventDefault();

    localStorage.removeItem('PLPickUser');
    window.location.assign(href='/');

})