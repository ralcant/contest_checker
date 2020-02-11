let name = "Raul Alcantara";
let answers = ["A", "B", "", "B", "A"];
let correct_answer = ["A", "C", "D", "B", "D"];
let correct_answer_score = 10;
let incorrect_answer_score = -2;
let blank_answer_score = 0;

export default function Index(){
    function get_scores(answers){
        let result = []
        for (let i = 0; i< answers.length; i++){
            result.push(<li>Answer for problem {i+1} was {answers[i]}</li>);
        }
        return result;
    }
    function get_question_score(answer, correct_answer){
        if (answer == correct_answer){

            return correct_answer_score;

        } else  if (answer == ""){

            return blank_answer_score;

        } else {

            return incorrect_answer_score;
        }
    }
    function get_total_score(answers){
        let score = 0;
        for (let i = 0; i < answers.length; i++){
            let add_score = get_question_score(answers[i], correct_answer[i]);
            score += add_score;
        }
        return score
    }
    return(
        <div>
            <ol>
                <li>Name is {name}</li>
                {get_scores(answers)}
            </ol>
            <p> The score is {get_total_score(answers)}</p>
        </div>

    )
}