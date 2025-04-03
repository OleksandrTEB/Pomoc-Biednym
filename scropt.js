const display = document.querySelector('.calculator-screen'); // Wyświetlacz
const buttons = document.querySelectorAll(".calculator-keys>button"); // Przyciski

let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = []; // Liczby i operatory
let cacheValue = ""; // Bieżąca wartość
let currentOperator = null; // Bieżący operator

// Nasłuchiwacze zdarzeń
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        button.addEventListener('click', (e) => {
            if (cacheValue !== "") {
                cache.push(parseFloat(cacheValue)); // Dodaj liczbę
                cacheValue = ""; // Resetuj
            }
            currentOperator = operator;
            cache.push(currentOperator); // Dodaj operator
            clearDisplay(); // Czyść wyświetlacz
        });
    } else if(button.classList.contains('decimal')) {

    } else if(button.classList.contains('all-clear')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay(); // Czyść
            cache = [];
            currentOperator = null;
        });
    } else if(button.classList.contains('equal-sign')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            if (cacheValue !== "") {
                cache.push(parseFloat(cacheValue)); // Dodaj liczbę
                cacheValue = ""; // Resetuj
            }
            equal(); // Oblicz wynik
        });
    } else {
        buttonNum.push(button);
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value); // Dodaj do wyświetlacza
            console.log(e.target.value);
        });
    }
});

function setDisplayValue(value) {
    display.innerText += value; // Aktualizuj wyświetlacz
    console.log("value:" + value);
    cacheValue += value; // Dodaj do cacheValue
}

function clearDisplay() {
    display.innerText = ""; // Czyść wyświetlacz
    cacheValue = ""; // Resetuj cacheValue
}
// Funkcja równa się
function equal() {
    if (cache.length !== "") {
        let pierwasza_liczba = cache[0];
        let operator = cache[1];
        let druga_liczba = cache[2];
        // Przechwywuje wynik    
        let sum; 
        clearDisplay();
        if(operator == '+'){
            sum = pierwasza_liczba + druga_liczba;   
        } else if(operator == '-'){
            sum = pierwasza_liczba - druga_liczba;
            } else if(operator == '*'){
                sum = pierwasza_liczba * druga_liczba;
                } else if(operator == '/'){
                    sum = pierwasza_liczba / druga_liczba;
                    }
        // Wyświetla wynik
        setDisplayValue(sum);
        console.log(pierwasza_liczba,operator,druga_liczba)
    }
}
function więcej() {
    if (pierwasza_liczba && operator && druga_liczba && innerText) {
        
    }
}