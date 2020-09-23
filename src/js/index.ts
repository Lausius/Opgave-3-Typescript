let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let operator: HTMLSelectElement = <HTMLSelectElement> document.getElementById("dropdown")
let doItBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("doItBtn");
let textInput: HTMLInputElement = <HTMLInputElement> document.getElementById("inputText");

function changeString() {
    element.innerHTML = stringOperations(operator.value, textInput.value);
}

function stringOperations(operation: string, input: string) {
    switch(operation) {
        case "Upper Case":
            return input.toUpperCase();
        case "Lower Case":
            return input.toLowerCase();
    }
}

doItBtn.addEventListener("click", changeString);