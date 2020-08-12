// 1 - get elements
// 2 - form submission
// 2.1 - show feedback
// 2.1.a - prevent default on submit
// 2.1.b - if input is empty, show feedback
// 2.1.c - remove feedback after 3 seconds

const form = document.querySelector("form");
const input = document.querySelector("input");
const feedback = document.querySelector(".feedback");
const itemList = document.querySelector(".itemList");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");

let itemData = [];
