function orderNow(product) {
  let phone = "91XXXXXXXXXX"; // replace with your WhatsApp number
  let message = `I want to order: ${product}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
