// If javascript is loaded in create block
const block = document.createElement("div");
block.classList.add("block");
document.body.appendChild(block);

// Creates the calculator;
const calculater = document.createElement("div");
calculater.classList.add("calc");
block.appendChild(calculater);

calculater.innerHTML = `<div class="price-group">
<div class="corner"></div><span>INPUT <mh>(fill in)</mh></span><span>PRICE</span><span>TOTAL <mh>(input * price)</mh></span></div>`

let prices = {
  'Earrings': 17500,
  'Bracelet': 25000,
  'Necklace': 95000,
  'OldCoin': 200000,
  'PocketWatch': 39000,
  'Ring': 68000
}

for (const [name, value] of Object.entries(prices)) {
  const group = document.createElement("div");
  group.classList.add("price-group");

  const icon = document.createElement("img");
  const input = document.createElement("input");
  const price = document.createElement("span");
  const total = document.createElement("span");

  input.type = "number";
  input.min = 0;
  input.value = 0;

  price.innerText = value + "$"
  total.innerText = (input.value * value) + "$"



  group.appendChild(icon);
  group.appendChild(input);
  group.appendChild(price);
  group.appendChild(total);

  icon.src = `icons/Icon_${name}.png`;


  calculater.appendChild(group);

  input.addEventListener("change", () => {
    total.innerText = (input.value * value) + "$"
  })
}

document.body.innerHTML += ">> CALCULATOR IS NOT FINISHED YET JUST GETTING SOME OPINIONS"