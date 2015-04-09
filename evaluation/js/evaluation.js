function ProductGrid (containerId) {
  this.rating = {"Love it":"love",
                  "Like it":"like",
                  "No Views": "noViews",
                  "Dislike it":"dislike",
                  "Abhor it": "abhor"};
  this.products = ["Tea","Coffee","Sodas"];
  this.container = $("#" + containerId);
}

ProductGrid.prototype.init= function() {
    this.BodyGrid();
    this.addEventHandlers();
};
ProductGrid.prototype.addRatings = function (ratings) {
  $('<div />')
    .text(ratings)
    .addClass(ratings)
    .appendTo('#gridContainer');
};
ProductGrid.prototype.BodyGrid = function() {
    this.FirstElement();
    for (var i = 0, len = this.products.length; i < len; i++) {
      this.createRow(this.products[i]);
    }
};
ProductGrid.prototype.createRow = function(product) {
  var FirstRow = $("<li/>", {"class": "FirstRow"}).appendTo(this.container);
    $("<div/>", {"class": "product","id": product}).appendTo(FirstRow).html(product);
    for (var key in this.rating) {
      var radioButton = $("<input/>", {"class": this.rating[key], "name": product, "type": "radio"});
      $("<div/>").appendTo(FirstRow).append(radioButton);
  }
};
ProductGrid.prototype.FirstElement = function() {
    var header = $("<li/>", {"class": "FirstRow"}).appendTo(this.container);
    $("<div/>").appendTo(header);
    for (var key in this.rating) {
      $("<div/>",{"id": this.rating[key], "class": "rating"}).appendTo(header).html(key);
    }
};
ProductGrid.prototype.addEventHandlers =  function() {
    this.container.delegate(".product", "click", this.clickProductName);
    this.container.delegate("input[type='radio']", "click", this.clickRadioButton);
    this.container.delegate(".rating", "click", this.clickRating);
  };


ProductGrid.prototype.clickRadioButton = function() {
  var clickedRadioButton = $(this),
  correspondingRating = clickedRadioButton.attr("class"),
  correspondingProduct = clickedRadioButton.attr("name");
    $(".rating.highlight, .product.highlight").removeClass("highlight");
    $("#" + correspondingRating + ", #" + correspondingProduct).addClass("highlight");
};
ProductGrid.prototype.clickProductName = function() {
    $(".rating.highlight, .product.highlight").removeClass("highlight");
    var clickedProduct = $(this),
        name = clickedProduct.text(),
        selectedRadioButton = $("input[name='" + name +"']:checked").attr("class");
    $("#" + selectedRadioButton).addClass("highlight");
    clickedProduct.addClass("highlight");
  };
ProductGrid.prototype.clickRating = function() {
  var clickedRating = $(this),
  correspondingProduct = $(".product.highlight");
  $(".rating.highlight").removeClass("highlight");
    if (correspondingProduct.length) {
      var name = correspondingProduct.text();
      clickedRating.addClass("highlight");
      $("input[type='radio'][name='" + name +"']." + clickedRating.attr("id")).prop("checked",true);
    }
};
$(document).ready(function (){
  ProductGrid = new ProductGrid("Container");
  ProductGrid.init()
});

