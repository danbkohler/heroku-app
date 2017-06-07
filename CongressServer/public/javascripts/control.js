$(document).ready(function() { 'use strict';
    var insertUrl = '/insertValidCollection';

    //I am adding in code for emptyCollection, based on insertCollection
    var insertEmptyUrl = '/emptyCollection';

    function insertCollection() {
        $.get(insertUrl, function(result) {
            //alert( "success" );
            $('#display').html(JSON.stringify(result));
            console.log(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function(error) {
                //alert( "error" );
                alert(JSON.stringify(error.responseJSON, null, 4));
            })
            .always(function() {
                console.log('finished');
            });
    }

    $('#insertValidData').click(insertCollection);

    $('#getAll').click(function() {
        $.getJSON('/all-data', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        });
    });

    //More code for empty collection will go below
});
