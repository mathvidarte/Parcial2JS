class QuestionList {
    constructor (objectQuestion) {
        this.objectQuestion = objectQuestion;
    }

    render = () => {
        let component = document.createElement('div');
        component.className='questionList'

        //Contenedor de las preguntas
        let questionCont = document.createElement('div');
        questionCont.className ='everyQuestion'
        questionCont.innerHTML = (
            this.objectQuestion.questions
        );


        let prom = document.createElement('div');
        prom.className='elPuntaje'
        prom.innerHTML=(
            this.objectQuestion.promedio
        );
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteButton';
        deleteBtn.innerHTML='x';

        component.appendChild(prom);
        component.appendChild(questionCont);
        component.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', ()=> {
            const database = firebase.database();
            database.ref('question/web/'+this.objectQuestion.id).set(null);
        });
        
     

        return component;
    }
}