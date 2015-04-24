function ProductGrid(container) {
  this.products = ["Coffee", "Tea", "Sodas"];
  this.ratings = {"Love it":"love",
                  "Like it":"like",
                  "No Views": "noViews",
                  "Dislike it":"dislike",
                  "Abhor it": "abhor"};
  this.container = $("#"+ container);
  this.table =$("<table/>", {"id": "table"}).appendTo(this.container);
  this.Tablebody = $("<tbody/>").appendTo(this.table);
}

ProductGrid.prototype.createHeader = function() {
  var Tableheader = $("<thead/>").appendTo(this.table);
  var tablerow = $("<tr>").appendTo(Tableheader);
  $("<th/>").appendTo(tablerow);
  for ( var key in this.ratings) {
    $("<th/>", {"class": this.ratings[key]}).text(key).appendTo(tablerow);
  }
 };

ProductGrid.prototype.createRow = function (products) {
  var tablerow = $("<tr>/").appendTo(this.Tablebody);
  $("<th/>").text(products).appendTo(tablerow);
  for (var key in this.ratings) {
    var radioButton = $("<input/>", {"class": this.ratings[key], "name":products, "type": "radio"});
    $("<td/>").appendTo(tablerow).append(radioButton);
  }
}

ProductGrid.prototype.createGrid= function () {
  this.createHeader();
  for (var i = 0, len = this.products.length; i < len; i++) {
    this.createRow(this.products[i]);
  }
}

ProductGrid.prototype.clickradio = function () {

};

ProductGrid.prototype.init = function() {
  this.createGrid();
 }

 $(document).ready(function () {
  productgrid = new ProductGrid ("Container");
  productgrid.init();
 });