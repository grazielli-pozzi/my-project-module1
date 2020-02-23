let boardMatrix = [];

const piecesImages = [];

window.addEventListener("load", event => {
    let piecesDivs = ``;
    let variavel = ``;
    for (let i = 0; i < 8; i++) {
        variavel = `<div id = "fileira${i}"></div>`;
        document.querySelector(`#board`).innerHTML += variavel;
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0 && j % 2 === 0 && i !== 4 && i < 3) {
                piecesDivs += `
                    <div index = ${i}.${j} class = "space possible">
                        <div class = "piece team-1"></div>
                    </div>`;
            }
            if (i % 2 === 0 && j % 2 === 0 && i !== 4 && i === 6) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible">
                <div class = "piece team-2"></div>
                </div>`;
            }
            if (i % 2 === 0 && j % 2 === 0 && i === 4) {
                piecesDivs += `<div index = ${i}.${j} class = "space not-occupied possible"></div>`;
            }
            if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i > 4) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible">
                <div class = "piece team-2"></div>
                </div>`;
            }
            if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i === 1) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible">
                <div class = "piece team-1"></div></div>`;
            }
            if (i % 2 !== 0 && j % 2 !== 0 && i === 3) {
                piecesDivs += `<div index = ${i}.${j} class = "space not-occupied possible"></div>`;
            }
            if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                piecesDivs += `<div index = ${i}.${j} class= "space not-possible"></div>`;
            }
        }
        document.querySelector(`#fileira${i}`).innerHTML = piecesDivs;
        piecesDivs = ``;
    }
    let positionSelected1
    let positionSelected2
    let possibilities = [];
    let positionSelected1A
    let positionSelected2A

    document.querySelectorAll("div.piece").forEach(piece => {
        piece.addEventListener('click', event => {
            let identificador = piece.parentNode.getAttribute("index");
            let index = identificador.split(".");
            let possiblesPositionsI
            let possiblesPositionsJ = [];
            let i = parseInt(index[0]);
            let j = parseInt(index[1]);
            // let myPiece = piece.children[0];
            let team = piece.getAttribute("class");
            //Acessando time 1
            if (team === "piece team-1") {
                if (j > 0 && j < 7) {
                    possiblesPositionsI = i + 1;
                    possiblesPositionsJ = [j + 1, j - 1];
                } else if (j === 0) {
                    possiblesPositionsI = i + 1;
                    possiblesPositionsJ = [j + 1];
                } else {
                    possiblesPositionsI = i + 1;
                    possiblesPositionsJ = [j - 1];
                }
                //Acessando time 2
            } else {
                if (j > 0 && j < 7) {
                    possiblesPositionsI = i - 1;
                    possiblesPositionsJ = [j + 1, j - 1];
                } else if (j === 0) {
                    possiblesPositionsI = i - 1;
                    possiblesPositionsJ = [j + 1];
                } else {
                    possiblesPositionsI = i - 1;
                    possiblesPositionsJ = [j - 1];
                }
            }
            if (possiblesPositionsJ.length === 1) {
                let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
                positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
                positionSelected1.setAttribute("id", "selected");
                possibilities.push(positionSelected1);
            }
            else {
                let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
                let possibleIndex2 = `${possiblesPositionsI}.${possiblesPositionsJ[1]}`;
                positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
                positionSelected2 = document.querySelector(`div[index='${possibleIndex2}']`);
                positionSelected1.setAttribute("id", "selected");
                positionSelected2.setAttribute("id", "selected");
                possibilities.push(positionSelected1);
                possibilities.push(positionSelected2);
            }

            possibilities.forEach(possibility => {
                possibility.addEventListener('click', event => {
                    possibility.removeAttribute("id");
                    let pieceAdded = document.createElement("div");
                    pieceAdded.setAttribute("class", "piece team-1");
                    possibility.appendChild(pieceAdded);
                    console.log(possibility);
                });

            });
        });
    });
});

