const questions =[ 
{
    q: "¿De qué arquitecto es obra el museo Guggenheim de Bilbao?",
    a: ["Peter Behrens", "Frank Gehry", "Santiago Calatrava", "Frank Lloyd Wright"],
    ok: 1,
},
{
    q: "¿Dónde nació el arquitecto Ludwig Mies van der Rohe?",
    a: ["Holanda", "Francia", "Alemania", "Austria"],
    ok: 2,
},
{
    q: "¿Cuál de los siguientes edificios no fue construido por Antoni Gaudí?",
    a: ["Casa Batlló / Barcelona", "Palacio Episcopal / Astorga, León", "Casa Ximenis / Tarragona", "Sangrada Familia / Barcelona"],
    ok: 2,
},
{
    q: "¿Qué famoso arquitecto construyó la Casa de la Cascada?",
    a: ["Frank Lloyd Wright", "Robert Venturi", "Mario Botta", "Álvaro Siza"],
    ok: 0,
},
{
    q: "¿Quién fue el arquitecto que diseñó las Torres Gemelas de Nueva York?",
    a: ["Arata Isozaki", "Fumihiko Maki", "Zaha Hadid", "Minoru Yamasaki"],
    ok: 3,
}
]

const father = document.getElementById("father");

let i = 0;

let contenedor = []; //Array vacío donde poner los p, label e input creados

const printQuestion = ( oneQuestion ) =>{
    if (i < questions.length) {

        let pQuestion = document.createElement("p");
        pQuestion.textContent = oneQuestion.q;
        pQuestion.setAttribute("class", "question");
        father.appendChild(pQuestion);

        contenedor.push(pQuestion);

        for (let j = 0; j < oneQuestion.a.length; j++){

            let labelAnswer = document.createElement("label");
            labelAnswer.textContent = oneQuestion.a[j];
            labelAnswer.setAttribute("for", "boton" + [i] + [j]);
            labelAnswer.setAttribute("class", "answer");
            father.appendChild(labelAnswer);

            contenedor.push(labelAnswer);

            let inputAnswer = document.createElement("input");
            inputAnswer.textContent = oneQuestion.a[j];
            inputAnswer.setAttribute("type", "radio");
            // inputAnswer.setAttribute("name", "name" + [i]);
            // inputAnswer.setAttribute("value", [i]+[j]);
            inputAnswer.setAttribute("id", "boton" + [i] + [j]); //Tiene que coincidir con el valor "for" de label
            inputAnswer.setAttribute("class", "answer");
            inputAnswer.setAttribute("class", "input");
            father.appendChild(inputAnswer);

            contenedor.push(inputAnswer);

            labelAnswer.addEventListener("click", () => {
                if( j === oneQuestion.ok){
                    labelAnswer.setAttribute("class", "answerOk");
                    setTimeout(() => {
                        borrarQuestion(contenedor); //Borra la pregunta y la envía al contenedor
                    }, 500);
                    setTimeout(() => {
                        printQuestion(questions[++i]); //Tras borrar pinta la nuecva pregunta
                    }, 700);
                }
                else{
                    setTimeout(() => {
                        labelAnswer.setAttribute("class", "answerKo");
                    }, 500);
                    setTimeout(() => {
                        labelAnswer.setAttribute("class", "answer");
                    }, 1500);
                }
            })
        }

    }else{
        let finalText = document.createElement("p");
        finalText.textContent = "¡Bravo!, este test es bastante sencillo y aunque con él no ganamos nada, al menos hemos aprendido un poquito de la historia de la arquitectura.";
        finalText.setAttribute("class", "question");
        father.appendChild(finalText);

        let botonInicio = document.createElement("a")
            botonInicio.textContent = "Inicio";
            botonInicio.setAttribute("class", "boton");
            botonInicio.setAttribute("href", "index.html")
            father.appendChild(botonInicio);
        }
}

printQuestion(questions[i]);

function borrarQuestion (contenedor){
    for (let i = 0; i < contenedor.length; i++) {
    contenedor[i].remove()
    }
}