import { useState } from "react";
import '../App.css';



function QuizApp() {
    
    const quiz=[
        {
            ques:'What is your name',
            ans:'mohsin',
            options:['kalim','ahm','mohsin']
        },
        {
            ques:'What is your father name',
            ans:'ali',
            options:['kalim','ali','mohsin']
        },
        {
            ques:'What is your name',
            ans:'mohsin',
            options:['kalim','ahm','mohsin']
        },
        {
            ques:'What is your father name',
            ans:'ali',
            options:['a','q','r']
        },
        {
            ques:'What is your name',
            ans:'mohsin',
            options:['kalim','ahm','mohsin']
        },
        {
            ques:'What is your father name',
            ans:'ali',
            options:['kalim','ali','mohsin']
        },
    ]
    const [count,inc_c]=useState(0)
    const [score,inc_s]=useState(0)
    const [value,setvalue]=useState('')
    

    const nxt=()=>{
        inc_c(count+1)
        console.log(value)
        console.log(score)
        console.log(value===quiz[count].ans)
        
        value===quiz[count].ans
        ?
            (inc_s(score+1))
        :
        score
       
    }

  return (
    
    <div className="App">
        <div>
            <div>
                <h2>{score}</h2>
                <h2>{value}</h2>
                <h1>
                    {count+1.}
                    {quiz[count].ques}
                </h1>
                
            </div>
            <div>
                <div id="ans">

                <p onClick={()=>setvalue(quiz[count].options[0])}>{quiz[count].options[0]}</p>
                <p onClick={()=>setvalue(quiz[count].options[1])}>{quiz[count].options[1]}</p>
                <p onClick={()=>setvalue(quiz[count].options[2])}>{quiz[count].options[2]}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>nxt()}>Next Question</button>
            </div>
        </div>
      {/* <h1>{quiz[0].ques}</h1> */}
    </div>
  );
}

export default QuizApp;
