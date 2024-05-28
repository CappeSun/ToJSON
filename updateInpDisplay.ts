function updateInpDisplay() {
	inpBrand.style.display = ["console"].includes(typeOfEntry.value) ? "" : "none";
	inpType.style.display = ["console"].includes(typeOfEntry.value) ? "" : "none";
	inpConsoles.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpGenres.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpDevelopers.style.display = ["game"].includes(typeOfEntry.value) ? "" : "none";
	inpGame.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpDurationMin.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpDurationSec.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpComposer.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";
	inpArranger.style.display = ["track"].includes(typeOfEntry.value) ? "" : "none";

	inpName.placeholder = {console: "Name (N3DS...)", game: "Name (Elden Ring...)", track: "Name (Waluigi Pinball...)"}[typeOfEntry.value as string] as string;
	inpYear.placeholder = {console: "Year (2014...)", game: "Year (2022...)", track: "Year (2005...)"}[typeOfEntry.value as string] as string;

	inputFields[typeOfEntry.value as keyof InputFields].forEach((fieldId) => {
		if (["inpType"].includes(fieldId))
		(document.getElementById(fieldId) as HTMLSelectElement).selectedIndex = 0;
		else (document.getElementById(fieldId) as HTMLInputElement).value = "";
	});
}