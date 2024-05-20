//Script to get data from page:
//https://order.incentivio.com/c/Auberginekitchen/locations/stgeorge/menu?mik=65c16e3ba4363a25bd06b8c4.65c16e3ba4363a25bd06b7f7.65c16e3ba4363a25bd06b7ed

//Ingredients List
var spans = document.querySelectorAll(
  ".MuiTypography-root.MuiFormControlLabel-label"
);
var result = [];
for (let index = 0; index < spans.length; index++) {
  var img = spans[index].querySelector("img");
  var src = img !== null ? img.src : "";
  var name = spans[index].querySelector("span").innerText;
  result.push({ id: index, name: name, src: src });
}
JSON.stringify(result);

var spans = document.querySelectorAll("[data-testid='MenuCard.Title']");
var result = [];
for (let index = 0; index < spans.length; index++) {
  var name = spans[0].innerText;
  result.push({ id: index, name: name });
}
JSON.stringify(result);

//Items list
var cards = document.querySelectorAll("[data-testid='MenuCard']");
var result = [];
for (let index = 0; index < spans.length; index++) {
  var name = cards[index].querySelector(
    "[data-testid='MenuCard.Title']"
  ).innerText;
  var img = cards[index].querySelector("img");
  var src = img !== null ? img.src : "";
  var desc = cards[index].querySelector(
    "[data-testid='MenuCard.Description']"
  ).innerText;
  result.push({ id: index, name: name, desc: desc, src: src });
}
JSON.stringify(result);

//Unify List by item name
var arr = [];
const uniqueArray = arr.filter(
  (item, index) => arr.findIndex((obj) => obj.name === item.name) === index
);
JSON.stringify(uniqueArray);
