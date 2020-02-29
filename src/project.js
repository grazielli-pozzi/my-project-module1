window.addEventListener("load", event => {
    let piecesDivs = ``;
    let variavel = ``;
    for (let i = 0; i < 8; i++) {
        variavel = `<div id = "fileira${i}"></div>`;
        document.querySelector(`#board`).innerHTML += variavel;
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0 && j % 2 === 0 && i < 3) {
                piecesDivs += `
                    <div index = ${i}.${j} class = "space possible occupied">
                        <div class = "piece team-1"></div>
                    </div>`;
            }
            if (i % 2 === 0 && j % 2 === 0 && i === 6) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible occupied">
                <div class = "piece team-2"></div>
                </div>`;
            }
            if (i % 2 === 0 && j % 2 === 0 && i === 4) {
                piecesDivs += `<div index = ${i}.${j} class = "space not-occupied possible"></div>`;
            }
            // if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i > 4)
            if (i % 2 !== 0 && j % 2 !== 0 && i > 4) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible occupied">
                <div class = "piece team-2"></div>
                </div>`;
            }
            // if (i % 2 !== 0 && j % 2 !== 0 && i !== 3 && i === 1)
            if (i % 2 !== 0 && j % 2 !== 0 && i === 1) {
                piecesDivs += `<div index = ${i}.${j} class = "space possible occupied">
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
    let positionSelected3
    let positionSelected4
    let possibilities = [];
    let firstClick = 0;
    let secondClick = 1;
    let teste = ``;
    let teste2 = ``;
    let pieceselected2 = ``;
    let index1;
    let index2;
    let index3;
    let index4;
    let nextTeam = "piece team-2";
    let pieceDeleted = [];
    let pieceClicked;
    let countStolenTeam1 = 0;
    let countStolenTeam2 = 0;
    let scoreTeam1 = 0;
    let scoreTeam2 = 0;


    document.querySelectorAll("div.piece").forEach(piece => {
        piece.addEventListener('click', event => {
            // if (firstClick === secondClick - 1) {
                let pieceselected = piece;
                let identificador = pieceselected.parentNode.getAttribute("index");
                let index = identificador.split(".");
                let i = parseInt(index[0]);
                let j = parseInt(index[1]);
                let checkPiece
                let checkTeam
                let team = pieceselected.getAttribute("class");
                //Acessando time 1
                if (team === "piece team-1" && nextTeam === "piece team-2") {
                    nextTeam = "piece team-1";
                    if (j > 1 && j < 6) {
                        index1 = `${i + 1}.${j + 1}`;
                        index2 = `${i + 1}.${j - 1}`;
                        index3 = `${i + 2}.${j + 2}`;
                        index4 = `${i + 2}.${j - 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    } else if (j === 1) {
                        index1 = `${i + 1}.${j + 1}`;
                        index2 = `${i + 1}.${j - 1}`;
                        index3 = `${i + 2}.${j + 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        }
                    } else if (j === 6) {
                        index1 = `${i + 1}.${j + 1}`;
                        index2 = `${i + 1}.${j - 1}`;
                        index4 = `${i + 2}.${j - 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    }
                    else if (j === 0) {
                        index1 = `${i + 1}.${j + 1}`;
                        index3 = `${i + 2}.${j + 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                    } else if (j === 7) {
                        index2 = `${i + 1}.${j - 1}`;
                        index4 = `${i + 2}.${j - 2}`;
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-2") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    }
                }

                //Acessando o time 2
                if (team === "piece team-2" && nextTeam === "piece team-1") {
                    nextTeam = "piece team-2";
                    if (j > 1 && j < 6) {
                        index1 = `${i - 1}.${j + 1}`;
                        index2 = `${i - 1}.${j - 1}`;
                        index3 = `${i - 2}.${j + 2}`;
                        index4 = `${i - 2}.${j - 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    } else if (j === 1) {
                        index1 = `${i - 1}.${j + 1}`;
                        index2 = `${i - 1}.${j - 1}`;
                        index3 = `${i - 2}.${j + 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        }
                    } else if (j === 6) {
                        index1 = `${i - 1}.${j + 1}`;
                        index2 = `${i - 1}.${j - 1}`;
                        index4 = `${i - 2}.${j - 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        }
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    }
                    else if (j === 0) {
                        index1 = `${i - 1}.${j + 1}`;
                        index3 = `${i - 2}.${j + 2}`;
                        positionSelected1 = document.querySelector(`div[index='${index1}']`);
                        positionSelected3 = document.querySelector(`div[index='${index3}']`);
                        if (positionSelected1.children.length === 0) {
                            positionSelected1.setAttribute("id", "selected");
                            possibilities.push(positionSelected1);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected1.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected3.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected3.setAttribute("id", "selected");
                                possibilities.push(positionSelected3);
                                pieceDeleted.push(positionSelected1);
                            }
                        }
                    } else if (j === 7) {
                        index2 = `${i - 1}.${j - 1}`;
                        index4 = `${i - 2}.${j - 2}`;
                        positionSelected2 = document.querySelector(`div[index='${index2}']`);
                        positionSelected4 = document.querySelector(`div[index='${index4}']`);
                        if (positionSelected2.children.length === 0) {
                            positionSelected2.setAttribute("id", "selected");
                            possibilities.push(positionSelected2);
                        } else {
                            checkPiece = ``;
                            checkTeam = ``;
                            checkPiece = positionSelected2.children[0];
                            checkTeam = checkPiece.getAttribute("class");
                            if (positionSelected4.children.length === 0 && checkTeam === "piece team-1") {
                                positionSelected4.setAttribute("id", "selected");
                                possibilities.push(positionSelected4);
                                pieceDeleted.push(positionSelected2);
                            }
                        }
                    }
                }

                scoreTeam1 = document.getElementById('score-team1');
                scoreTeam1.innerText = `Team 1 has ${countStolenTeam1} pieces of Team 2`;
                scoreTeam2 = document.getElementById('score-team2');
                scoreTeam1.innerText = `Team 2 has ${countStolenTeam2} pieces of Team 1`;


                let buttonsArray = [];
                const buttonContainer = document.getElementById('button-container');
                possibilities.forEach((possibility, index) => {
                    const possibilityButton = document.createElement('button')
                    possibilityButton.setAttribute('index', possibility.getAttribute('index'))
                    possibilityButton.innerText = `Option ${index + 1}`
                    possibility.innerText = `${index + 1}`
                    buttonContainer.appendChild(possibilityButton)

                    buttonsArray.push(possibilityButton);
                });

                buttonsArray.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        pieceselected.parentElement.removeChild(pieceselected);

                        possibilities.forEach(possibility => {
                            possibility.removeAttribute('id');
                            possibility.innerHTML = '';
                        })

                        pieceClicked = possibilities[index]; 
                        console.log(pieceClicked);   
                        possibilities[index].appendChild(pieceselected);

                        if(team === "piece team-1"){
                            if(j > 1 && j < 6 && pieceClicked === positionSelected3){
                                positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            if(j > 1 && j < 6 && pieceClicked === positionSelected4){
                                positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            if(j === 0 && pieceClicked === positionSelected3){
                                positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            if(j === 1 && pieceClicked === positionSelected3){
                                positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            if(j === 6 && pieceClicked === positionSelected4){
                                positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            if(j === 7 && pieceClicked === positionSelected4){
                                positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                countStolenTeam1 = countStolenTeam1 + 1;
                                console.log(countStolenTeam1);
                            }
                            }

                            if(team === "piece team-2"){
                                if(j > 1 && j < 6 && pieceClicked === positionSelected3){
                                    positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                if(j > 1 && j < 6 && pieceClicked === positionSelected4){
                                    positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                if(j === 0 && pieceClicked === positionSelected3){
                                    positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                if(j === 1 && pieceClicked === positionSelected3){
                                    positionSelected1.removeChild(positionSelected1.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                if(j === 6 && pieceClicked === positionSelected4){
                                    positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                if(j === 7 && pieceClicked === positionSelected4){
                                    positionSelected2.removeChild(positionSelected2.childNodes[0]);
                                    countStolenTeam2 = countStolenTeam2 + 1;
                                    console.log(countStolenTeam2);
                                }
                                }
                        buttonContainer.innerHTML = '';
                        possibilities = [];
                    })
                });

                pieceDeleted = [];
                
            firstClick = firstClick + 1;
        });
    });
    pieceselected = ``;
});



