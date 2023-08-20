// Utilities function
function getNumberValue(idName) {
  const elementField = document.getElementById(idName);
  const elementValueString = elementField.innerText;
  const element = parseFloat(elementValueString);
  return element;
}

function setValue(idName, value) {
  const element = document.getElementById(idName);
  element.innerText = value;
}

function getTitle(titleId) {
  const titleField = document.getElementById(titleId);
  const title = titleField.innerText;
  return title;
}

// Hero section Button(SELL200) event
document.getElementById("btn-sell200").addEventListener("click", function () {
  const cuponInputField = document.getElementById("cupon-input");
  cuponInputField.value = "SELL200";
});

// Dynamic html
function dynamicLog(titleId, priceId) {
  const dynamicTextField = document.getElementById("dynamic-text");
  const count = dynamicTextField.childElementCount;

  const p = document.createElement("p");
  // <button onclick=""><i class="fa-solid fa-minus"></i></button>
  p.innerHTML = `${count + 1}. ${titleId}  ${priceId} TK`;
  dynamicTextField.appendChild(p);
}
//Card Click Event function
function calculation(titleId, priceId) {
  const totalPrice = getNumberValue("total-price");
  const price = getNumberValue(priceId);
  const title = getTitle(titleId);
  const total = totalPrice + price;
  const newTotal = total.toFixed(2);

  setValue("total-price", newTotal);

  const makePurchasBtn = document.getElementById("btn-purchase");
  const applyBtn = document.getElementById("btn-apply");

  if (newTotal > 0) {
    makePurchasBtn.setAttribute("enabled", "");
    makePurchasBtn.removeAttribute("disabled");
  }
  if (newTotal >= 200) {
    applyBtn.setAttribute("enabled", "");
    applyBtn.removeAttribute("disabled");
  }

  dynamicLog(title, price);
}

// calculate discount
function calculateDiscount() {
  const cuponInputField = document.getElementById("cupon-input");
  const cuponInputValue = cuponInputField.value;

  if (cuponInputValue === "SELL200") {
    const totalPrice = getNumberValue("total-price");

    const discount = totalPrice * (20 / 100);
    const fixedDiscount = discount.toFixed(2);
    setValue("discount", fixedDiscount);

    const newTotalFinal = totalPrice - discount;
    const fixedNewTotalFinal = newTotalFinal.toFixed(2);
    setValue("total-final", fixedNewTotalFinal);
    cuponInputField.value = "";
  } else {
    alert("Please Enter a valid cupon Code");
  }
}

// modal(Go Home) button Event
document.getElementById("btn-go-home").addEventListener("click", function () {
  setValue("total-price", "00");
  setValue("discount", "00");
  setValue("total-final", "00");
  const makePurchasBtn = document.getElementById("btn-purchase");
  const applyBtn = document.getElementById("btn-apply");
  makePurchasBtn.removeAttribute("enabled");
  applyBtn.removeAttribute("enabled");
  makePurchasBtn.setAttribute("disabled", "");
  applyBtn.setAttribute("disabled", "");

  const dynamicTextField = document.getElementById("dynamic-text");
  dynamicTextField.innerHTML = "";
});
