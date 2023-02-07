// const addBtn = document.querySelector('[data-action="increment"]');
// // console.log(addBtn);
// const subtractionBtn = document.querySelector('[data-action="decrement"]');
// // console.log(subtractionBtn);
// const totalNumber = document.getElementById("value");
// // // console.log(totalNumber);
// // //! 1) Створи змінну counterValue її значенням 0.
// let counterValue = 0;
// console.log("тут лічильник:", counterValue);
// // //! 2) Додати слухачів кліків до кнопок які збільшують або зменшують значення лічильника
// addBtn.addEventListener("click", calc);
// // console.log(addBtn);
// subtractionBtn.addEventListener("click", calc);
// // console.log(subtractionBtn);
// // //! 3) Оновлюй інтерфейс новим значенням змінної counterValue.
// // totalNumber = counterValue;
// // // console.log(totalNumber);
// // function plusBtn(value) {
// //   console.log((counterValue += 1));
// //   return counterValue;
// // }
// // function minusBtn(value) {
// //   console.log((counterValue -= 1));
// //   return counterValue;
// // }
// // /////////////////////////////////////////////////////
// function calc(value) {
//   switch (value) {
//     case value === addBtn:
//       console.log(value);
//       counterValue += 1;
//       break;
//     case value === subtractionBtn:
//       console.log(value);
//       counterValue -= 1;
//       break;
//   }
//   return counterValue;
//   console.log(counterValue);
// }

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('[id="value"]');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
})