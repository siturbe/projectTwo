//Generate today's date

const weekCompleteDates =[
    '08/12/2019',
    '08/20/2019',
    '08/26/2019',
    '09/01/2019',
    '09/15/2019',
    '09/23/2019',
    '09/29/2019',
    '10/06/2019',
    '10/20/2019',
    '10/27/2019',
    '11/03/2019',
    '11/11/2019',
    '11/24/2019',
    '12/01/2019',
    '12/05/2019',
    '12/08/2019',
    '12/15/2019',
    '12/22/2019',
    '12/27/2019',
    '12/29/2019',
    '01/02/2020',
    '01/12/2020',
    '01/19/2020',
    '01/23/2020',
    '02/02/2020',
    '02/09/2020',
    '02/23/2020',
    '03/01/2020',
    '03/08/2020',
    '03/15/2020',
    '03/22/2020',
    '04/05/2020',
    '04/12/2020',
    '04/19/2020',
    '04/26/2020',
    '05/03/2020',
    '05/10/2020',
    '05/18/2020',    
]

let datesNotPassed = [];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

todayString = mm + '/' + dd + '/' + yyyy;
todayNum = new Date();



for(let i=0; i<weekCompleteDates.length; i++){
    let day1 = new Date(weekCompleteDates[i]);
    let todayNum = new Date();
    if (day1 > todayNum){
        datesNotPassed.push(i);
    }
}

let matchday = String(datesNotPassed[1]);
console.log(matchday);

module.exports = matchday;

