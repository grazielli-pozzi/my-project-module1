// let boardMatriz1 = [
//     [-1, 0, -1, 0, -1, 0, -1, 0],
//     [0, -1, 0, -1, 0, -1, 0, -1],
//     [-1, 0, -1, 0, -1, 0, -1, 0],
//     [0, -1, 0, -1, 0, -1, 0, -1],
//     [-1, 0, -1, 0, -1, 0, -1, 0],
//     [0, -1, 0, -1, 0, -1, 0, -1],
// ];

let boardMatrix = [];

const piecesImages = []

window.addEventListener("load", event => {
    let pieces = ``;
    let piecesDivs = ``;
    let variavel = ``;
    for (let i = 0; i < 8; i++) {
        variavel = `<div id = "fileira${i}"></div>`;
        document.querySelector(`#board`).innerHTML = variavel;
        console.log(document.querySelector(`#board`));
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0 && j % 2 === 0 && j !== 4) {
                piecesDivs += `<div index = ${i}.${j} class = "occupied possible"></div>`;
            }
            if (i % 2 === 0 && j % 2 === 0 && j === 4) {
                piecesDivs += `<div index = ${i}.${j} class = "not-occupied possible"></div>`;
            }
            if (i % 2 !== 0 && j % 2 !== 0 && j !== 3) {
                piecesDivs += `<div index = ${i}.${j} class = "occupied possible"></div>`;
            }
            if (i % 2 !== 0 && j % 2 !== 0 && j === 3) {
                piecesDivs += `<div index = ${i}.${j} class = "not-occupied possible"></div>`;
            }
            if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                piecesDivs += `<div index = ${i}.${j} class= "not-possible"></div>`;
            }
        }
        document.querySelector(`#fileira${i}`).innerHTML = piecesDivs;
        // pieces += document.querySelector(`#fileira${i}`).innerHTML;
        piecesDivs = ``;
    }
    // document.querySelector(`#board`).innerHTML = pieces;

   
    //<img src="../img/piece.jpg" alt="">

})




