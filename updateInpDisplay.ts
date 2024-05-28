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
declare const outputField: HTMLTextAreaElement;

declare interface InputFields {
  console: string[];
  game: string[];
  track: string[];
}

declare const inputFields: InputFields;

function updateInpDisplay(): void{
	inpBrand.style.display = ["console"].includes(typeOfEntry.value) ? "" : "none";		// Select which fields are displayed with which types of entry
	inpType.style.display = ["console"].includes(typeOfEntry.value) ? "" : "none";
	inpConsoles.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpGenres.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpDevelopers.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpGame.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpDurationMin.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpDurationSec.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpComposer.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpArranger.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";

	inpName.placeholder = {console: "Name (N3DS...)", game: "Title (Elden Ring...)", track: "Title (Waluigi Pinball...)"}[typeOfEntry.value as string] as string;		// Select which placeholders to show with what type of entry
	inpYear.placeholder = {console: "Year (2014...)", game: "Year (2022...)", track: "Year (2005...)"}[typeOfEntry.value as string] as string;

	inputFields[typeOfEntry.value as keyof InputFields].forEach((fieldId) =>{
		if (["inpType"].includes(fieldId))		// Select which inputs should be treated as <select>
			(document.getElementById(fieldId) as HTMLSelectElement).selectedIndex = 0;
		else
			(document.getElementById(fieldId) as HTMLInputElement).value = "";
	});
}