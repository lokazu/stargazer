$(document).ready(function() {

  $('#search').on('submit', function() {
    var name = $('#search-name').val();
    var api = 'http://www.strudel.org.uk/lookUP/json/?name=' + name;

    // console.log(name);
    $.ajax({
        url: api,
        dataType: "jsonp",
        jsonpCallback: "stargazer"
      })
      // .done(function(name) {
      // //   console.log(data);
      // })
      .fail(function() {
        // alert('Are you sure about the star name?')
        // console.log('hey');
      });

    return false;
  });

});

function stargazer(json) {
  // console.log(json);
  if (json.image) {
    $('#preview').html('<img src="' + json.image.src + '">')
  } else {
    alert('Star not found');
  }
};

// requires "jsonp" datatype.

// $.ajax({
//     data: someData,
//     dataType: 'json',
//     url: '/path/to/script',
//     success: function(data, textStatus, jqXHR) {
//         // When AJAX call is successfuly
//         console.log('AJAX call successful.');
//         console.log(data);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//         // When AJAX call has failed
//         console.log('AJAX call failed.');
//         console.log(textStatus + ': ' + errorThrown);
//     },
//     complete: function() {
//         // When AJAX call is complete, will fire upon success or when error is thrown
//         console.log('AJAX call completed');
//     };
// });
// view raw
