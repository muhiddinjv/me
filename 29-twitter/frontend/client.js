const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const api_url = 'http://localhost:5000/twits';
const twitDiv = document.querySelector('.twitDiv');

loading.style.display = '';

listAllTwits();

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const twit = {
    name,content
  };

form.style.display = 'none';
loading.style.display = '';

fetch(api_url, {
  method: 'POST',
  body: JSON.stringify(twit),
  headers: {
    'Content-Type':'application/json'
  }
}).then(response => response.json()).then(createdTwit =>{
    form.reset();
    setTimeout(() => {
      form.style.display = '';
    }, 10000);
    listAllTwits();
  })
})

function listAllTwits(){
  twitDiv.innerHTML = '',
  fetch(api_url).then(response => response.json()).then(twits=>{
    // console.log(twits);
    twits.reverse();
    twits.forEach(twit => {
      const div = document.createElement('div');
      
      const header = document.createElement('h3');
      header.textContent = twit.name;
      // textContent = if a user types in <p>, it will be just text
      // innerHTML = if a user types in <p>, it will be rendered and p tag will be created
      const contents = document.createElement('p');
      contents.textContent = twit.content;

      const date = document.createElement('small');
      date.textContent = new Date(twit.created);

      div.appendChild(header);
      div.appendChild(contents);
      div.appendChild(date);
      twitDiv.appendChild(div);
      // paused the video at 00-56-20
    });
    loading.style.display = 'none';
  })
}