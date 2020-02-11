//import 'react'
let correct_answer_score = 10;
let incorrect_answer_score = -2;
let blank_answer_score = 0;

export default class Student_box extends React.Component{
    constructor(props){
        super(props);
        this.get_scores = this.get_scores.bind(this);
        this.get_question_score = this.get_question_score.bind(this);
        this.get_total_score = this.get_total_score.bind(this);
    }
    get_scores(answers){
        let result = []
        for (let i = 0; i< answers.length; i++){
            result.push(<li>Answer for problem {i+1} was {answers[i]}</li>);
        }
        return result;
    }
    get_question_score(answer, correct_answer){
        if (answer == correct_answer){

            return correct_answer_score;

        } else  if (answer == ""){

            return blank_answer_score;

        } else {

            return incorrect_answer_score;
        }
    }
    get_total_score(answers){
        let score = 0;
        for (let i = 0; i < answers.length; i++){
            let add_score = this.get_question_score(answers[i], this.props.correct_answer[i]);
            score += add_score;
        }
        return score
    }
    render(){
        return(
            <div>
                <ol>
                    <li>Name is {this.props.name}</li>
                    {this.get_scores(this.props.answers)}
                </ol>
                <p> The score is {this.get_total_score(this.props.answers)}</p>
            </div>
    
        )
    }
}