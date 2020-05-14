
var db =  firebase.firestore();




var nameIndex = 0;
var emailIndex = 0;
var i = 0; /* Set Global Variable i */
function incrementName(){
    nameIndex += 1; /* Function for automatic increment of field's "Name" attribute. */
}

function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
if (childDiv == parentDiv){
alert("The parent div cannot be removed.");
}
else if (document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
}
else{
alert("Child div has already been removed or does not exist.");
return false;
}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function nameFunction(){

var r = document.createElement('span');
var newspan = document.createElement('span');
var div1 = document.createElement("div");


var y = document.createElement("INPUT");
div1.setAttribute("id", "div1")
div1.setAttribute("ondrop","drop(event)");
div1.setAttribute("ondragover","allowDrop(event)");

y.setAttribute("type", "text");
y.setAttribute("placeholder", "Name");
r.setAttribute("draggable","true");
r.setAttribute("ondragstart","drag(event)");
y.setAttribute("height", "50");
y.setAttribute("width", "200")

var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
incrementName();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");

newspan.appendChild(div1);
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
document.getElementById("myForm2").appendChild(newspan);




}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
function emailFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Email");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
function contactFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "checkbox");
y.setAttribute("placeholder", "Contact");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Message textarea field.

------------------------------------------------------------------------------
*/
function textareaFunction(){
var r = document.createElement('span');
var y = document.createElement("TEXTAREA");
var g = document.createElement("IMG");
y.setAttribute("cols", "17");
y.setAttribute("placeholder", "message..");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);



}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}

 
function writeData(){
    
    alert(nameIndex);

var db = firebase.firestore();
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
  
    nameIndex : nameIndex
})
.then(function() {

    console.log("Document successfully written!");
})
.catch(function(error) {
    alert("error");
    console.error("Error writing document: ", error);
});
  
}