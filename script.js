let BtnOn = document.querySelector('.btn-on');
let BtnOff = document.querySelector('.btn-off');
let Menu = document.querySelector('.menu');

BtnOn.onclick = () => {
    BtnOn.style.display = 'none';
    BtnOn.style.transform = "translateX(350px)";
    BtnOff.style.display = 'block';
    Menu.style.transform = "translateX(0)";
    Menu.style.transition = "1s";
    Menu.style.border = "2px solid #03e886";
    Menu.style.borderBottom = "3px solid #03e886";
}

BtnOff.onclick = () => {
    BtnOff.style.display = 'none';
    BtnOn.style.transform = "translateX(0px)";
    BtnOn.style.display = 'block';
    Menu.style.transform = "translateX(-100%)";
    Menu.style.transition = "1s";
    Menu.style.border = 'none';
}

