//backend
 function NewProduct(title, category, description, price, images){
   this.title = title;
   this.category = category;
   this.description = description;
   this.price = price;
   this.images = [];
 }

 function CustomerInfo(names, address, city, state, zip, phone, shipName, shipAddress, shipState, shipZip, cardNumber, expire, cvc){
   this.names = name;
   this.address = address;
   this.city = city;
   this.state = state;
   this.zip = zip;
   this.phone = phone;
   this.shipName = shipName;
   this.shipAddress = shipAddress;
   this.shipState = shipState;
   this.shipZip = shipZip;
   this.cardNumber = cardNumber;
   this.expire = expire;
   this.cvc = cvc;
 }
CustomerInfo.prototype.makethingsappear = function(){
  $("#emailDiscount").hide();
  $(".emptyCart").hide();
  $("#priceCalculator").hide();
  $("#userInput").hide();

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
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    var shipAddress = $("#shipAddress").val();
    var shipCity = $("#shipCity").val();
    var shipState = $("#shipState").val();
    var shipZip = $("#shipZip").val();
    var cardNumber = $("#cardNumber").val();
    var expire = $("#expire").val();
    var cvc = $("#cvc").val();
    var customer = new CustomerInfo(name, address, city, state, zip, phone, shipAddress, shipCity, shipState, shipZip, cardNumber, expire, cvc);
    console.log(customer);
    customer.makethingsappear();
  })
});
