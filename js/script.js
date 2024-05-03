const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please add a link";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
  }
}
