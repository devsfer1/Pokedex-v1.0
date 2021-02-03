const checkbox = document.getElementById('checkbox');
const title = document.getElementById('title');
const pokeName = document.getElementsByClassName('pokemon-name');

checkbox.addEventListener('change' ,() => {
    // change the theme of website
    document.body.classList.toggle('dark');
    title.classList.toggle('white');

    for(let i = 0; i < pokeName.length; i++) {
        pokeName[i].classList.toggle('white');
    }
    
});