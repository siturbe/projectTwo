///First get all the data pulled to the front end needed to manipulate to get scores
//Get data with scores of last week


$.get('/api/getScores', function(data1){
    matchesWithScores = data1;

    $.get('/api/getPicks', function(data2){
        
        let pick1Results=[];
        let pick2Results=[];
        let pick3Results=[];
        userPicks = data2;      
        let i=0; 

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

        function search(matchesWithScores){
            return Object.keys(this).every((key) => matchesWithScores[key] === this[key]);
        } 
        console.log(userPicks);
        
        // for (let i=0; i<userPicks.lentgh; i++){
            //FIRST GET PICK1 Results++++++++++++++++++++++++++++++++++++++++++
                pick1 = userPicks[i].pick1;
                query1 = {team2: pick1, matchday: userPicks[i].matchDay}
                filterResult1 = matchesWithScores.filter(search, query1);
                console.log(filterResult1.length);

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
                console.log(pick1Results);
            
             
            //NEXT GET PICK2 RESULTS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                pick2 = userPicks[i].pick2;
                query2 = {team2: pick2, matchday: userPicks[i].matchDay}
                filterResult2 = matchesWithScores.filter(search, query2);
                console.log(filterResult2.length);

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
                console.log(pick2Results);
            

            ///NEXT GET PICK3 RESULTS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                pick3 = userPicks[i].pick3;
                query3 = {team2: pick3, matchday: userPicks[i].matchDay}
                filterResult3 = matchesWithScores.filter(search, query3);
                console.log(filterResult3.length);

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
                console.log(pick3Results);
            





        // }

    })


})

