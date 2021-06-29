const h1 = document.getElementById('h_1')
const h2 = document.getElementById('h_2')
const h3 = document.getElementById('h_3')
const h4 = document.getElementById('h_4')
const p1 = document.getElementById('p_1')
const p2 = document.getElementById('p_2')
const p3 = document.getElementById('p_3')

h2.addEventListener('click', function(){
   p1.classList.toggle('hidden');
});
  
h3.addEventListener('click', function(){
   p2.classList.toggle('hidden');
});

h4.addEventListener('click', function(){
   p3.classList.toggle('hidden');
});
