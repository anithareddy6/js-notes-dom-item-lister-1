
// examine the document object(just try)

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textcontent ='hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);



// selecting item and changing content ,style 
// var item=document.querySelector("h1")
// console.log(item)
// item.innerHTML="hello"
// item.innerHTML="<h2>good</h2>"
// item.style.borderBottom="3px solid black"

//selecting item and changing background color,fontweight
// var item=document.querySelector("#items")
// console.log(item);
// item.firstElementChild.style.fontWeight="bold "
//to add background color to middle child,we have to access through children and index
// item.children[2].style.color="blue"
// item.lastElementChild.style.backgroundColor="pink"
// for(var i=0;i<item.length;i++)
// {
//     item[i].style.backgroundColor ="#f4f4f4";
// }

//selecting element and inserting value
// var input=document.querySelector("input")
// input.value="hello world"

//selecting element and changing element name(submit as send)
// var submit=document.querySelector('input[type="submit"]');
// submit.value="send"

//we can grab two element and manupulate one element by index like below
// var titles=document.querySelectorAll(".title");
// console.log(titles)
// titles[0].style .color="pink"

//changing background for odd listitem like below
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor ="#ccc"
// }

//changing background for even listitem like below
// var even=document.querySelectorAll('li:nth-child(even)');
// for (var i=0;i<even.length;i++){
//     even[i].style.backgroundColor ="#f4f4f4"
// }


// traversing DOm 

// parentnode and parentelement are same


var item=document.querySelector("#items")
//parent node of items
// console.log(item.parentNode);
// changing backgroundcolor via parentnode
// item.parentNode.style.backgroundColor="pink"
//parentElement
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor="pink"

// childNodes(its just represnt whitespace or linebreak,we can only see what type(ie)text)
// console.log(item.childNodes)

//children(we can access inner child like below)
// console.log(item.children);
// console.log(item.children[0])
// item.children[0].style .color="red"

//firstchild,lastchild,nextsibiling(same like childnodes)
//firstchild
// console.log(item.firstChild)
// lastchild
// console.log(item.lastChild)
//nextsibiling
// console.log(item.nextSibling);
//previoussibiling
// console.log(item.previousSibling);

//firstelementchild(it change firstelement of child)
// item.firstElementChild.style .color="yellow"
// item.firstElementChild.textContent="hello"

// lastelementchild(it change lastelement of child)
// item.lastElementChild.style .color="yellow"
// item.lastElementChild.textContent="hello"

// nextElementsibiling(it gives next element of last sibiling)
// console.log(item.nextElementSibling);

//previouselementsibiling(it gives previous element of last sibiling)
// console.log(item.previousElementSibling);
// item.previousElementSibling.style .color="red"

//createelement

//lets create div
// s1:create div and assign variable name to item(newdiv below)
// var newDiv=document.createElement("div")
// console.log(newDiv)

// to create classname inside div 
// newDiv.className="hello"
// console.log(newDiv)

// to create id inside div
// newDiv.id="hello"
// console.log(newDiv)

//to create title inside div
// newDiv.setAttribute('title','hello div')
// console.log(newDiv)

//to create or add textnode inside div(step1)-first create textnode like below
// var newDivText=document.createTextNode('Hello world')
//whenever we create textnode we must use append to add inside div or any tag or node
//createdtextnodevariablename.appendchild(textnodevariablename)-syntx for appendchild(like below)
// newDiv.appendChild(newDivText)
// console.log(newDiv)

// to actually implement in dom(live server)
// var container=document.querySelector("header .container")//(header .container)->header tag (leave spce) and inside class container
// var h1=document.querySelector("header h1")//h1 inside header
// container.insertBefore(newDiv, h1);//we are inserting newdiv("hello world")before h1
// to add fontsize to that implemented div
// newDiv.style.fontSize="30px"

//to create element ,create text inside this element and display it on screen 
// var div=document.createElement('div')
// div.className="list-group-item"
// div.id="list-group"
// newdiv=document.createTextNode("hello")
// div.appendChild(newdiv)
// var one=document.querySelector('#items')
// var two=document.querySelector('#two')
// one.insertBefore(newdiv, two);
// console.log(two)