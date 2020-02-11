//import 'react'

import Student_box from '../static/student_box'

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.correct_answer = ["A", "C", "D", "B", "D"],

        this.state = {
            answers: new Map(),
        }
        this.add_info = this.add_info.bind(this);
        this.generate_students = this.generate_students.bind(this);
    }
    componentDidMount(){
        this.add_info("Raul", ["A", "C", "", "B", "A"]);
        this.add_info("Angie", ["B", "C", "D", "B", "A"]);
        this.add_info("Joder", ["A", "C", "", "E", "A"]);
        this.add_info("Ang", ["B", "C", "A", "B", "A"]);
    }
    generate_students(){
        let result = [];
        console.log(this.state.answers)
        for (let student of this.state.answers) {
            console.log(student);
            let student_component = <Student_box
                                        name = {student}
                                        answers = {this.state.answers.get(student)}
                                        correct_answer= {this.correct_answer}
                                    />
            result.push(student_component);
        };
        
        return result;
    }
    add_info(name, answers){
        let answer_so_far = this.state.answers;
        answer_so_far.set(name, answers);
        this.setState({
            answers: answer_so_far,
        }, ()=>{
            console.log("updated! " + name + " " + this.state.answers[name])
        })
    }
    render(){
        return(
            <div>
                {this.generate_students()}
            </div>
    
        )
    }
}