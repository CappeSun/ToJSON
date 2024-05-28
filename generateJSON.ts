import { Console, Game, Track, ConsoleType } from "./types.js";

declare const typeOfEntry: HTMLSelectElement;
declare const inpName: HTMLInputElement;
declare const inpYear: HTMLInputElement;
declare const inpBrand : HTMLInputElement;
declare const inpType: HTMLSelectElement;
declare const inpConsoles: HTMLInputElement;
declare const inpGenres: HTMLInputElement;
declare const inpDevelopers: HTMLInputElement;
declare const inpGame: HTMLInputElement;
declare const inpDurationMin: HTMLInputElement;
declare const inpDurationSec: HTMLInputElement;
declare const inpComposer: HTMLInputElement;
declare const inpArranger: HTMLInputElement;

declare const inpPretty: HTMLInputElement;
declare const outputField: HTMLTextAreaElement;
declare const generateBtn: HTMLButtonElement;

declare interface InputFields {
  console: string[];
  game: string[];
  track: string[];
}

declare const inputFields: InputFields;

function generateJSON(): void{
	let result: Console | Game | Track;
	switch (typeOfEntry.value){
		case 'console':
			result = {
				name: inpName.value,
				year: parseInt(inpYear.value, 10),
				brand: inpBrand.value,
				type: inpType.value as ConsoleType
			}
			break;
		case 'game':
			result = {
				title: inpName.value,
				year: parseInt(inpYear.value, 10),
				consoles: inpConsoles.value.split(', '),
				genres: inpGenres.value.split(', '),
				developers: inpDevelopers.value.split(', ')
			}
			break;
		case 'track':
			result = {
				title: inpName.value,
				year: parseInt(inpYear.value, 10),
				game: inpGame.value,
				duration: parseInt(inpDurationMin.value) * 60 + parseInt(inpDurationSec.value),
				composer: inpComposer.value,
				arranger: inpArranger.value
			}
			break;
		default:
			return;
	}

	outputField.value = inpPretty.checked ? JSON.stringify(result, null, 3) : JSON.stringify(result);
}