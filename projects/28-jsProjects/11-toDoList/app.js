// get elements
const form = document.querySelector("form");
const input = document.querySelector("input");
const feedback = document.querySelector(".feedback");
const itemList = document.querySelector(".itemList");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");

// If there's data in local storage, show it or show nothing
let itemData = JSON.parse(localStorage.getItem("list")) || [];
console.log(itemData);

if (itemData.length > 0) {
  itemData.forEach(function (singleItem) {
    itemList.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item">
        <h5 class="itemText">${singleItem}</h5>
        <div class="itemIcons">
          <a href="#" class="itemIcon complete"><img src="img/check.svg" alt="check icon"/></a>
          <a href="#" class="itemIcon edit"><img src="img/edit.svg" alt="edit icon"/></a>
          <a href="#" class="itemIcon delete"><img src="img/close.svg" alt="delete icon"/></a>
        </div>
      </div>
      `
    );
    handleItem(singleItem);
  });
}

// form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inpValue = input.value;

  if (inpValue === "") {
    showFeedback("Please enter valid value", "danger");
  } else {
    // 1-create item and append
    addItem(inpValue);
    input.value = "";
    // 2-add item to empty array
    itemData.push(inpValue);
    // console.log(itemData);
    // 4-add the items to local storage
    localStorage.setItem("list", JSON.stringify(itemData));
    // 3-handling the items
    handleItem(inpValue); // run AFTER submit
  }
});

// show feedback function
function showFeedback(text, action) {
  feedback.classList.add("show", action);
  feedback.innerHTML = `<p>${text}</p>`;

  setTimeout(() => {
    feedback.classList.remove("show", action);
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
      //1-complete event listener-----------------------------------
      item.querySelector(".complete").addEventListener("click", function () {
        // item.qs works faster than document.qs b/c it doesnt go thru the whole document to select the item
        item.querySelector(".itemText").classList.toggle("completed");
        this.classList.toggle("visibility");
      });

      //2-edit event listener-------------------------------------------
      item.querySelector(".edit").addEventListener("click", function () {
        input.value = inpValue;
        itemList.removeChild(item);
        // console.log(itemData);
        itemData = itemData.filter(function (item) {
          return item !== inpValue;
        });
        // console.log(itemData);
        localStorage.setItem("list", JSON.stringify(itemData));
      });

      //3-delete event listener-------------------------------------------
      item.querySelector(".delete").addEventListener("click", function () {
        itemList.removeChild(item);
        itemData = itemData.filter(function (item) {
          return item !== inpValue;
        });
        localStorage.setItem("list", JSON.stringify(itemData));
        showFeedback("Item deleted", "success");
      });
    }
  });
}

clearBtn.addEventListener("click", function () {
  itemData = [];
  localStorage.removeItem("list");
  const items = itemList.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach(function (item) {
      itemList.removeChild(item);
    });
  }
});
