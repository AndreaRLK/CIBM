let number;
let total;

function calculateTotalAmount() {
  const storeReceipt1 = parseFloat(document.getElementById("storeReceipt1").value) || 0;
  const storeReceipt2 = parseFloat(document.getElementById("storeReceipt2").value) || 0;
  const storeReceipt3 = parseFloat(document.getElementById("storeReceipt3").value) || 0;

  total = storeReceipt1 + storeReceipt2 + storeReceipt3;

  document.getElementById("totalAmount").innerHTML = `Total Grocery Spending Amount: $${total.toFixed(2)}`;
}
