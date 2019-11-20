let dataOfOptions

$.get('/api/populateOptions', async function(data){
    dataOfOptions = await data;
    console.log('Populated options table');
})