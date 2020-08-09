function generate_color(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}

function changing_bg_color(){
    let colorBg = document.getElementById('color-overlay');
    colorBg.style.backgroundColor = generate_color();
}

function changeBgText() {
    let textBg = document.getElementById("text-bg");
    if (textBg.innerHTML == "ON THE FLOOR BABY")
        textBg.innerHTML = "HIT IT HARD BABY";
    else if (textBg.innerHTML == "HIT IT HARD BABY")
        textBg.innerHTML = "ROCK THE PARTY BABY";
    else if (textBg.innerHTML == "ROCK THE PARTY BABY")
        textBg.innerHTML = "ON THE FLOOR BABY";
}

function check() {
    // generate_color();
    changing_bg_color();
    changeBgText();
}
setInterval(check,555);