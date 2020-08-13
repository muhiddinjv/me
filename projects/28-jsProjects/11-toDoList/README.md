# ToDoList - A JavaScript Test Project

A basic todo list built to demonstrate a frontend app (only client)

with the following features:

- store data in a local storage and retrieve it
- manipulate the data: complete, edit, delete

## Objectives

- [ ] ⌨️ Get user input on the Client
- [ ] ➡️ Send user input from the client to a local storage
- [ ] 🗃 Store data in the local storage
- [ ] 🔍 Retrieve data from the local storage
- [ ] 🙈 Hide/delete elements on the client

## HTML

- [x] Setup index.html
  - link style.css & app.js
- [x] container
  - [x] feedback alert (hide)
  - [x] form
    - [x] header
    - [x] input
    - [x] add button
    - [x] items (hide)
      - [x] content
        - [x] text
        - [x] icons
      - [x] clear list button

## JavaScript

- [x] Get elements
- [] Form submissions
  - [x] Alert Feedback
    - [x] preventDefault on submit
    - [x] if input is empty...
      - [x] show feedback
      - [x] remove feedback after 3 seconds
    - [] if input is not empty...
      - [x] create item and append
      - [x] add items to empty array
      - [] handle the items
        - [x] add eventListeners to icons
          - [x] loop thru items using forEach
            - [x] if item textContent = input value
              - [x] add complete eventListener
                - [x] item classList toggle completed
                - [x] this classList toggle visibility
              - [x] add edit eventListener
                - [x] input value = inpValue
                - [x] item list remove child
              - [x] add delete eventListener
                - [x] item list remove child
                - [x] show feedback
      - [] add the items to local storage

## What's next?

- Add time & date to item
- Add deadline to item
- Search for items
- User Sign up/Login
- User Profiles
  - Only show items from given user
