const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const api_url = 'http://localhost:5000/twits';
const twitDiv = document.querySelector('.twitDiv');

loading.style.display = "";

listAllTwits();

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const twit = {
    name,content
  };
  console.log(twit);
form.style.display = "none";
loading.style.display = "";
fetch(api_url, {
  method: 'POST',
  body: JSON.stringify(twit),
  headers: {
    'Content-Type':'application/json'
  }
}).then(response => response.json())
  .then(createdTwit =>{
    console.log(createdTwit);
    form.reset();
    form.style.display = '';
    loading.style.display = 'none';
  })
})

function listAllTwits(){
  fetch(api_url).then(response => response.json()).then(twits=>{
    twits.forEach(twit => {
      const div = document.createElement('div');
      const header = document.createElement('h3');
      header.textContent = twit.name;
      div.textContent = twit.content;
      twitDiv.appendChild('div');
      twitDiv.appendChild('header');
      // paused the video at 00-56-20
    });
  })
}