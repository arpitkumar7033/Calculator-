let history = [];

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {

    if (e.target.id === "themeBtn") return;
    
    if (e.target.innerHTML == '='){
    history.push(input.value);
    console.log(history);
    try {
        string = eval(string).toString();
        input.value = string;
    } catch {
        input.value = "Error";
        string = "";
    }
    }

    else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = string;
    }

    else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    }

    else {
      string += e.target.innerHTML;
      input.value = string;
    }

  });
});

document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)) {
    string += e.key;
    input.value = string;
  } else if (e.key === "Enter") {
    try {
      string = eval(string).toString();
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } else if (e.key === "Escape") {
    string = "";
    input.value = "";
  }
});
let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  themeBtn.innerHTML =
        document.body.classList.contains("light") ? "☀️" : "🌙";
};

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}