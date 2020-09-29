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
//var itemList = document.querySelector('#items');
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
//console.log(itemList.children);//will be a list HTML collection

//console.log(itemList.children[1]); // will select item 1
//var children = itemList.children
//console.log(children[1])
//children[1].style.backgroundColor = 'yellow';

//FirstChild is not a good practice
//console.log(itemList.firstchild);

//FirstElementChild
//console.log(itemList.firstElementChild); 
//itemList.firstElementChild.textContent = "Hello Mpoyi";
//itemList.firstElementChild.innerHTML = "Hello Mpoyi";


//lastChild
//console.log(itemList.lastElementChild); 
//itemList.lastElementChild.textContent = "Hello Mpoyi";
//itemList.lastElementChild.innerHTML = "Hello Im the last";

//nextSibling
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling); // here its a text
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

/*

// CREATE A DIV
//-------------

var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1'

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//Create a text Node
var newDivText = document.createTextNode('Mpoyi is a cool guy');

//Add text to div
newDiv.appendChild(newDivText)

// Insert it to DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv)

// change font size
newDiv.style.fontsize = '300px';

container.insertBefore(newDiv, h1);
*/

// PART 3 EVENT


// old way new way is event listener
//function buttonClick(){
    //console.log('Button clicked');
    //document.getElementById('header-title').textContent= 'Changed'
    //document.querySelector('#main').style.backgroundColor='red';
//}
// here you can put the name of function to call it 

//var button = document.getElementById('button').addEventListener('click', buttonClick) // Syntax = target.addEventListener(event, function)

/* JavaScript provides an Eventhandler in the form of the " addEventListener () "
method. this handler can be attached to a specific HTML element 
(var button = document.getElementById('button').addEventListener('click', buttonClick))
you wish to monitor events for,
and the element can have more than one handler attached */

/*
// Other way
var button = document.getElementById('button').addEventListener
('click', function(){
    console.log(1234);
});
*/



/*
function buttonClick(e){
    //document.getElementById('header-title').textContent= 'Changed'
    //document.querySelector('#main').style.backgroundColor='red';
    //console.log(e)
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);
    //var output = document.getElementById('output');
    //output.innerHTML = '<h3>'+e.target.id+'</h3>';
    //console.log(e.type);
    //console.log(e.clientX)//position of the mouse to the window
    //console.log(e.clientY)// from top to down
    //console.log(e.offsetX) // mouse position
    //console.log(e.offsetY)
    //console.log(e.altKey); // hold alt and click if its true
    //console.log(e.ctrlKey);
    //console.log(e.shiftKey);
}

var button = document.getElementById('button').addEventListener('click', buttonClick)
*/


/*
// FOR THE MOUSE//
//var button = document.getElementById('button');
//var box =document.getElementById('box')
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mouseup', runEvent);
//button.addEventListener('mousedown', runEvent);

//box.addEventListener('mouseenter', runEvent);// when you drag mouse inside the  box is enter its only for element (<di>)
//box.addEventListener('mouseleave', runEvent); // drag outside the box is leave
//box.addEventListener('mouseover', runEvent); // if you drag in the box also the text//
//box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    //output.innerHTML = '<h3> MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'; // when you drag the mouse will show numbers
    //box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"; //rgb: red, green, blue and the color will change in the box
    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"; //the entire body will change when you drag

}
*/


var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select =document.querySelector('select')

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent); // click inside the form is focus
//itemInput.addEventListener('blur', runEvent); // click outside the form is blur

//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    //console.log(e.target.value);// target what you typing // for change event as well it will target the value you select
    //document.getElementById('output').innerHTML= '<h3>'+e.target.value+ '</h3>'; // it will put the the in the browser by output location in html
    //document.body.style.display = 'none'; // if we cut every will leave the display
    e.preventDefault(); //submit button is now working is not submitting to the external file

    
}





//NB: querySelector ; its when you target the tag like <form....>, <select...>
// getElementById ; when you target id 
//e = event