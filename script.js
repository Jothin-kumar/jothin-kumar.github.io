/*Theme JS*/
function lightMode() {
    document.querySelectorAll('.dark-mode').forEach(function (element) {
        element.classList.remove('dark-mode');
        element.classList.add('light-mode');
    });
}
function darkMode() {
    document.querySelectorAll('.light-mode').forEach(function (element) {
        element.classList.remove('light-mode');
        element.classList.add('dark-mode');
    });
}
function toggleTheme() {
    const button = document.getElementById('toggle-theme-button');
    if (button.innerText === 'Light mode') {
        lightMode();
        button.innerText = 'Dark mode';
    } else if (button.innerText === 'Dark mode') {
        darkMode();
        button.innerText = 'Light mode';
    }
}
function initializeThemeSwitch() {
    const button = document.getElementById('toggle-theme-button');
    button.style.display = 'inline-block';
    button.onclick = toggleTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        lightMode();
        button.innerText = 'Dark mode';
    }
    else {
        button.innerText = 'Light mode';
    }
}
/*Hobbies display JS*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function displayHobbies() {
    const hobbiesElements = document.getElementsByClassName('hobby');
    const hobbiesContainer = document.getElementById('hobbies-container');
    while (true) {
        for (let i = 0; i < hobbiesElements.length; i++) {
            let hobby = 'I am a ';
            for (const chr of hobbiesElements[i].innerText + '.') {
                await sleep(50);
                hobbiesContainer.innerHTML = hobby;
                hobby += chr;
            }
            await sleep(2000);
        }
    }
}
function initialize() {
    initializeThemeSwitch();
    displayHobbies();
}
window.onload = initialize;
