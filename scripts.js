/*
1. Зробити відкриття модального вікна - готово
    - Зробити клік по кнопці "Правила"
    - Додати клас "modal--isActive" блоку div.modal
2. Зробити закрити модального вікна - готово
    - Прибрати клас "modal--isActive" блоку div.modal
3. При обиранні фігури - готово
    - Додати клас "gameContent--isActive" блоку div.gameContent
<!-- GAME CHOICES-->
    - при виборі бумаги - gameContent__gameChoice gameContent__gameChoice--isPaper gameContent__gameChoice--isActive
    - при виборі камню - gameContent__gameChoice gameContent__gameChoice--isRock gameContent__gameChoice--isActive
    - при виборі ножиць - gameContent__gameChoice gameContent__gameChoice--isScissors || gameContent__gameChoice--isActive ||

    - gameContent__gameChoice gameContent__gameChoice--isComputer 
    - Запустити таймер
    - Після закінчення таймеру
        - Обрати випадкову фігуру
            - Додати клас, що вибрав комп'ютер {{gameContent__gameChoice--isScissors}}
            - gameContent__gameChoiceImage прописати src шлях до картинки
4. Після завершення гри
    - Додати клас "gameContent--isActive gameContent--revealResult" блоку div.gameContent
    - gameContent__resultText прописати текст
        - Draw
        - Win
        - Lose
    - header__scoreNumber додавати\віднімати очки
5. Після перезапуску гри
    - Видаляти всі класи блоку div.gameContent
*/

// Modal functionality
console.dir();
let btnOpenModal = document.querySelector(".container__rules");

// Зони для закриття модального вікна
let btnClosemodal = document.querySelector(".modal__closeIcon");
let modalOverlay = document.querySelector(".modal__overlay");

btnOpenModal.onclick = function () {
  let modalWindow = document.querySelector(".modal");
  modalWindow.classList.add("modal--isActive");
  // modalWindow.className = "modal modal--isActive";
};
btnClosemodal.onclick = closeModal;
modalOverlay.onclick = closeModal;
function closeModal() {
  let modalWindow = document.querySelector(".modal");
  modalWindow.classList.remove("modal--isActive");
  // modalWindow.className = "modal";
}
/*
Робимо клік по фігурам
*/
// Обираємо фігури
let gameChoicePaper = document.querySelector(".gameContent__gameChoice--isPaper");
let gameChoiceScissors = document.querySelector(".gameContent__gameChoice--isScissors");
let gameChoiceRock = document.querySelector(".gameContent__gameChoice--isRock");
let playerChoice = 0;
let computerChoice = 0;
let gameContent = document.querySelector(".gameContent");
let gameScore = 0;
// Функціонал кліків по кнопкам
//  Робимо клік по бумазі
gameChoicePaper.onclick = function (event) {
    console.dir(event);
  // target - ціль
  startChoice(event.target);
  playerChoice = 1;
};
//  Робимо клік по ножицям
gameChoiceScissors.onclick = function (event) {
    console.dir(event);
  startChoice(event.target);
  playerChoice = 2;
};
//  Робимо клік по камню
gameChoiceRock.onclick = function (event) {
    console.dir(event);
  startChoice(event.target);
  playerChoice = 3;
};
//  Cтарт гри
function startChoice(element) {
  gameContent.classList.add("gameContent--isActive");
  element.classList.add("gameContent__gameChoice--isActive");
  
// Запускаємо таймер
  let countdownText = document.querySelector(".gameContent__countdownText"); 
  let timer = 3;
  countdownText.innerText = timer; //Запускаю таймер негайно без затримки
  let timerID = setInterval(function() { 
    timer--; //timer = timer - 1
    countdownText.innerText = timer; 
    if(timer < 0) { // проблема з цифрами після зміни == на < зникла
      countdownText.innerText = "";
      clearInterval(timerID);
      finish();     
    }
  }, 1000);
}
// Закінчення гри
function finish() {
  console.dir("end");

  choiceComputer();
  result();
  gameContent.classList.add("gameContent--revealResult");
}
// Визначення переможця
function result() {
    
    // win
    // lose
    // draw
    // 1 - isPaper
    // 2 - isScissors
    // 3 - isRock
    // 1>3 || 2>1 || 3>2

    let resultText = document.querySelector(".gameContent__resultText");
    if(playerChoice == computerChoice) {
        resultText.innerText = "Draw";
    } else if(
        (playerChoice == 1 && computerChoice == 3) ||
        (playerChoice == 2 && computerChoice == 1) ||
        (playerChoice == 3 && computerChoice == 2)
    ) {
        resultText.innerText = "You Win";
        changeScore(1);
    } else {
        resultText.innerText = "Lose";
        changeScore(-1);
    }
}
// Рахунок
function changeScore(score) {
/**
 * 1. Якщо скор менше 0, і очки 0, то нічого не робити
 */
    if(score < 0 && gameScore == 0) {
        return 0;
    }
    gameScore = gameScore + score; //1 + -1 = 0
    let scoreBlockText = document.querySelector(".header__scoreNumber");
    scoreBlockText.innerText = gameScore;
}

// Функція вибору фігури комп'ютером
function choiceComputer() {
    computerChoice = random(1, 3);
    let image = "";
    let className = "";

    /*
Якщо choice = 1
- image = "images/icon-paper.svg"
- className = "gameContent__gameChoice--isPaper"
- gameChoiceComputer.classList.add(className);
- замінити картинку .gameContent__gameChoiceImage = image
    */

// if(choice == 1) {
//     image = "images/icon-paper.svg";
//     className = "gameContent__gameChoice--isPaper";
// } else if(choice == 2) {
//     image = "images/icon-scissors.svg";
//     className = "gameContent__gameChoice--isScissors";
// } else if(choice == 3) {
//     image = "images/icon-rock.svg";
//     className = "gameContent__gameChoice--isRock";
// }

switch(computerChoice) {
    case 1:
        image = "images/icon-paper.svg";
        className = "gameContent__gameChoice--isPaper";
        break;
    case 2:
        image = "images/icon-scissors.svg";
        className = "gameContent__gameChoice--isScissors";
        break;
    case 3:
        image = "images/icon-rock.svg";
        className = "gameContent__gameChoice--isRock";
        break;
}
// // Міняємо клас комп'ютера
  let gameChoiceComputer = document.querySelector(".gameContent__gameChoice--isComputer");
  gameChoiceComputer.classList.add(className);
//   Міняємо картинку
  let gameChoiceComputerImage = document.querySelector(
    ".gameContent__gameChoiceImage"
  );
  gameChoiceComputerImage.src = image;
}
// Рандомний вибір фігури опонента
function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Функція перезапуску гри
let reloadButton = document.querySelector(".gameContent__resultButton");
    reloadButton.onclick = reload;

function reload() {
    gameContent.classList.remove("gameContent--isActive", "gameContent--revealResult");
    let activeElement = document.querySelector(".gameContent__gameChoice--isActive");
    activeElement.classList.remove("gameContent__gameChoice--isActive");
// Очищуємо вибір опонента
    let gameChoiceComputerImage = document.querySelector(".gameContent__gameChoiceImage");
    gameChoiceComputerImage.src = "";

    let gameChoiceComputer = document.querySelector(".gameContent__gameChoice--isComputer");
//   gameChoiceComputer.classList.add(className);
  gameChoiceComputer.className = "gameContent__gameChoice gameContent__gameChoice--isComputer";
  let countdownText = document.querySelector(".gameContent__countdownText");
  countdownText.innerText = 3;
}
