const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const api_url = 'http://localhost:5000/twits';

loading.style.display = "none";

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
    'content-type':'application/json'
  }
})
})