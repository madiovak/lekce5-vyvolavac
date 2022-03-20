let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním

    // Výherní jméno přidáváme nakonec
    //tazenaJmena.push(vyherniJmeno);

    //Výherní jméno přidáváme na začátek
    tazenaJmena.unshift(vyherniJmeno);

    nastavTextContent("vyherka", vyherniJmeno);
    nastavTextContent("seznam", tazenaJmena);
    nastavTextContent("pocitadlo", "Počet vyvolaných studentek: " + tazenaJmena.length);

}


//Tlačítko reset
function reset() {
    while (tazenaJmena.length > 0) {
        jmena.push(tazenaJmena.pop());
    }

    nastavTextContent("pocitadlo", "Počet vyvolaných studentek: " + tazenaJmena.length);
    nastavTextContent("vyherka", vyherce = null);
    nastavTextContent("seznam", seznam = null);
}

function nastavTextContent(id, obsah) {
    let element = document.getElementById(id);
    element.textContent = obsah;

}