// login and register page displaying

let reg = document.querySelector("#reg");
let log = document.querySelector("#log");
let logdet = document.querySelector("#logdet");
let regdet = document.querySelector("#regdet");
function regpage() {
  logdet.classList.add("d_none");
  regdet.classList.remove("d_none");
  log.classList.add("light");
  reg.classList.add("dark");
  log.classList.remove("dark");
  reg.classList.remove("light");
}
function logpage() {
  logdet.classList.remove("d_none");
  regdet.classList.add("d_none");
  log.classList.add("dark");
  reg.classList.add("light");
  log.classList.remove("light");
  reg.classList.remove("dark");
}