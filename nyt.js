
    // search term:
    // number of records to receive:
    // start year(opt)
    // end year (opt)
    // search
    let searchTerm = 'obama';
    //console.log(searchTerm)
    
    let queryURL = 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=e74b17e821394fbcb799dc99ad6d7e75&q=' + searchTerm;
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response.response.docs[0].headline.main)
            $('#target').append(`<div> ${response.response.docs[0].headline.main} </div>`)
        });