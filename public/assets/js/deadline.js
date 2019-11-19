const deadlineDates =[
    '08/09/19',
    '08/17/19',
    '08/23/19',
    '09/01/19',
    '09/16/19',
    '09/22/19',
    '09/28/19',
    '10/06/19',
    '10/19/19',
    '10/27/19',
    '11/02/19',
    '11/09/19',
    '11/23/19',
    '11/30/19',
    '12/03/19',
    '12/07/19',
    '12/14/19',
    '12/21/19',
    '12/26/19',
    '12/28/19',
    '01/01/20',
    '01/11/20',
    '01/18/20',
    '01/21/20',
    '02/01/20',
    '02/08/20',
    '02/22/20',
    '02/29/20',
    '03/07/20',
    '03/14/20',
    '03/21/20',
    '04/04/20',
    '04/11/20',
    '04/18/20',
    '04/25/20',
    '05/02/20',
    '05/09/20',
    '05/17/20',
        
]

let datesNotPassed = [];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

todayString = mm + '/' + dd + '/' + yyyy;
todayNum = new Date();



for(let i=0; i<deadlineDates.length; i++){
    let day1 = new Date(deadlineDates[i]);
    let todayNum = new Date();
    if (day1 > todayNum){
        datesNotPassed.push(i);
    }
}

let deadline = String(datesNotPassed[1]-1);
console.log("deadline=" + deadline);


