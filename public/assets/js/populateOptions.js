let dataOfOptions

$.get('/api/populateOptions', function(data){
    dataOfOptions = data;
    console.log('Populated options table');
})