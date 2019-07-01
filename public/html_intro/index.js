const form = document.getElementById('form');
const imgInput = document.getElementById('image-input');
const textInput = document.getElementById('text-input');
const list = document.getElementById('list');
const editTodo = (event) => {
  let thisLi = event.target.parentNode;
  let thisP = thisLi.querySelector("P");
  let thisImg = thisLi.querySelector("img");
  thisImg.src = prompt("Insert nre image URL");
  thisP.innerHTML = prompt("Insert new caption");
}
const deleteTodo = (event) => {
  let thisLi = event.target.parentNode;
  list.removeChild(thisLi);
}
const addTodo = () => {
  event.preventDefault();
  let li = document.createElement("LI");
  let p = document.createElement("P");
  p.innerHTML = textInput.value;
  let editButton = document.createElement("button");
  editButton.addEventListener("click", editTodo);
  editButton.innerHTML = "Edit";
  let deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", deleteTodo);
  deleteButton.innerHTML = "Delete";
  let img = document.createElement("img");
  img.src = imgInput.value;
  li.appendChild(img);
  li.appendChild(p);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  list.appendChild(li);
}
form.addEventListener("submit", addTodo);
