import {Console, Game, Track} from './types.js';

const typeOfEntry = document.getElementById('typeOfEntry') as HTMLSelectElement;
const inpName = document.getElementById('inpName') as HTMLInputElement;
const inpYear = document.getElementById('inpYear') as HTMLInputElement;
const inpBrand = document.getElementById('inpBrand') as HTMLInputElement;
const inpType = document.getElementById('inpType') as HTMLSelectElement;
const inpConsoles = document.getElementById('inpConsoles') as HTMLInputElement;
const inpGenres = document.getElementById('inpGenres') as HTMLInputElement;
const inpDevelopers = document.getElementById('inpDevelopers') as HTMLInputElement;
const inpGame = document.getElementById('inpGame') as HTMLInputElement;
const inpDurationMin = document.getElementById('inpDurationMin') as HTMLInputElement;
const inpDurationSec = document.getElementById('inpDurationSec') as HTMLInputElement;
const inpComposer = document.getElementById('inpComposer') as HTMLInputElement;
const inpArranger = document.getElementById('inpArranger') as HTMLInputElement;
const outputField = document.getElementById('outputField') as HTMLParagraphElement;

interface InputFields {
	console: string[];
	game: string[];
	track: string[];
}
  
const inputFields: InputFields = {
	console: ["inpName", "inpYear", "inpBrand", "inpType"],
	game: ["inpName", "inpYear", "inpConsoles", "inpGenres", "inpDevelopers"],
	track: [
		"inpName",
		"inpYear",
		"inpGame",
		"inpDurationMin",
		"inpDurationSec",
		"inpComposer",
		"inpArranger",
	],
};

updateInpDisplay();

const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;

generateBtn.addEventListener("click", () => {
  const selectedValue = typeOfEntry.value as keyof InputFields;
  const fieldsToShow = inputFields[selectedValue];
  const result: Record<string, string | number> = {};

  fieldsToShow.forEach((field) => {
    const input = document.getElementById(field) as HTMLInputElement;
    let value: string | number = input.value;

    // Convert to int if the input isa year, duration, or other number type
    if ((field as string).includes("Year") || (field as string).includes("DurationMin") || (field as string).includes("DurationSec")) {
      value = parseInt(value, 10);
    }

    result[field] = value;
  });

  if (selectedValue === "console") {
    result["type"] = inpType.value;
  }

  console.log(result);
});

let toJSON = {};

// outputField.textContent = JSON.stringify(toJSON);

function updateInpDisplay(){
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

	inpName.placeholder = {console: 'Name (N3DS...)', game: 'Name (Elden Ring...)', track: 'Name (Waluigi Pinball...)'}[typeOfEntry.value as string] as string;
	inpYear.placeholder = {console: 'Year (2014...)', game: 'Year (2022...)', track: 'Year (2005...)'}[typeOfEntry.value as string] as string;

	inputFields[typeOfEntry.value as keyof InputFields].forEach((fieldId) =>{
		if (['inpType'].includes(fieldId))
			(document.getElementById(fieldId) as HTMLSelectElement).selectedIndex = 0;
		else
			(document.getElementById(fieldId) as HTMLInputElement).value = '';
	});
}

typeOfEntry.addEventListener('change', () => updateInpDisplay());