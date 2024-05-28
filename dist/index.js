const typeOfEntry = document.getElementById("typeOfEntry");
const inpName = document.getElementById("inpName");
const inpYear = document.getElementById("inpYear");
const inpBrand = document.getElementById("inpBrand");
const inpType = document.getElementById("inpType");
const inpConsoles = document.getElementById("inpConsoles");
const inpGenres = document.getElementById("inpGenres");
const inpDevelopers = document.getElementById("inpDevelopers");
const inpGame = document.getElementById("inpGame");
const inpDurationMin = document.getElementById("inpDurationMin");
const inpDurationSec = document.getElementById("inpDurationSec");
const inpComposer = document.getElementById("inpComposer");
const inpArranger = document.getElementById("inpArranger");
const outputField = document.getElementById("outputField");
const inputFields = {
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
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
    const selectedValue = typeOfEntry.value;
    const fieldsToShow = inputFields[selectedValue];
    const result = {};
    fieldsToShow.forEach((field) => {
        const input = document.getElementById(field);
        let value = input.value;
        // Convert to int if the input is a year, duration, or other number type
        if (field.includes("Year") ||
            field.includes("DurationMin") ||
            field.includes("DurationSec")) {
            value = parseInt(value, 10);
        }
        result[field] = value;
    });
    if (selectedValue === "console") {
        result["type"] = inpType.value;
    }
    console.log(result);
    outputField.value = JSON.stringify(result, null, 2);
});
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
    inpName.placeholder = { console: "Name (N3DS...)", game: "Name (Elden Ring...)", track: "Name (Waluigi Pinball...)" }[typeOfEntry.value];
    inpYear.placeholder = { console: "Year (2014...)", game: "Year (2022...)", track: "Year (2005...)" }[typeOfEntry.value];
    inputFields[typeOfEntry.value].forEach((fieldId) => {
        if (["inpType"].includes(fieldId))
            document.getElementById(fieldId).selectedIndex = 0;
        else
            document.getElementById(fieldId).value = "";
    });
}
typeOfEntry.addEventListener("change", () => updateInpDisplay());