let incre_El,
  save_El,
  count = 0;
incre_El = document.getElementById("value");
save_El = document.getElementById("message");

function increment() {
  count = count + 1;
  incre_El.textContent = count;
}

function save() {
  save_El.textContent = save_El.textContent + " - " + count;
  count = 0;
  incre_El.textContent = count;
}
