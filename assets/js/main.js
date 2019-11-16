//jquery smooth animation
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });
});

//change background colors
function myFunction() {
    document.body.style.backgroundColor = "#b2b2b2";
}
function myFunction1() {
    document.body.style.backgroundColor = "#eaeaea";
}
function myFunction2() {
    document.body.style.backgroundColor = "#fff";
}
function myFunction3() {
    document.body.style.backgroundColor = "#b8e1f5";
}