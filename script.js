//alert
function showMessage1() {
  alert("lagi ngelag bro");
}
function showMessage2() {
  alert("ngelag banget bro");
}
function showMessage3() {
  alert("lu mah kagak percaya kalo ngelag");
}
function showMessage4() {
  alert("cape bet gw ngasih tau lu");
}
function showMessage5() {
  alert("au ah kan gw bilang lagi ngelag");
}
//end alert

//Kalkulator Script
function calculateLoan() {
  // Ambil nilai input
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var loanTerm = parseInt(document.getElementById("loanTerm").value);

  // Validasi input
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
    alert("Harap masukkan nilai yang valid.");
    return;
  }

  // Mengubah tingkat Bunga menjadi decimal
  var annualInterestRate = interestRate / 100;

  // Menghitung tingkat Bunga Bulanan
  var monthlyInterestRate = annualInterestRate / 12;

  // Menghitung jumlah Pembayaran (loanTerm dalam bulan)
  var numberOfPayments = loanTerm;

  // Rumus Perhitungan Pinjaman
  var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  var totalPayment = monthlyPayment * numberOfPayments;
  var totalInterest = totalPayment - loanAmount;

  // Menampilkan hasil
  document.getElementById("monthlyPayment").innerHTML = "Rp " + monthlyPayment.toFixed(2);
  document.getElementById("totalPayment").innerHTML = "Rp " + totalPayment.toFixed(2);
  document.getElementById("totalInterest").innerHTML = "Rp " + totalInterest.toFixed(2);
}
//End Kalkulator Script
