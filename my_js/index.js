var buy_price, buy_amount, sell_price, sell_amount, handling_fee_percent, lowest_handling_fee,
  buy_handling_fee, sell_handling_fee, securities_transaction_fee, buy_total, sell_total;

function calculate() {
  buy_price = Number(document.getElementById("buy_price").value);
  buy_amount = Number(document.getElementById("buy_amount").value);
  sell_amount = Number(document.getElementById("sell_amount").value);
  handling_fee_percent = Number(document.getElementById("handling_fee_percent").value);
  lowest_handling_fee = Number(document.getElementById("lowest_handling_fee").value);

  buy_total = buy_price * buy_amount;
  buy_handling_fee = Math.floor(buy_total * 0.001425 * handling_fee_percent);
  if (buy_handling_fee < lowest_handling_fee) {
    buy_handling_fee = lowest_handling_fee;
  }
  buy_total = buy_total + buy_handling_fee;

  sell_price = Math.ceil(buy_total / sell_amount / (1 - 0.004425));
  sell_total = sell_price * sell_amount;
  sell_handling_fee = Math.floor(sell_total * 0.001425 * handling_fee_percent);
  if (sell_handling_fee < lowest_handling_fee) {
    sell_handling_fee = lowest_handling_fee;
  }
  securities_transaction_fee = Math.floor(sell_total * 0.003);
  sell_total = sell_total - sell_handling_fee - securities_transaction_fee;

  document.getElementById("sell_price").value = sell_price;
  document.getElementById("buy_handling_fee").value = buy_handling_fee;
  document.getElementById("sell_handling_fee").value = sell_handling_fee;
  document.getElementById("securities_transaction_fee").value = securities_transaction_fee;
  document.getElementById("buy_total").value = buy_total;
  document.getElementById("sell_total").value = sell_total;

  document.cookie = `handling_fee_percent=${handling_fee_percent};max-age=${8640000};SameSite=strict`;
  document.cookie = `lowest_handling_fee=${lowest_handling_fee};max-age=${8640000};SameSite=strict`;
}

function keyEvent(event) {
  var key = event.keyCode || event.which;
  if (key == 13) {
    calculate();
  }
}