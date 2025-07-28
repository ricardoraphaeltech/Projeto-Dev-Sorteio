const buttonSortear = document.querySelector(".button-sortear")

function getRandomNumber() {
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const result = document.querySelector(".campo-resultado")
    
    
    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR do que o valor máximo!");
    } else {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        result.innerHTML = `O número sorteado é: ${number}`;
        result.style.color = "#fff";
    }
}

buttonSortear.addEventListener('click', getRandomNumber)