// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// $(document).ready(function() {

$(function() {
  $('#load_tweets').on('click', function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: function(tweets) {
        $('#tweets').fadeOut('slow');
        var table = $('#tweets').find('tbody').empty();
        $('#loading').html('<img src="/images/ajax-loader.gif">');
        tweets.forEach(function(tweet) {
          var tr = $('<tr>').addClass('tweet').appendTo(table);
          $('<td>').appendTo(tr).text(tweet.screen_name);
          $('<td>').appendTo(tr).text(tweet.text);
          $('<td>').appendTo(tr).text(tweet.url);
          $('#tweets').fadeIn('slow');
        });
      },
      failure: function(error) {
          alert('there are no tweets in your stash');
      }
    });
  });
});
