const list = document.querySelectorAll(".hexagonos");
function activeLink() {
  list.forEach((item) =>
    item.classList.remove(`pentakill`));
  this.classList.add(`pentakill`);
}
list.forEach((item) =>
  item.addEventListener(`click`, activeLink));

const menu = document.querySelectorAll(".service-1");
function activarMenu() {
menu.forEach((item)=>
item.classList.remove(`active`));
this.classList.add(`active`);
}
menu.forEach((item) =>
  item.addEventListener(`click`, activarMenu));