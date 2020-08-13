const form = document.querySelector("form");
const input = document.querySelector("input");
const feedback = document.querySelector(".feedback");
const itemList = document.querySelector(".itemList");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");

let itemData = [];

// form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const textValue = input.value;

  if (textValue === "") {
    showFeedback("Please enter valid value");
  } else {
    addItem(textValue);
  }
});

// show feedback function
function showFeedback(text) {
  feedback.classList.remove("hide");
  feedback.innerHTML = `<p>${text}</p>`;

  setTimeout(() => {
    feedback.classList.add("hide");
  }, 3000);
}

// create items from input value and append to item list
function addItem(value) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
    <h5 class="itemText">${value}</h5>
    <div class="itemIcons">
      <a href="#" class="itemIcon complete"><img src="img/check.svg" alt="check icon"/></a>
      <a href="#" class="itemIcon edit"><img src="img/edit.svg" alt="edit icon"/></a>
      <a href="#" class="itemIcon delete"><img src="img/close.svg" alt="delete icon"/></a>
    </div>
  `;
  itemList.appendChild(div);
  input.value = "";
}
