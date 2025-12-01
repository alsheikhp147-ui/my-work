let cartItems = [];
let total = 0;

function addToCart(name, price) {
  cartItems.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} ريال`;
    cartList.appendChild(li);
  });

  totalEl.textContent = `إجمالي السلة: ${total} ريال`;
}

function openCheckout() {
  if (cartItems.length === 0) {
    alert("السلة فاضية يا عم عبدالله!");
    return;
  }

  document.getElementById("checkout").style.display = "block";
  document.getElementById("finalTotal").textContent = `الإجمالي النهائي: ${total} ريال`;
}

function confirmPayment() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if (name === "" || phone === "" || address === "") {
    alert("عبي البيانات كاملة يا عم عبدالله!");
    return;
  }

  alert("تم تأكيد الدفع بنجاح! 🎉");
}
