const menu = document.querySelector('#toggleMenu');
const toggleMenu = document.querySelector('#hamburger-menu');
const kleurenToggle = document.querySelectorAll('#toggleMenu .btn');
Array.from(kleurenToggle);

toggleMenu.addEventListener('mouseover', function () {
    menu.style.width = '400px';
});

menu.addEventListener('mouseleave', function () {
    menu.style.width = '0px';
})

for (index = 0; index < kleurenToggle.length; index++) {
    kleurenToggle[index].addEventListener('click', function () {
        document.body.style.backgroundColor = event.target.id;
        menu.style.width = '0px';
        document.querySelector('h1').textContent = 'Currently the background is: ' + event.target.id;
    });
};

document.addEventListener("keypress", function (event) {
    if (event.keyCode === 49) {
        document.body.style.backgroundColor = 'white';
        document.querySelector('h1').textContent = 'Currently the background is: white';
        document.querySelector('#white').checked = 'true';
    } else if (event.keyCode === 50) {
        document.body.style.backgroundColor = 'red';
        document.querySelector('h1').textContent = 'Currently the background is: red';
        document.querySelector('#red').checked = 'true';
    } else if (event.keyCode === 51) {
        document.body.style.backgroundColor = 'orange';
        document.querySelector('h1').textContent = 'Currently the background is: orange';
        document.querySelector('#orange').checked = 'true';
    } else if (event.keyCode === 52) {
        document.body.style.backgroundColor = 'purple';
        document.querySelector('h1').textContent = 'Currently the background is: purple';
        document.querySelector('#purple').checked = 'true';
    } else if (event.keyCode === 53) {
        document.body.style.backgroundColor = 'green';
        document.querySelector('h1').textContent = 'Currently the background is: green';
        document.querySelector('#green').checked = 'true';
    } else if (event.keyCode === 54) {
        document.body.style.backgroundColor = 'pink';
        document.querySelector('h1').textContent = 'Currently the background is: pink';
        document.querySelector('#pink').checked = 'true';
    }
});

