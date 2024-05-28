function generateJSON() {
    let result;
    switch (typeOfEntry.value) {
        case 'console':
            result = {
                name: inpName.value,
                year: parseInt(inpYear.value, 10),
                brand: inpBrand.value,
                type: inpType.value
            };
            break;
        case 'game':
            result = {
                title: inpName.value,
                year: parseInt(inpYear.value, 10),
                consoles: inpConsoles.value.split(', '),
                genres: inpGenres.value.split(', '),
                developers: inpDevelopers.value.split(', ')
            };
            break;
        case 'track':
            result = {
                title: inpName.value,
                year: parseInt(inpYear.value, 10),
                game: inpGame.value,
                duration: parseInt(inpDurationMin.value) * 60 + parseInt(inpDurationSec.value),
                composer: inpComposer.value,
                arranger: inpArranger.value
            };
            break;
        default:
            return;
    }
    outputField.value = inpPretty.checked ? JSON.stringify(result, null, 3) : JSON.stringify(result);
}
;