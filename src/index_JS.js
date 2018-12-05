alert("gerere");
console.log("asdsa");
$(document).ready(function(){
    alert("here");
    $('body').scrollspy({target: "#home_main", offset: 50});   
  
    $("#go_down").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
     
            window.location.hash = hash;
          });
        }  // End if
    });
  });