$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 1000, function(){ //No sé si mi pc se pone lento o este número lo hace más lento el scroll
        window.location.hash = gato;
      });
    }
  });

    $('[data-toggle="tooltip"]').tooltip()
    
  // $('[data-toggle="popover"]').popover();

});
