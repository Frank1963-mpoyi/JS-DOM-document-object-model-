//EXAMINE THE DOCUMENT OBJECT//
//-----------------------------

//console.dir(document) // show all the different properties and method attached to the documen
//console.log(document.URL) // show all properties
//console.log(document.domain)// will show ip
//console.log(document.title); // will show title
//ocument.title = "Tshibuyi"; // change the title
//console.log(document.body) //will grab body
//console.log(document.all) // will show every thing in the DOM
//console.log(document.all[4])
//console.log(document.forms)
//console.log(document.forms[0]) // select specific form

// GET ELEMENT BY ID //
//----------------------

//console.log(document.getElementById("logo"))
//console.log(document.getElementById("nav-menu-container"))
//var newLogo = document.getElementById("logo")
//console.log(newLogo)
//newLogo.textContent ="Frank";
//newLogo.innerText ="Mpoyi";// pay attention about the style
//newLogo.innerHTML = "<h3> Hello World </h3>" // put <h3> text under 


// CHANGE STYLE //
//----------------

//newLogo.style.borderBottom = "solid 3 px #000" // here dont put border-Bottom with (-) but must be camelCase

// GET ELEMENTS BY CLASSNAME //
//------------------------------
// here we need Query Selector

//var items = document.getElementsByClassName("section-header wow fadeInUp")
//console.log(items);
//console.log(items[1]);
//items[1].textContent = " Hi Mpoyi";
//items[1].style.fontWeight = "bold";
//items[1].style.backgroundColor = "yello";

// to give all the items the color we have to loop them through
//for (var i = 0; i< items.length; i++){
    //items[i].getElementsByClassName.backgroundColor = "#f4f4f4";
//}

// GET ELEMENTS BY TAG NAME
//-------------------------

//var tag = document.getElementsByTagName("p")
//console.log(tag);
//console.log(tag[1]);
//tag[1].textContent = " Hi Mpoyi";
//tag[1].style.fontWeight = "bold";
//tag[1].style.backgroundColor = "yellow";

// to give all the items the color we have to loop them through
/*
for (var i = 0; i< tag.length; i++){
    tag[i].style.backgroundColor = "yellow";
}
*/

// QUERY SELECTOR //
//------------------

//var header = document.querySelector('#main-header'); // #main-header its for CSS
//header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World'

//var submit = document.querySelector('input[type="submit"]'); // CSS for button
//submit.value = "SEND"

/*
var item = document.querySelector('.section-header'); // dot very important
item.style.color = 'blue';


var lastItem = document.querySelector
('.section-header:last-child');
lastItem.style.color = "red"


var secondItem = document.querySelector
('.section-header:nth-child(2)');
secondItem.style.color = "green";
*/



// QUERY SELECT ALL //
//--------------------

/*
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = "Hello Mpoyi";

var odd = document.querySelector('li:nth-child(odd)') //CSS Method
var even = document.querySelector('li:nth-child(even)') 


for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'red';
    even[i].style.backgroundColor = '#ccc';
}
*/



// TRAVERSING DOM //
//-------------------
var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'lightgreen';
//console.log(itemList.parentNode.parentNode); // parent node of div is container
//console.log(itemList.parentNode.parentNode.parentNode); // parent node of container is body

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'lightgreen';
//console.log(itemList.parentElement.parentElement); // parent node of div is container
//console.log(itemList.parentElement.parentElement.parentElement); // parent node of container is body

// childNode
//console.log(itemList.childNodes);// not good practice children instead

// children node
