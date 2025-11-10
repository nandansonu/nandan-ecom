const products = [
  {title:"Masala Chips", price:"₹49", img:"https://source.unsplash.com/300x200/?chips"},
  {title:"Roasted Namkeen", price:"₹79", img:"https://source.unsplash.com/300x200/?snacks"},
  {title:"Sweet Mix", price:"₹99", img:"https://source.unsplash.com/300x200/?sweets"},
];

function load(){
  let p1 = document.getElementById("preview-grid");
  if(p1) p1.innerHTML = cards(products.slice(0,2));

  let p2 = document.getElementById("products-grid");
  if(p2) p2.innerHTML = cards(products);

  document.getElementById("year") && (year.innerText = new Date().getFullYear());
  document.getElementById("year2") && (year2.innerText = new Date().getFullYear());
  document.getElementById("year3") && (year3.innerText = new Date().getFullYear());
}

function cards(data){
  return data.map(p=>`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", load);
