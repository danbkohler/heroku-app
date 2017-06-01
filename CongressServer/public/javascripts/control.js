$(document).ready(function() { 'use strict';
    var insertUrl = '/insertValidCollection';

    function insertCollection() {
        $.get(insertUrl, function(result) {
            //alert( "success" );
            $('#display').html(JSON.stringify(result));
            console.log(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    }

    $('#insertValidData').click(insertCollection);

    $("#getAll").click(function() {
        $.getJSON('/all-data', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
    });
});
