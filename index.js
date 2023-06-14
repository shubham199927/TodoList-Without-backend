



document.querySelector("#newItem").addEventListener("keydown", pressEnter);
function pressEnter(e){
   
var input = e.keyCode;


   var enteredText = document.getElementById('newItem').value;
   
   var newItemAdd =  document.createElement("li") ;
   newItemAdd.className='liDesign';

var divL= document.createElement('div');
var divR= document.createElement('div');
var paraLeft= document.createElement('p');
var del= document.createElement('button');
var edit = document.createElement('button');
var check= document.createElement('input');
//Delete Button Elements
del.innerText= 'X';
del.style.border='none';
del.style.backgroundColor='red';
del.style.padding='6px 13px';
del.id = 'deleted';
// Checkbox Elements
check.type='checkbox';
check.id='checked';
// Edit Buttton Elements
edit.innerText = "✏️";
paraLeft.className='para';
edit.style.border='none';
edit.style.backgroundColor='green';
edit.style.padding='6px 7px';
edit.id = 'edit';


//Edit
var newText = document.createElement('input');
newText.type= "text";
newText.id= "newValue";
newText.className = "whiteBox";




paraLeft.innerText= enteredText;
newItemAdd.appendChild(divL);
divL.appendChild(paraLeft); 
divR.appendChild(check);
divR.appendChild(del);
divL.appendChild(newText);





divR.appendChild(edit);
newItemAdd.appendChild(divR); 
   if(input===13 && enteredText.trim() !== "")
   {
   document.querySelector('ul').appendChild(newItemAdd);
   document.getElementById('newItem').value = "";
   }
   
 
}


document.addEventListener('click', ev => {
  if (ev.target.id =='checked') {
   var text= ev.target.parentElement.parentElement.children[0].children[0];
    text.classList.toggle('checked');
  }
});

document.addEventListener('click', e => {
  if(e.target.id == "deleted")
  {
   var deleting = e.target.parentElement.parentElement;
        deleting.remove();

  }


});


document.addEventListener('click', e => {
   
if (e.target.id=="edit" ){

var edit = e.target.parentElement.parentElement.children[0].children[1];
edit.classList.toggle('visible')

}


document.addEventListener("keydown", ev => {
   var original = ev.target.parentElement.parentElement.children[0].children[0]; 
   
   var newTextValue =  ev.target.parentElement.parentElement.children[0].children[1];
    var input = ev.keyCode;
    newTextValue = newTextValue.value;
    
   if(input===13 &&  newTextValue.trim() !== "" )
   {
     original.innerText = newTextValue;
     for(i=0;i<10;i++)  {
     document.querySelectorAll("#newValue")[i].value = "";
     document.querySelectorAll("#newValue")[i].classList.remove("visible");
     }
    
 }
       
});

}
);




