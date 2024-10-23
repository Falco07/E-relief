const hamburger = document.querySelector("#ham");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const paymentMeter = document.querySelectorAll(".meter");
const progress = document.querySelectorAll(".progress"); // DOM element
const payButton = document.querySelectorAll(".donate-button");

console.dir(paymentMeter, "node list'")

// function updatePayment(index) {
//   console.log(index);
//   console.log("clickkkkk", index);

//   if (currentProgress < maxPayment) {
//     currentProgress += payAmount;

//     if (currentProgress > maxPayment) {
//       currentProgress = maxPayment;
//     }

//     paymentMeter.value = currentProgress;
//     progress.textContent = currentProgress;
//   } else {
//     alert("Payment is complete!");
//   }
// }

payButton.forEach((button, index) => {
  let currentProgress = 0;
  let maxPayment = 100;
  let payAmount = 5;
  button.addEventListener("click", () => {


    if (currentProgress < maxPayment) {
      currentProgress += payAmount;

      if (currentProgress > maxPayment) {
        currentProgress = maxPayment;
      }

      paymentMeter.forEach((meter, i) => {
        if (index === i) meter.value = currentProgress;
      });
      progress.forEach((increment, i) => {
        if (index === i) increment.textContent = currentProgress;
      });

    } else {
      alert("Payment is complete! ");
    }
  });
});
