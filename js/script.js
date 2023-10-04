/**
 * 1. Створит візуальну частину HTLM/CSS
 * - Створити форму для створення авто
 * - Створити поле для відображення парковки
 * - Створити автомобілі
 * - Додати декілька авто на парковку
 * 2. Зробити створення авто та доданя авто на парковку
 * - Оброблення форми
 * - Створити авто 
 * <div class="car color-red type-1" style="top: 20px; left: 80px">
  <div class="top"></div>
  <div class="middle"></div>
  <div class="bottom"></div>
</div>
- Додати авто на сторінку в потрібні координати
 * 3. Зробити рівні парковки
 * 4. Зробити видалення авто
 *
 */

console.dir();
// Обрати поля форми
let numbers = document.querySelector("input[name=numbers]");
let color = document.querySelector("select[name=color]");
let type = document.querySelector("select[name=type]");
let place = document.querySelector("select[name=place]");
// let place2 = document.querySelector("select[name=place2]");
// let place3 = document.querySelector("select[name=place3]");
let btnAdd = document.querySelector("#btn-add");
let cars1Block = document.querySelector("#cars-1");
let cars2Block = document.querySelector("#cars-2");
let cars3Block = document.querySelector("#cars-3");
let placeLvl1 = document.querySelector("#place-lvl-1");
let placeLvl2 = document.querySelector("#place-lvl-2");
let placeLvl3 = document.querySelector("#place-lvl-3");

// КООРДИНАТИ ЛВЛ 1
let pos1 = [
  {
    top: "-16px",
    left: "120px",
    direction: "horizontally",
  },
  {
    top: "85px",
    left: "120px",
    direction: "horizontally",
  },
  {
    top: "190px",
    left: "120px",
    direction: "horizontally",
  },
  {
    top: "295px",
    left: "120px",
    direction: "horizontally",
  },
  {
    top: "400px",
    left: "120px",
    direction: "horizontally",
  },
  {
    top: "-16px",
    left: "350px",
    direction: "horizontally",
  },
  {
    top: "85px",
    left: "350px",
    direction: "horizontally",
  },
  {
    top: "190px",
    left: "350px",
    direction: "horizontally",
  },
  {
    top: "295px",
    left: "350px",
    direction: "horizontally",
  },
  {
    top: "400px",
    left: "350px",
    direction: "horizontally",
  },
];
btnAdd.onclick = function () {
  if (btnLVL1.classList.contains("active")) {
    createCar1(
      numbers.value,
      color.value,
      type.value,
      pos1[place.value],
      cars1Block
    );
  }
};
function createCar1(numbers, color, type, place, cars1Block) {
  let html =
    '<div class="car color-' +
    color +
    " type-" +
    type +
    " " +
    place.direction +
    '" style="top: ' +
    place.top +
    "; left: " +
    place.left +
    '">' +
    '<div class="top"></div>' +
    '<div class="middle" id="car-middle">' +
    numbers +
    "</div>" +
    '<div class="bottom"></div>' +
    "</div>";
  cars1Block.innerHTML = cars1Block.innerHTML + html;
}
// Видалення авто
cars1Block.onclick = function (event) {
  let element = event.target;
  let parentElement = element.parentElement;
  if (parentElement.classList.contains("car")) {
    // Вікно запиту
    let approve = confirm("Ти дійсно хочеш видалити авто?"); // true || false
    if (approve) {
      parentElement.remove();
    }
  }
};
// КООРДИНАТИ ЛВЛ 2
let pos2 = [
  {
    top: "12px",
    left: "82px",
    direction: "sideways",
  },
  {
    top: "105px",
    left: "82px",
    direction: "sideways",
  },
  {
    top: "195px",
    left: "82px",
    direction: "sideways",
  },
  {
    top: "285px",
    left: "82px",
    direction: "sideways",
  },
  {
    top: "377px",
    left: "82px",
    direction: "sideways",
  },
  {
    top: "-30px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "50px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "137px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "221px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "305px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "390px",
    left: "462px",
    direction: "horizontally",
  },
  {
    top: "474px",
    left: "462px",
    direction: "horizontally",
  },
];
// Активні координати в залежності від рівня
btnAdd.onclick = function () {
  if (btnLVL1.classList.contains("active")) {
    createCar(
      numbers.value,
      color.value,
      type.value,
      pos1[place.value],
      cars1Block
    );
  } else if (btnLVL2.classList.contains("active")) {
    createCar(
      numbers.value,
      color.value,
      type.value,
      pos2[place.value],
      cars2Block
    );
  }
};
function createCar(numbers, color, type, place, cars2Block) {
  let html =
    '<div class="car color-' +
    color +
    " type-" +
    type +
    " " +
    place.direction +
    '" style="top: ' +
    place.top +
    "; left: " +
    place.left +
    '">' +
    '<div class="top"></div>' +
    '<div class="middle" id="car-middle">' +
    numbers +
    "</div>" +
    '<div class="bottom"></div>' +
    "</div>";
  cars2Block.innerHTML = cars2Block.innerHTML + html;
}
// Видалення авто
cars2Block.onclick = function (event) {
  let element = event.target;
  let parentElement = element.parentElement;
  if (parentElement.classList.contains("car")) {
    let approve = confirm("Ти дійсно хочеш видалити авто?"); // true || false
    if (approve) {
      parentElement.remove();
    }
  }
};

