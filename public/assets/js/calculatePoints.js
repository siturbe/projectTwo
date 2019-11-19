///First get all the data pulled to the front end needed to manipulate to get scores
//Get data with scores of last week


$.get('/api/getScores', function(data1){
    matchesWithScores = data1;

    $.get('/api/getPicks', function(data2){
        userPicks = data2; 
        let everyonePickPoints = [];
        function search(matchesWithScores){
            return Object.keys(this).every((key) => matchesWithScores[key] === this[key]);
        } 

        runThruLoop();
        
        //FUnction Definitions below+++++++++++++++++++++++++++++++++++++++++++++

        async function runThruLoop(){
            let completedMatches = await matchesWithScores[0].matchday;
            let userPicksMatchDay = await userPicks[0].matchDay;
            console.log(completedMatches);
            console.log(userPicksMatchDay);

                if(userPicksMatchDay == completedMatches){
                    for (j=0; j<userPicks.length; j++){
                        populateUserResults(j);
                    }
                    deleteUserPicks();
                } else { console.log('Match Results have not yet been determined') }
        }

        //This funciton deletes the picks, but should only be called after the results are updated
        function deleteUserPicks(){
            $.ajax({
                method: "DELETE",
                url: "/api/deletePicks"
            }).then(console.log('Picks deleted'));
        }


        //Function filters picks and matches and caclulates points earned
        function populateUserResults(num){
            let pick1Results=[];
            let pick2Results=[];
            let pick3Results=[];
                
            let i=num; 

            let result1;
            let pick1;
            let query1;
            let filterResult1;

            let result2;
            let pick2;
            let query2;
            let filterResult2;

            let result3;
            let pick3;
            let query3;
            let filterResult3;

                    
        
            //FIRST GET PICK1 Results++++++++++++++++++++++++++++++++++++++++++
                pick1 = userPicks[i].pick1;
                query1 = {team2: pick1, matchday: userPicks[i].matchDay}
                filterResult1 = matchesWithScores.filter(search, query1);
                

                if(filterResult1.length == 0){
                    pick1 = userPicks[i].pick1;
                    query1 = {team1: pick1, matchday: userPicks[i].matchDay}
                    filterResult1 = matchesWithScores.filter(search, query1);

                    result1 = {
                        user: userPicks[i].user,
                        matchDay: filterResult1[0].matchday,
                        pick1: userPicks[i].pick1,
                        pick1points: filterResult1[0].team1score - filterResult1[0].team2score
                    }
                    pick1Results.push(result1);
                    
                } else {
                    result1 = {
                        user: userPicks[i].user,
                        matchDay: filterResult1[0].matchday,
                        pick1: userPicks[i].pick1,
                        pick1points: filterResult1[0].team1score - filterResult1[0].team2score
                    }
                    pick1Results.push(result1);
                }   
                
            
             
            //NEXT GET PICK2 RESULTS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                pick2 = userPicks[i].pick2;
                query2 = {team2: pick2, matchday: userPicks[i].matchDay}
                filterResult2 = matchesWithScores.filter(search, query2);
                

                if(filterResult2.length == 0){
                    pick2 = userPicks[i].pick2;
                    query2 = {team1: pick2, matchday: userPicks[i].matchDay}
                    filterResult2 = matchesWithScores.filter(search, query2);

                    result2 = {
                        user: userPicks[i].user,
                        matchDay: filterResult2[0].matchday,
                        pick2: userPicks[i].pick2,
                        pick2points: filterResult2[0].team1score - filterResult2[0].team2score
                    }
                    pick2Results.push(result2);
                    
                } else {
                    result2 = {
                        user: userPicks[i].user,
                        matchDay: filterResult2[0].matchday,
                        pick2: userPicks[i].pick2,
                        pick2points: filterResult2[0].team1score - filterResult2[0].team2score
                    }
                    pick2Results.push(result2);
                }   
                
            

            ///NEXT GET PICK3 RESULTS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                pick3 = userPicks[i].pick3;
                query3 = {team2: pick3, matchday: userPicks[i].matchDay}
                filterResult3 = matchesWithScores.filter(search, query3);
                

                if(filterResult3.length == 0){
                    pick3 = userPicks[i].pick3;
                    query3 = {team1: pick3, matchday: userPicks[i].matchDay}
                    filterResult3 = matchesWithScores.filter(search, query3);

                    result3 = {
                        user: userPicks[i].user,
                        matchDay: filterResult3[0].matchday,
                        pick3: userPicks[i].pick3,
                        pick3points: filterResult3[0].team1score - filterResult3[0].team2score
                    }
                    pick3Results.push(result3);
                    
                } else {
                    result3 = {
                        user: userPicks[i].user,
                        matchDay: filterResult3[0].matchday,
                        pick3: userPicks[i].pick3,
                        pick3points: filterResult3[0].team1score - filterResult3[0].team2score
                    }
                    pick3Results.push(result3);
                }   
                
            
            // console.log(pick1Results);
            // console.log(pick2Results);
            // console.log(pick3Results);
            
            let userResult = {
                user: pick1Results[0].user,
                matchDay: pick1Results[0].matchDay,
                pick1: pick1Results[0].pick1,
                pick1points: pick1Results[0].pick1points,
                pick2: pick2Results[0].pick2,
                pick2points: pick2Results[0].pick2points,
                pick3: pick3Results[0].pick3,
                pick3points: pick3Results[0].pick3points,
                totalPoints: pick1Results[0].pick1points + pick2Results[0].pick2points + pick3Results[0].pick3points
            };

            $.post('/api/compileResults', userResult)
                .then(function(data){
                    console.log(data);
                    console.log('Posted results to SQL');
                })

            everyonePickPoints.push(userResult);            
            console.log(everyonePickPoints, i);
            
        }

        
    })


})


