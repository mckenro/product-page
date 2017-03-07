//backend
 function NewProduct(title, category, description, price, images, thumbnails){
   this.title = title;
   this.category = category;
   this.description = description;
   this.price = price;
   this.images = [];
   this.thumbnails = [];
 }
var womanShirtOne = new NewProduct("Lady Shirt One", "Women's", "Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25, ["img/dolman_sample_gray.png", "img/dolman_sample_blue.png", "img/dolman_sample_red.png"], ["img/gray_thumb.jpg", "img/blue_thumb.jpg", "img/red_thumb.jpg"])


NewProduct.prototype.variations = function(){
  $("#product").prepend()
}

//frontend

//product detail page thumbnail gallery
$(document).ready(function() {
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product4").show();
  });
  $(".thumb5").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product6").hide();
    $("#product5").show();
  });
  $(".thumb6").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").show();
  });
//swatch hover events
$("#swatch1").hover(function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product1").show();
} , function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product1").show();
});
$("#swatch2").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});
$("#swatch3").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product3").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product3").hide();
});
$("#swatch4").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product4").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
});
$("#swatch5").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product6").hide();
  $("#product5").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});
$("#swatch6").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});
});
