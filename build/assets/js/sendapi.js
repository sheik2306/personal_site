$(document).ready(function() {

  $("#submit").click(function(e) {
      e.preventDefault();

      var name = $("#name").val(),
          email = $("#email").val(),
          comment = $("#comment").val();

      $.ajax({
          type: "POST",
          url: ' https://82c9zuga7h.execute-api.ca-central-1.amazonaws.com/default/reCaptcha',
          contentType: 'application/json',
          data: JSON.stringify({
              'name': name,
              'email': email,
              'comment': comment
          }),
          success: function(){
              // $('#contact-submit').text('Email was sent.');
              $("#name-error").css({ visibility: "visible",display: "block"});

          },
          error: function(){
              $('#contact-submit').text('Error.');
              $("#name-error").css({ visibility: "visible",display: "block"});

          }
      });
  })
});

