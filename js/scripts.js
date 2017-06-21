//backend
function NewProduct(title, category, description, price, images, thumbnails, swatches, colors, sizes, propertiesList, click){
 this.title = title;
 this.category = category;
 this.description = description;
 this.price = price;
 this.images = images;
 this.thumbnails = thumbnails;
 this.swatches = swatches;
 this.colors = colors;
 this.sizes = sizes;
 this.propertiesList = propertiesList;
 this.click = click;
}

// womens shirt prototypes go below here
var womanShirtOne = new NewProduct(
  //title
  "Women's Shirt One",
  //category
  "Womens",
  //description
  "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.",
  //price
  25,
  //main images
  ["img/W1_coral.png","img/W1_blue.png", "img/W1_purple.png", "img/W1_gray.png"],
  //thumbnail images
  ["img/Thumbs/W1_coral_thumb.jpg", "img/Thumbs/W1_blue_thumb.jpg", "img/Thumbs/W1_purple_thumb.jpg", "img/Thumbs/W1_gray_thumb.jpg"],
  //swatch images
  ["img/swatch/W1_coral_Swatch.jpg", "img/swatch/W1_blue_Swatch.jpg", "img/swatch/W1_purple_Swatch.jpg", "img/swatch/W1_gray_Swatch.jpg"],
  //colors
  ["Coral", "Ocean Blue", "Purple", "Heather Gray"],
  //sizes
  ["Small", "Medium", "Large", "Extra Large"],
  //properites
  ["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"],
  //click
  "wo");

  NewProduct.prototype.productdetail = function(){
    //loop to add all product thumbnail images
    for (var i = 0; i< this.thumbnails.length; i++) {
      $("#thumbnail-area").append("<img class=" + "'thumb" + i + "'" + " " + "src=" + this.thumbnails[i] + "></img>");
    };

    //loop to add all product images
    for (var i = 0; i< this.images.length; i++) {
      $("#product-image-large").append("<div id='product" + i + "' style='background-image:url(" + this.images[i] + ");'>");
    };

    //loop to add all product color swatch images
    for (var i = 0; i< this.swatches.length; i++) {
      $("#swatch-area").append("<img id=" + "'swatch" + i + "'" + " " + "src=" + this.swatches[i] + "></img>");
    };

    $("h1.product-title").append(this.title);

    $("h2.product-price").append("$" + this.price.toFixed(2));

    $("p.product-description").append(this.description);

    for (var i = 0; i< this.colors.length; i++) {
      $("#selColor").append("<option " + "value=" + this.colors[i] + "class=" + '"product-color">' + this.colors[i] + "</option>");
    };

    for (var i = 0; i< this.sizes.length; i++) {
      $("#selSize").append("<option " + "class=" + '"product-size">' + this.sizes[i] + "</option>");
    };

    for (var i = 0; i< this.sizes.length; i++) {
      $("#product-properties").append("<li " + "class=" + '"product-property">' + this.propertiesList[i] + "</li>");
    };

  }


 function CustomerInfo(names, address, city, state, zip, phone, shipAddress, shipCity,  shipState, shipZip, cardNumber, expire, cvc){
   this.names = names;
   this.address = address;
   this.city = city;
   this.state = state;
   this.zip = zip;
   this.phone = phone;
   this.shipAddress = shipAddress;
   this.shipCity = shipCity;
   this.shipState = shipState;
   this.shipZip = shipZip;
   this.cardNumber = cardNumber;
   this.expire = expire;
   this.cvc = cvc;
 }
CustomerInfo.prototype.makethingsappear = function(){
  $("#userInput").hide();
  $(".userConformation").show();
  $("#payInfo").append("<li>" + "Name: " + this.names + "</li>");
  $("#payInfo").append("<li>" + "Address: "+ this.address + " " + this.city + ", " + this.state + " " + this.zip + "</li>");
  $("#payInfo").append("<li>" + "Phone: " + this.phone + "</li>");
  $("#shipInfo").append("<li>" + "Ship to: " + this.names + "</li>");
  $("#shipInfo").append("<li>" + "Address: "+ this.shipAddress + " " + this.shipCity + ", " + this.shipState + " " + this.shipZip + "</li>");
}

//frontend

//product detail page thumbnail gallery
$(document).ready(function() {
  womanShirtOne.productdetail();
  $(".thumb0").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product1").hide();
    $("#product0").show();
  });
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product4").show();
  });

  $(".thumb5").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product0").hide();
    $("#product5").show();
  });
  $(".thumb6").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").show();
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
$("#swatch0").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product0").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product0").hide();
  $("#product2").hide();
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
  $("#purchase").click(function(event){
    event.preventDefault();
    $(".hideUserInput").show();
    $("#emailDiscount").hide();
    $(".emptyCart").hide();
    $("#purchase").hide();
  });

});
