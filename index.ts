import {} from "./types.js";		// TypeScript cries if this isn't here

const typeOfEntry = document.getElementById("typeOfEntry") as HTMLSelectElement;
const inpName = document.getElementById("inpName") as HTMLInputElement;
const inpYear = document.getElementById("inpYear") as HTMLInputElement;
const inpBrand = document.getElementById("inpBrand") as HTMLInputElement;
const inpType = document.getElementById("inpType") as HTMLSelectElement;
const inpConsoles = document.getElementById("inpConsoles") as HTMLInputElement;
const inpGenres = document.getElementById("inpGenres") as HTMLInputElement;
const inpDevelopers = document.getElementById("inpDevelopers") as HTMLInputElement;
const inpGame = document.getElementById("inpGame") as HTMLInputElement;
const inpDurationMin = document.getElementById("inpDurationMin") as HTMLInputElement;
const inpDurationSec = document.getElementById("inpDurationSec") as HTMLInputElement;
const inpComposer = document.getElementById("inpComposer") as HTMLInputElement;
const inpArranger = document.getElementById("inpArranger") as HTMLInputElement;

const inpPretty = document.getElementById("inpPretty") as HTMLInputElement;
const outputField = document.getElementById("outputField") as HTMLTextAreaElement;
const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;

declare function updateInpDisplay(): void;
declare function generateJSON(): void;

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

updateInpDisplay();		// Init fields on page load or reload

/*generateBtn.addEventListener("click", () => {
  const selectedValue = typeOfEntry.value as keyof InputFields;
  const fieldsToShow = inputFields[selectedValue];
  const result: Record<string, string | number> = {};

  fieldsToShow.forEach((field) => {
	const input = document.getElementById(field) as HTMLInputElement;
	let value: string | number = input.value;

	// Convert to int if the input is a year, duration, or other number type
	if (
	  (field as string).includes("Year") ||
	  (field as string).includes("DurationMin") ||
	  (field as string).includes("DurationSec")
	) {
	  value = parseInt(value, 10);
	}

	result[field] = value;
  });

  if (selectedValue === "console") {
	result["type"] = inpType.value;
  }

  console.log(result);

  outputField.value = JSON.stringify(result, null, 2);
});*/

generateBtn.addEventListener('click', () => generateJSON());		// Generate JSON on button click

inpPretty.addEventListener('change', () => generateJSON());		// Also generate JSON on pretty print update

typeOfEntry.addEventListener('change', () => updateInpDisplay());		// Update fields on changed entry type