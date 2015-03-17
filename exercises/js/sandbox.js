
//1 Select all of the div elements that have a class of "module".
console.log($('div.module'));

// 2 Come up with three selectors that you could use to get the third item in the #myList unordered list.
console.log($('ul#myList :nth-child(3)'));
console.log($('ul#myList li:eq(2)'));
console.log($('ul#myList li#myListItem'));

// 3 Select the label for the search input using an attribute selector.
console.log($('form#search label[for=q]'));

// 4 Figure out how many elements on the page are hidden
console.log($(':hidden').length);

// 5 Figure out how many image elements on the page have an alt attribute.
console.log($('img[alt]').length);

// 6 Select all of the odd table rows in the table body.
console.log($('table#fruits tbody tr:even'));
$('table#fruits tbody tr:even').css( "background-color", "red" )

 // CHAPTER 2 TRANSVERSING
 // Select all of the image elements on the page; log each image’s alt attribute.
 $collectimageattr =$('img[alt]');
 console.log($collectimageattr);

 
 //Select the search input text box, then traverse up to the form and add a class to the form.
 $selectinput = $('form#search input[type ="text"]');
 console.log($selectinput);
 console.log($selectinput.parent());
 $selectinput.parent().addClass("input");


 selectinputaddclass = $('input[type ="text"]').addClass('inputclass')
 console.log(selectinputaddclass);


 //Select the list item inside #myList that has a class of “current”
 // and remove that class from it; add a clascs of “current” to the next list item.
 $current = $('ul#myList li').hasClass('current');
 console.log($current);
 $('ul#myList li').removeClass('current');
 $('ul#myList li').next().addClass('current');



// Select the select element inside #specials; traverse your way to the submit button.
 $specials = $("div#specials>form>ul>li>select");
 console.log($specials); 

// 5 Select the first list item in the #slideshow element;
// add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$slideshow = $('#slideshow> li');
console.log($slideshow);
$slideshow.addClass("current");
$slideshow.siblings().addClass("disable");

// 1  Add five new list items to the end of the unordered list #myList.
for(var i=0; i<5; i++) {
  $('ul#myList').append('<li>List Item ' + (i + 3) + '</li>');
}
  
// 2  Remove the odd list items
$('#myList li:even').remove();

// 3   Add another h2 and another paragraph to the last div.module
$('div.module:last').append('<h2>Heading</h2>').append('<p>Paragraph</p>');

// 4  Add another option to the select element; give the option the value "Wednesday"
$('div#specials select').append("<option value='wednesday'>Wednesday</option>");

// 5  Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
$('<div></div>').addClass('module').append($('img').first().clone()).appendTo($('div.module').last().parent());
// NO 4 ;
