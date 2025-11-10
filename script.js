const products = [
  {
    title:"Masala Chips",
    price:"₹49",
    img:"https://i.imgur.com/3ZQ3Z1u.png"
  },
  {
    title:"Roasted Namkeen",
    price:"₹79",
    img:"https://i.imgur.com/O3ZQe1T.png"
  },
  {
    title:"Sweet Mix",
    price:"₹99",
    img:"https://i.imgur.com/6QYV6cE.png"
  }
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
      <img src="${p.img}" onerror="this.src='https://i.imgur.com/BO0aPjC.png'">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", load);
