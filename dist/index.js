const typeOfEntry = document.getElementById('typeOfEntry');
const inpName = document.getElementById('inpName');
const inpYear = document.getElementById('inpYear');
const inpBrand = document.getElementById('inpBrand');
const inpType = document.getElementById('inpType');
const inpConsoles = document.getElementById('inpConsoles');
const inpGenres = document.getElementById('inpGenres');
const inpDevelopers = document.getElementById('inpDevelopers');
const inpGame = document.getElementById('inpGame');
const inpDurationMin = document.getElementById('inpDurationMin');
const inpDurationSec = document.getElementById('inpDurationSec');
const inpComposer = document.getElementById('inpComposer');
const inpArranger = document.getElementById('inpArranger');
const outputField = document.getElementById('outputField');
updateInpDisplay();
function updateInpDisplay() {
    inpBrand.style.display = ['console'].includes(typeOfEntry.value) ? '' : 'none';
    inpType.style.display = ['console'].includes(typeOfEntry.value) ? '' : 'none';
    inpConsoles.style.display = ['game'].includes(typeOfEntry.value) ? '' : 'none';
    inpGenres.style.display = ['game'].includes(typeOfEntry.value) ? '' : 'none';
    inpDevelopers.style.display = ['game'].includes(typeOfEntry.value) ? '' : 'none';
    inpGame.style.display = ['track'].includes(typeOfEntry.value) ? '' : 'none';
    inpDurationMin.style.display = ['track'].includes(typeOfEntry.value) ? '' : 'none';
    inpDurationSec.style.display = ['track'].includes(typeOfEntry.value) ? '' : 'none';
    inpComposer.style.display = ['track'].includes(typeOfEntry.value) ? '' : 'none';
    inpArranger.style.display = ['track'].includes(typeOfEntry.value) ? '' : 'none';
    inpName.placeholder = { console: 'Name (N3DS...)', game: 'Name (Elden Ring...)', track: 'Name (Waluigi Pinball...)' }[typeOfEntry.value];
    inpYear.placeholder = { console: 'Year (2014...)', game: 'Year (2022...)', track: 'Year (2005...)' }[typeOfEntry.value];
}
typeOfEntry.addEventListener('change', () => updateInpDisplay());
let toJSON = {};
outputField.textContent = JSON.stringify(toJSON);
export {};
