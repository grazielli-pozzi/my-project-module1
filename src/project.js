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
    let boardMatrixPerLine = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0 && j % 2 === 0) {
                pieces = `<div index = ${i}.${j} class= occupied><img src="../img/piece.jpg" alt=""></div>`;
                piecesDivs += `<div index = ${i}.${j} class= occupied><img src="../img/piece.jpg" alt=""></div>`;
            }
            if (j % 2 !== 0 && j % 2 !== 0) {
                pieces = `<div index = ${i}.${j} class= occupied><img src="../img/piece.jpg" alt=""></div>`;
                piecesDivs += `<div index = ${i}.${j} class= occupied><img src="../img/piece.jpg" alt=""></div>`;
            } else {
                pieces = `<div index = ${i}.${j} class= empty></div>`;
                piecesDivs += `<div index = ${i}.${j} class= empty></div>`;
            }
            boardMatrixPerLine.push(pieces);
            pieces = 0;
        }
        boardMatrix.push(boardMatrixPerLine);
        boardMatrixPerLine = [];
    }
    document.querySelector("#board").innerHTML = piecesDivs;



})




