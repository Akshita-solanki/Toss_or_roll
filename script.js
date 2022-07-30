

function coin() {

    const coinss = ["images/heads.svg", "images/tails.svg"];

    let randomNumber1 = Math.floor(Math.random() * 2);
    document.querySelector(".coin-img").setAttribute("src", coinss[randomNumber1]);
    h1 = document.querySelector(".header")
    if (randomNumber1 == 0) {
        h1.innerHTML = "Its heads !"
    }
    else {
        h1.innerHTML = "Its tails !"
    }
    console.log(randomNumber1);
}
coin();

function roll() {
    const faces = ["images/one.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png"];
    let randomNumber1 = Math.floor(Math.random() * 6);
    document.querySelector(".dice-img").setAttribute("src", faces[randomNumber1]);
    Numberr = randomNumber1 + 1
    h1 = document.querySelector(".header")
    h1.innerHTML = "Its " + Numberr + " !";
    console.log(randomNumber1);
}
roll();

