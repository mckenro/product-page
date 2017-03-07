//backend
 function NewProduct(title, category, description, price, images){
   this.title = title;
   this.category = category;
   this.description = description;
   this.price = price;
   this.images = [];
 }


//frontend

//product detail page thumbnail gallery
$(document).ready(function() {
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").show();
  });
  $("#userInput").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
  })
});
