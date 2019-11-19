//code to populate table
//Change starts now - if deletes, then back to prior state
//Second series of changes

console.log(currentUser);

$('#startPickBtn').on("click", function(event){
    event.preventDefault();

    let picks = [];

    $.get("/api/pickGames", function(data){
        console.log(data);
        let matchdayGlobal;
        runLoop(data);

        async function runLoop(data){
            let matchday = await data[0].matchday;
            matchdayGlobal = matchday;
            console.log(deadline);
            if(matchday == deadline){
                confirm('Deadline for picks has already passed for this week.');
                window.location.assign(href='/standings');

            } else if (alreadyPicked == false){
                populatePickGames(data);
            } else {
                confirm('Your picks have already been submitted for this week.');
                window.location.assign(href='/standings');
            }
        }

        
            

            function populatePickGames(data){
                //code to populate table of choices
                for(let i=0; i<data.length; i++){
                    let matchday = data[i].matchday;
                    let homeTeam = data[i].team1;
                    let awayTeam = data[i].team2;

                    let checkboxHome = document.createElement("INPUT");
                        checkboxHome.setAttribute('type','checkbox');
                        checkboxHome.setAttribute('value', homeTeam);
                        checkboxHome.setAttribute('id', 'homeTeam-' + i);
                        checkboxHome.setAttribute('class','cbox');

                    let checkboxAway = document.createElement("INPUT");
                        checkboxAway.setAttribute('type','checkbox');
                        checkboxAway.setAttribute('value', awayTeam);
                        checkboxAway.setAttribute('id', 'homeTeam-' + i);
                        checkboxAway.setAttribute('class','cbox');

                    let tableRow = $('<tr/>')
                        .appendTo($('#optionsTableBody'))

                    let TDmatchday = $('<td>' + matchday +'</td>')
                        .appendTo(tableRow)

                    let TDleftSelect = $("<td/>")
                        .append(checkboxHome)
                        .appendTo(tableRow)

                    let TDhomeTeam = $('<td>' + homeTeam + '</td>')
                        .appendTo(tableRow)

                    let TDversus = $('<td>VS</td>')
                        .appendTo(tableRow)

                    let TDrightSelect = $("<td/>")
                        .append(checkboxAway)
                        .appendTo(tableRow)
                    
                    let TDawayTeam = $('<td>'+ awayTeam + '</td>')
                        .appendTo(tableRow)

                }
                
                //Don't allow more clicks if select 3
                $('.cbox').on('click', function(){
                    let numberOfChecked = $('input.cbox:checkbox:checked').length;
                    if (numberOfChecked > 3) {
                        $(this).prop('checked',false);
                    } else {
                        if(numberOfChecked<3){
                            picks.push($(this).val())
                        } else {
                            if(numberOfChecked==3){
                                picks.push($(this).val())
                                $('#tableDiv').empty();
                                let newSubmit = '<a href="#" class="btn btn-primary" id="submitPicks">Submit Picks</a>';
                                $('#tableDiv').append(newSubmit);
                            }
                        }   
                    }
                        
                    //push picks to SQL
                    $('#submitPicks').on('click',function(event){
                        event.preventDefault()
                        let pick1 = picks[0];
                        let pick2 = picks[1];
                        let pick3 = picks[2];

                        let newPicks = {
                            user: currentUser,
                            matchday: matchdayGlobal,
                            pick1: pick1,
                            pick2: pick2,
                            pick3: pick3
                        }

                        $.post('/api/pickGames', newPicks)
                            .then(function(data){
                                console.log(data);
                                console.log('Posted pick to SQL')
                            })
                        window.location.assign(href='/standings');
                    })

                })
            
        }
        
 
    })

})




$('#logoutBtn').on('click', function(event){
    event.preventDefault();

    localStorage.removeItem('PLPickUser');
    window.location.assign(href='/');

})

    




