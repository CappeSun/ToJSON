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

const typeOfEntry = document.getElementById("typeOfEntry") as HTMLSelectElement;
const inpType = document.getElementById("inpType") as HTMLSelectElement;

typeOfEntry.addEventListener("change", () => {
  const selectedValue = typeOfEntry.value as keyof InputFields;
  const fieldsToShow = inputFields[selectedValue];

  document.querySelectorAll("input, select").forEach((input) => {
    (input as HTMLElement).style.display = "none";
  });

  inpType.style.display = "none";

  if (selectedValue) {
    fieldsToShow.forEach((field) => {
      const input = document.getElementById(field) as HTMLElement;
      if (input) {
        input.style.display = "block";
      }
    });

    if (selectedValue === "console") {
      inpType.innerHTML = "";
      ["home", "handheld", "hybrid", "vr"].forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        inpType.appendChild(optionElement);
      });
      inpType.style.display = "block";
    }
  }
});

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