var database = firebase.database();

const question = document.getElementById('question');
const writeQuestion = document.getElementById('writeQuestion');
const postBtn = document.getElementById('postBtn');
const feed = document.getElementById('feed');
const promedio = document.getElementById('promedio')

var vacio = false;

let laPregunta;
let questionA;
//const promA;

//Crear objeto y subir al firebase
post = () => {

    
        if (vacio == true) {

            //--------------Subir a rama historial------------------
            let reference = database.ref('question/historial/').push();

            //--------------Objeto con la pregunta------------------
            let objectQuestion = {
                questions: laPregunta,
                id: reference.key,
                promedio: 0
            }

            
            database.ref('question/actual/').set(null);
            reference.set(objectQuestion);
          
        }

        //----------Subir a rama actual---------------------
        let ref = database.ref('question/actual/').push();

        //---------------objeto con pregunta actual----------
        let objectQuestionA = {

            questions: writeQuestion.value,
            
        }

        ref.set(objectQuestionA);
        writeQuestion.value=" ";
    
}

postBtn.addEventListener('click', post);

//-------------------Lectura Historial del firebase------------------
database.ref('question/historial/').on('value', function (data) {
    feed.innerHTML=' ';
    data.forEach (
        pre => {
            let valor1 = pre.val();
            let list = new QuestionList (valor1);
            feed.appendChild(list.render());
        }
    );
});

//------------------Lectura Pregunta Actual del Firebase-----------------
database.ref('question/actual/').on('value', function (data) {
    data.forEach (
        actual => {
            let valor = actual.val();
            if(valor.questions == null) {
                question.innerHTML = ' ';
            } else {
                question.innerHTML = valor.questions;
                laPregunta = valor.questions
                vacio = true;
            }
        }
    );
});

//-------------Lectura Puntaje del firebase----------------
database.ref('question/actual/puntaje/').on('value', function (data) {
    data.forEach (
        puntaje => {
            let valor2 = puntaje.val();
            promedio.innerHTML = valor2;
            console.log(valor2);
        }
    );
});