// window.addEventListener("load", event => {
//     let piecesDivs = ``;
//     let variavel = ``;
//     for (let i = 0; i < 8; i++) {
//         variavel = `<div id = "fileira${i}"></div>`;
//         document.querySelector(`#board`).innerHTML += variavel;
//         for (let j = 0; j < 8; j++) {
//             if (i % 2 === 0 && j % 2 === 0 && i !== 4 && i < 3) {
//                 piecesDivs += `
//                     <div index = ${i}.${j} class = "piece possible">
//                         <div class="team-1"></div>
//                     </div>
//                 `;
//             }
//             if (i % 2 === 0 && j % 2 === 0 && i !== 4 && i === 6) {
//                 piecesDivs += `<div index = ${i}.${j} class = "piece possible">
//                 <div class="team-2"></div>
//                 </div>`;
//             }
//             if (i % 2 === 0 && j % 2 === 0 && i === 4) {
//                 piecesDivs += `<div index = ${i}.${j} class = "piece not-occupied possible"></div>`;
//             }
//             if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i > 4) {
//                 piecesDivs += `<div index = ${i}.${j} class = "piece possible">
//                 <div class="team-2"></div>
//                 </div>`;
//             }
//             if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i === 1) {
//                 piecesDivs += `<div index = ${i}.${j} class = "piece possible">
//                 <div class="team-1"></div></div>`;
//             }
//             if (i % 2 !== 0 && j % 2 !== 0 && i === 3) {
//                 piecesDivs += `<div index = ${i}.${j} class = "piece not-occupied possible"></div>`;
//             }
//             if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
//                 piecesDivs += `<div index = ${i}.${j} class= "piece not-possible"></div>`;
//             }
//         }
//         document.querySelector(`#fileira${i}`).innerHTML = piecesDivs;
//         piecesDivs = ``;
//     }
//     let positionSelected1
//     let positionSelected2
//     let possibilities = [];
//     let positionSelected1A
//     let positionSelected2A

//     document.querySelectorAll(".piece").forEach(piece => {
//         piece.addEventListener('click', event => {
//             let identificador = piece.getAttribute("index");
//             let index = identificador.split(".");
//             let possiblesPositionsI
//             let possiblesPositionsJ = [];
//             let i = parseInt(index[0]);
//             let j = parseInt(index[1]);
//             let myPiece = piece.children[0];
//             let team = myPiece.getAttribute("class");
//             // let team = piece.getElementsByClassName("team-1");
//             //Acessando time 1
//             if (team === "team-1") {
//                 if (j > 0 && j < 7) {
//                     possiblesPositionsI = i + 1;
//                     possiblesPositionsJ = [j + 1, j - 1];
//                 } else if (j === 0) {
//                     possiblesPositionsI = i + 1;
//                     possiblesPositionsJ = [j + 1];
//                 } else {
//                     possiblesPositionsI = i + 1;
//                     possiblesPositionsJ = [j - 1];
//                 }
//                 //Acessando time 2
//             } else {
//                 if (j > 0 && j < 7) {
//                     possiblesPositionsI = i - 1;
//                     possiblesPositionsJ = [j + 1, j - 1];
//                 } else if (j === 0) {
//                     possiblesPositionsI = i - 1;
//                     possiblesPositionsJ = [j + 1];
//                 } else {
//                     possiblesPositionsI = i - 1;
//                     possiblesPositionsJ = [j - 1];
//                 }
//             }
//             if (possiblesPositionsJ.length === 1) {
//                 let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
//                 positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
//                 positionSelected1.setAttribute("id", "selected");
//                 possibilities.push(positionSelected1);
//             }
//             else {
//                 let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
//                 let possibleIndex2 = `${possiblesPositionsI}.${possiblesPositionsJ[1]}`;
//                 positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
//                 positionSelected2 = document.querySelector(`div[index='${possibleIndex2}']`);
//                 positionSelected1.setAttribute("id", "selected");
//                 positionSelected2.setAttribute("id", "selected");
//                 possibilities.push(positionSelected1);
//                 possibilities.push(positionSelected2);
//             }

//             possibilities.forEach(possibility => {
//                 possibility.addEventListener('click', event => {


//                 });

//             });
//         });
//     });
// });






