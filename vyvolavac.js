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

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;

    //Počítadlo
    let pocitadlo = tazenaJmena.length;
    document.getElementById("pocitadlo").textContent = "Počet vyvolaných studentek: " + pocitadlo;


}


//Tlačítko reset
function reset() {
    while (tazenaJmena.length > 0) {
        let jmeno = tazenaJmena.pop();
        jmena.push(jmeno);
    }
    let pocitadlo = tazenaJmena.length;
    document.getElementById("pocitadlo").textContent = "Počet vyvolaných studentek: " + pocitadlo;

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = null;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = null;

}