/*Theme JS*/
const lightModeLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACDElEQVRoge2ZyUoDQRCGP4KjMQTE4IgHzSO5IXklt8dQvOsbaLwpajxojAqevYg7KBgP08GhM8nY6ww6H9Rl0tVVP71XoKCgIGv2gaOsk7BBV5hTSq4D+KIQkjdUhNSAsqtEEgiASdud1oBXoAWEir46iz0EToFHYELRdyhjwJlI6Bw1MU3gQKF9KGJ0RcxAwVc5wCUwYzuAFOPCUYy+QLbFeBORFPAMOxtAGf2pa0QoAr8lBB0FGsAO0AZehLXFt4ZoE2caeBd9ehPRowxMSd+WgVt+dqpBdgMsSb5T+N3eEykBG6QLkG2dnB3Km6iL6NlaBvkmsoy+iJ4tes9aYpRovpsKuaV/A/BKIyEpXVsxScR0ock7jwmZTq8O9kakbTOxKnA3JFhTav9kUciTQR7KU6ur2N4V1vO4wt6IXJokYrrYjw394xiVjEyF7Br6x9mz2JcyAXDNHzgQITpLTER8AfPesx6Azs23Z6sZ5DuQEtGVXHUk1sjBNX4EqEjfFvndmukAC5LvBA4qJmmEwAlwT/+rLiC6AG4TnQ3Pwi6ALfGbnHAVeMDzUzdefDghGhlTAqKCXBdPxQeXJRsfdbO+QK7qTs7FVIjqvjpDr/qPVVxMCxhX8E1lDvjEbxG7BXwAs4q+qdTRqzvpCEHEqmv4OUNXiBKZn6q2KITkDRunchqH5OetX1Dwb/kGswRMQRxFytgAAAAASUVORK5CYII=';
const darkModeLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADYElEQVRoge3az2/URRjH8ZcoLY1FBfwV9WIsYgxiRajaGlNjPHn1P1Djhbv/gQdT0gsIeFLPCpooxBiJxhiRgxqJAiYaojGpGkCo8QetLodnvvkul6UzDrsH951s5rKf73xmv8/MPPPMMmTIkF5c1Yc+RjGNWWzBJtyKcXTwOxZwAsfwAY5gqQ/eVsRW7MNZYTjncwa7cW/fXXcxiUMuNfY55vC0eCvrsBrXYgIz2IE38WuXbqHP3sEY5rGcTJzHS7gn4xlP4lTS/4EXKnu8LBvxZTJwQfz66zL0I9iLf8Xc2I3bKnu8LFPacPgG92fqN+CjpP8eD1d1t0KmsJhMHBAxn8NNYvAdvIvrq7pbIRu1b+JVXJ2pH8fRpH9DhFffGdPOiQPyByHpOngH19Szlse8dk7khhM8m/TfyVsUqjIpVpYl+RMb7hDzahkPVvSVTbPZzRXq9yX9nmqOCtiaTJxTFhITYp/5TaxY1ViV+f3nU/uKyKFyeU6kJq+LFW8gjGoTwJy0o2EVfkz6krlVjce1CWAJjyb9V9UcdZETWrOpPVzY1yOp/bhQ35OcgTThcKSwr6nUflKo70nOQO5O7cnCvpp59XWhvic5A7k5tT8V9rU+tacL9dX4W0zW0uTuz6Qfq+aoi9x95L/QuZIPzxnIYmrXFvbVbKAbCvU9yRnIL6ktPYKeSe3AB9KsVpsK+zqe2s2F+p7kDKTZkUvP1EdTO12or8asmLBfFOpnkv5YNUeFjIo4r5E0Tlb0hbyz9j+4E9vwF97P7Ksjar4z4nR4KFNflQdEEe28dqfO4S5xsDqnzRSqkFv9WBDJ32axw7+XqT8rzuzTuE5UUAbGFm3xoSTWu4sP2yr6KmKniPnjotCWyzPaEmlJiFZjjViGO3hLWYFtf9IfLNRXY0KkLR28VmBmHJ8l/X4DKpk2bBcrWAdvyw+zG7VF7IO4oaq7TLZr38wJsUTnsB4fJv0psc8MjAlRXemI1WxeXpY7IiqPzUXPHtxe2eOKWSPKqEvaq7c5eReaxVdvV+J6+j68iKe6nt9cO3+Kb/GDuJZeLc43t4iQnMVjYu7AzyKtGSiTeFkUG3Kvp09jl4y32Y8/DIzgITwh3lbzh4G1wvSiSH1OijPPYVE7W+6DtyFD/jdcBBS/3hTmRptyAAAAAElFTkSuQmCC';
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
    const img = document.getElementById('toggle-theme-button');
    if (img.src === lightModeLogo) {
        lightMode();
        img.src = darkModeLogo;
    } else if (img.src === darkModeLogo) {
        darkMode();
        img.src = lightModeLogo;
    }
}
function initializeThemeSwitch() {
    const img = document.getElementById('toggle-theme-button');
    img.style.display = 'inline-block';
    img.onclick = toggleTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode();
        img.src = lightModeLogo;
    }
    else {
        img.src = darkModeLogo;
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
