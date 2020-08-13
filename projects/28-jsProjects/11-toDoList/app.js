// get elements
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

  const inpValue = input.value;

  if (inpValue === "") {
    showFeedback("Please enter valid value");
  } else {
    // 1-create item and append
    addItem(inpValue);
    input.value = "";
    // 2-add item to empty array
    itemData.push(inpValue);
    console.log(itemData);
    // 3-handling the items
    handleItem(inpValue); // run AFTER submit
    // 4-add the items to local storage
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

// create item and append to item list
function addItem(inpValue) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
    <h5 class="itemText">${inpValue}</h5>
    <div class="itemIcons">
      <a href="#" class="itemIcon complete"><img src="img/check.svg" alt="check icon"/></a>
      <a href="#" class="itemIcon edit"><img src="img/edit.svg" alt="edit icon"/></a>
      <a href="#" class="itemIcon delete"><img src="img/close.svg" alt="delete icon"/></a>
    </div>
  `;
  itemList.appendChild(div);
}

function handleItem(inpValue) {
  const items = itemList.querySelectorAll(".item");
  //loop through the items
  items.forEach(function (item) {
    // to avoid adding event listeners that are not being used
    if (item.querySelector(".itemText").textContent === inpValue) {
      //1-complete event listener
      item.querySelector(".complete").addEventListener("click", function () {
        // item.qs works faster than document.qs b/c it doesnt go thru the whole document to select the item
        item.querySelector(".itemText").classList.toggle("completed");
        this.classList.toggle("visibility");
      });

      //2-edit event listener
      item.querySelector(".edit").addEventListener("click", function () {
        input.value = inpValue;
        itemList.removeChild(item); // remove from DOM
        console.log(itemData);
        itemData = itemData.filter(function (item) {
          return item !== inpValue;
        });
        console.log(itemData);
      });
    }
  });
}