// КООРДИНАТИ ЛВЛ 3
let pos3 = [
  {
    top: "74px",
    left: "5px",
    direction: "vertically",
  },
  {
    top: "74px",
    left: "77px",
    direction: "vertically",
  },
  {
    top: "74px",
    left: "150px",
    direction: "vertically",
  },
  {
    top: "74px",
    left: "226px",
    direction: "vertically",
  },
  {
    top: "74px",
    left: "302px",
    direction: "vertically",
  },
  {
    top: "74px",
    left: "377px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "5px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "77px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "150px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "226px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "302px",
    direction: "vertically",
  },
  {
    top: "421px",
    left: "377px",
    direction: "vertically",
  },
];
// Активні координати в залежності від рівня
btnAdd.onclick = function () {
  if (btnLVL1.classList.contains("active")) {
    createCar(
      numbers.value,
      color.value,
      type.value,
      pos1[place.value],
      cars1Block
    );
  } else if (btnLVL2.classList.contains("active")) {
    createCar(
      numbers.value,
      color.value,
      type.value,
      pos2[place.value],
      cars2Block
    );
  } else if (btnLVL3.classList.contains("active")) {
    createCar(
      numbers.value,
      color.value,
      type.value,
      pos3[place.value],
      cars3Block
    );
  }
};
function createCar(numbers, color, type, place, cars3Block) {
  let html =
    '<div class="car color-' +
    color +
    " type-" +
    type +
    " " +
    place.direction +
    '" style="top: ' +
    place.top +
    "; left: " +
    place.left +
    '">' +
    '<div class="top"></div>' +
    '<div class="middle" id="car-middle">' +
    numbers +
    "</div>" +
    '<div class="bottom"></div>' +
    "</div>";
  cars3Block.innerHTML = cars3Block.innerHTML + html;
}
// Видалення авто
cars3Block.onclick = function (event) {
  let element = event.target;
  let parentElement = element.parentElement;
  if (parentElement.classList.contains("car")) {
    let approve = confirm("Ти дійсно хочеш видалити авто?"); // true || false
    if (approve) {
      parentElement.remove();
    }
  }
};
/**
 * 1. Виводити номер авто на верхньому блоці middle
 * 2. Зробити рівні
 * - Вибрати всі кнопки лвл
 * - Додати подію онклік на кожну кнопку
 * - При кліці на рівень видаляти класс актів і додавати на інший рівень
 * - Замінити картинку фону на нову при зміні лвл
 * - Скрити div з неактивним блоком (#cars-[1-3])
 * 3. Додавати автомобілі на активний блок
 * 4. Прописати координати для кожного поля
 *
 *
 */

let btnLVL1 = document.querySelector("#lvl-1");
let btnLVL2 = document.querySelector("#lvl-2");
let btnLVL3 = document.querySelector("#lvl-3");
let img1 = document.querySelector("#img-1");
let img2 = document.querySelector("#img-2");
let img3 = document.querySelector("#img-3");
let cars1 = document.querySelector("#cars-1");
let cars2 = document.querySelector("#cars-2");
let cars3 = document.querySelector("#cars-3");
let placeSelect = document.querySelector("#place-select");
let hiddenOptions = document.querySelectorAll(".hidden-option");
// Приховання фону, авто та активної кнопки в залежності від рівня
btnLVL1.onclick = function () {
  btnLVL1.classList.add("active");
  btnLVL2.classList.remove("active");
  btnLVL3.classList.remove("active");
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";
  cars1.style.display = "block";
  cars2.style.display = "none";
  cars3.style.display = "none";
};
btnLVL2.onclick = function () {
  btnLVL2.classList.add("active");
  btnLVL1.classList.remove("active");
  btnLVL3.classList.remove("active");
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";
  cars2.style.display = "block";
  cars1.style.display = "none";
  cars3.style.display = "none";
};
btnLVL3.onclick = function () {
  btnLVL3.classList.add("active");
  btnLVL1.classList.remove("active");
  btnLVL2.classList.remove("active");
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  cars3.style.display = "block";
  cars2.style.display = "none";
  cars1.style.display = "none";
};
// Приховання та активація опції в залежності від рівня
btnLVL1.addEventListener("click", function () {
  placeSelect.value = "pos1";
  hiddenOptions.forEach(function (option) {
    option.style.display = "none";
  });
});

btnLVL2.addEventListener("click", function () {
  placeSelect.value = "pos2";
  hiddenOptions.forEach(function (option) {
    option.style.display = "block";
  });
});

btnLVL3.addEventListener("click", function () {
  placeSelect.value = "pos3";
  hiddenOptions.forEach(function (option) {
    option.style.display = "block";
  });
});
// // Додавання тексту на авто
let middleElement = document.querySelector("#car-middle");

numbers.addEventListener("input", function () {
  middleElement.textContent = numbers.value;
  let value = numbers.value;
  middleElement.textContent = value;

  middleElement.style.setProperty("--car-text", "'" + value + "'");
});