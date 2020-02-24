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
    let firstClick  = 0;
    let secondClick = 1;


    // let teste = document.querySelector(".space");
    // let myPiece = teste.children.length;
    // console.log(myPiece);

    document.querySelectorAll("div.piece").forEach(piece => {
        piece.addEventListener('click', event => {
            if(firstClick === secondClick - 1){
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

            //Confirmando se as posições possíveis estão livres e indicando as posições vagas para o próximo movimento
            if (possiblesPositionsJ.length === 1) {
                let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
                positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
                if (positionSelected1.children.length === 0) {
                    positionSelected1.setAttribute("id", "selected");
                    possibilities.push(positionSelected1);
                }
            }
            if (possiblesPositionsJ.length === 2) {
                let possibleIndex1 = `${possiblesPositionsI}.${possiblesPositionsJ[0]}`;
                let possibleIndex2 = `${possiblesPositionsI}.${possiblesPositionsJ[1]}`;
                positionSelected1 = document.querySelector(`div[index='${possibleIndex1}']`);
                positionSelected2 = document.querySelector(`div[index='${possibleIndex2}']`);
                if (positionSelected1.children.length === 0) {
                    positionSelected1.setAttribute("id", "selected");
                    possibilities.push(positionSelected1);
                }
                if (positionSelected2.children.length === 0) {
                    positionSelected2.setAttribute("id", "selected");
                    possibilities.push(positionSelected2);
                }

            }
            if (possibilities.length !== 0) {
                possibilities.forEach(possibility => {
                    possibility.addEventListener('click', event => {
                        secondClick = secondClick + 1;
                        // if (possiblesPositionsJ.length > 1) {
                        //     console.log(positionSelected2);
                        //     positionSelected1.removeAttribute("id");
                        //     positionSelected2.removeAttribute("id");
                        // } else{
                        //     positionSelected1.removeAttribute("id");
                        // }
                        let pieceAdded = document.createElement("div");
                        if (team === "piece team-1") {
                            pieceAdded.setAttribute("class", "piece team-1");
                            possibility.appendChild(pieceAdded);
                            console.log(pieceAdded);
                            if (piece.parentNode) {
                                piece.parentNode.removeChild(piece);
                            }
                            // piece.removeAttribute("class");
                        } else if (team === "piece team-2") {
                            pieceAdded.setAttribute("class", "piece team-2");
                            possibility.appendChild(pieceAdded);
                            console.log(pieceAdded);
                            if (piece.parentNode) {
                                piece.parentNode.removeChild(piece);
                            }
                        }
                        if (possiblesPositionsJ.length > 1) {
                            positionSelected1.removeAttribute("id");
                            positionSelected2.removeAttribute("id");
                        } else if (possiblesPositionsJ.length === 1) {
                            positionSelected1.removeAttribute("id");
                        }
                    });

                });
            }
            firstClick = firstClick + 1;
        }
        });
    });
    possibilities = [];
    positionSelected1 = ``;
    positionSelected2 = ``;
    possiblesPositionsI = 0;
    possiblesPositionsJ = [];
    possibleIndex1 = ``;
    possibleIndex2 = ``;
    i = 0;
    j = 0;
    team = ``;
    pieceAdded = ``;
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






