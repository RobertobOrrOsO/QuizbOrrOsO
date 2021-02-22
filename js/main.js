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
    a: ["Casa Batlló (Barcelona)", "Palacio Episcopal (Astorga, León)", "Casa Ximenis (Tarragona)", "Sangrada Familia (Barcelona)"],
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

// let questions = [
// {   title: "¿De qué arquitecto es obra el museo Guggenheim de Bilbao?",
//     correctAnsw: 1,  
//     answ: [
//         {
//             label: "Peter Behrens",
//             id: "peter-behrens",
//             name: "arquitecto",
//             value: "peter-behrens",
//         },
//         {
//             label: "Frank Gehry",
//             id: "frank-gehry",
//             name: "arquitecto",
//             value: "frank-gehry",
//         },
//         {
//             label: "Santiago Calatrava",
//             id: "santiago-calatrava",
//             name: "arquitecto",
//             value: "santiago-calatrava",
//         },
//         {
//             label: "Frank Lloyd Wright",
//             id: "frank-lloyd-wright",
//             name: "arquitecto",
//             value: "tita-novoa",
//         },
//     ]
// },
// {   title: "¿Dónde nació el arquitecto Ludwig Mies van der Rohe?" ,
//     correctAnsw: 2,  
//     answ: [
//         {
//             label: "Holanda",
//             id: "holanda",
//             name: "pais",
//             value: "holanda",
//         },
//         {
//             label: "Francia",
//             id: "francia",
//             name: "pais",
//             value: "francia",
//         },
//         {
//             label: "Alemania",
//             id: "alemania",
//             name: "pais",
//             value: "alemania",
//         },
//         {
//             label: "Austria",
//             id: "austria",
//             name: "pais",
//             value: "austria",
//         },
//     ]
// },
// {   title: "¿Cuál de los siguientes edificios no fue construido por Antoni Gaudí?" ,
//     correctAnsw: 2,  
//     answ: [
//         {
//             label: "Casa Batlló (Barcelona)",
//             id: "casa-batllo",
//             name: "edificio",
//             value: "casa-batllo",
//         },
//         {
//             label: "Palacio Episcopal (Astorga)",
//             id: "palacio-episcopal",
//             name: "edificio",
//             value: "palacio-episcopal",
//         },
//         {
//             label: "Casa Ximenis (Tarragona)",
//             id: "casa-ximenis",
//             name: "edificio",
//             value: "casa-ximenis",
//         },
//         {
//             label: "Sagrada Familia (Barcelona)",
//             id: "sagrada-familia",
//             name: "edificio",
//             value: "sagrada-familia",
//         },
//     ]
// },
// {   title: "¿Qué famoso arquitecto construyó la Casa de la Cascada?" ,
//     correctAnsw: 0,  
//     answ: [
//         {
//             label: "Frank Lloyd Wright",
//             id: "frank-lloyd-wright",
//             name: "arquitecto",
//             value: "frank-lloyd-wright",
//         },
//         {
//             label: "Robert Venturi",
//             id: "robert-venturi",
//             name: "arquitecto",
//             value: "robert-venturi",
//         },
//         {
//             label: "Mario Botta",
//             id: "mario-botta",
//             name: "arquitecto",
//             value: "mario-botta",
//         },
//         {
//             label: "Álvaro Siza",
//             id: "alvaro-siza",
//             name: "arquitecto",
//             value: "alvaro-siza",
//         },
//     ]
// },
// {   title: "¿Quién fue el arquitecto que diseñó las Torres Gemelas de Nueva York?" ,
//     correctAnsw: 0,  
//     answ: [
//         {
//             label: "Minoru Yamasaki",
//             id: "minoru-yamasaki",
//             name: "arquitecto",
//             value: "minoru-yamasaki",
//         },
//         {
//             label: "Arata Isozaki",
//             id: "arata-isozaki",
//             name: "arquitecto",
//             value: "arata-isozaki",
//         },
//         {
//             label: "Fumihiko Maki",
//             id: "fumihiko-maki",
//             name: "arquitecto",
//             value: "fumihiko-maki",
//         },
//         {
//             label: "Zaha Hadid",
//             id: "zaha-hadid",
//             name: "arquitecto",
//             value: "zaha-hadid",
//         },
//     ]
// }
// ];

const father = document.getElementById("father");

let i = 0;

const printQuestion = ( oneQuestion ) =>{
    let pQuestion = document.createElement("p");
    pQuestion.textContent = oneQuestion.q;
    pQuestion.setAttribute("class", "question");
    father.appendChild(pQuestion);

    for (let j = 0; j < oneQuestion.a.length; j++){
        let labelAnswer = document.createElement("label");
        labelAnswer.textContent = oneQuestion.a[j];
        labelAnswer.setAttribute("for", "boton" + [i] + [j]);
        labelAnswer.setAttribute("class", "answer");
        father.appendChild(labelAnswer);

        let inputAnswer = document.createElement("input");
        inputAnswer.textContent = oneQuestion.a[j];
        inputAnswer.setAttribute("type", "radio");
        // inputAnswer.setAttribute("name", "name" + [i]);
        // inputAnswer.setAttribute("value", [i]+[j]);
        inputAnswer.setAttribute("id", "boton" + [i] + [j]); //Tiene que coincidir con el valor "for" de label
        inputAnswer.setAttribute("class", "answer");
        inputAnswer.setAttribute("class", "input");

        father.appendChild(inputAnswer);

        labelAnswer.addEventListener("click", () => {
            if( j === oneQuestion.ok){
                labelAnswer.setAttribute("class", "answerOk");
                // pQuestion.replaceChild();
                printQuestion(questions[++i]);
            }
            else{
                labelAnswer.setAttribute("class", "answerKo");
            }
        })
    }
}
printQuestion(questions[i]);









// const createDivQuestion = ( ) =>{
//     for (let i = 0; i < questions.length; i++){
//         let divQuestion = document.createElement("p");
//         divQuestion.textContent = (questions[i].q);
//         divQuestion.setAttribute("class", "question");
//         father.appendChild(divQuestion);

//         for (let j = 0; j < questions[i].a.length; j++){
//             let labelAnswer = document.createElement("label");
//             labelAnswer.textContent = (questions[i].a[j]);
//             labelAnswer.setAttribute("for", "boton" + [i] + [j]);
//             labelAnswer.setAttribute("class", "answer");
//             father.appendChild(labelAnswer);

//             let inputAnswer = document.createElement("input");
//             inputAnswer.textContent = (questions[i].a[j]);
//             inputAnswer.setAttribute("type", "radio");
//             inputAnswer.setAttribute("name", "name" + [i]);
//             inputAnswer.setAttribute("value", [i]+[j]);
//             inputAnswer.setAttribute("id", "boton" + [i] + [j]); //Tiene que coincidir con el valor "for" de label
//             inputAnswer.setAttribute("class", "answer");
//             father.appendChild(inputAnswer);
//         }
//     }

// }

// let j = 0;