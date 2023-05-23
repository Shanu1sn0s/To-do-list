const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if(inputBox.value ===''){
        alert('You need to write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

// limited characters

inputBox.addEventListener("input", function(e) {
  const maxLength = 30;
  const currentLength = inputBox.value.length;
  
  if (currentLength > maxLength) {
    alert("You can only write up to 30 charaters par list!");
  }
});

listContainer.addEventListener('click', function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();