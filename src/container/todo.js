import {useState } from "react";
import ReactDOM from "react-dom/client";
import {Button,Typography,TextField,LinearProgress,Rating,ButtonGroup} from '@mui/material';
import Qus from '../questions.json'
import '../App.css'

function QuizApp2() {
  const data = require('../questions.json');
  var min;
  const [count,inc_Q]=useState(0)
  const [selected,s_selected]=useState(false)
  const [iscorrect,chck_corr]=useState({val:'Incorrect' ,corr:false})
  const [score,set_score]=useState(0)
  const [max,setmax]=useState(100)
  const [disable, setDisable] = useState(false);

  
   
 
      const getdata=()=>{
        
        console.log(data);

        
      }
    const send_ans=(a)=>{
      setDisable(true)
      let r=20-count;
      setmax(((r+score)*100)/20)
      min=score*100/20
      if(max>100){
        max=100
      }

      console.log(a.target.value)
      s_selected(true)
      console.log("=========>",selected)
      console.log("=========>",iscorrect.corr)
      
      
     if( data[count].correct_answer.replace(/[^a-zA-Z]/g, ' ')===a.target.value){
      chck_corr({val:'Correct',corr:true})
      set_score(score+1)
     }
      else if(data[count].correct_answer.replace(/[^a-zA-Z]/g, ' ')===a.target.value)
      {
        chck_corr({val:'InCorrect',corr:false})
        console.log('is===>',iscorrect)
      }
    
    }
    const next_ques=()=>{
      setDisable(false)
      inc_Q(count+1)
      s_selected(false)
      chck_corr({iscorrect:false})
    }
   
 

    
  return (
    <div>
        <div >
          <LinearProgress variant="determinate" value={count} />

          
          <h1>Question {count+1} of 20</h1>
          <h4>Entertainment Board Games</h4>
          {
            data[count].difficulty==='easy'&&
            <div>
              <Rating name="read-only" value='2' readOnly />
            </div>
          }
          {
            data[count].difficulty==='medium'&&
            <div>
              <Rating name="read-only" value='2' readOnly />
            </div>

          }
          {
            data[count].difficulty==='hard'&&
            <div>
              <Rating name="read-only" value='3' readOnly />
            </div>
          }
          
  
       
          <p>{data[count].question.replace(/[^a-zA-Z]/g, ' ')}</p>
          <div className="bttns">
            <div className="opt">
              <span className="opt"><Button disabled={disable} className="b1" onClick={(e)=>{send_ans(e)}} value={data[count].incorrect_answers[0].replace(/[^a-zA-Z]/g, ' ')} variant="contained">{data[count].incorrect_answers[0].replace(/[^a-zA-Z]/g, ' ')}</Button></span>
              <span className="opt"><Button disabled={disable} className="b1"   onClick={(e)=>{send_ans(e)}} value={data[count].incorrect_answers[1].replace(/[^a-zA-Z]/g, ' ')} variant="contained">{data[count].incorrect_answers[1].replace(/[^a-zA-Z]/g, ' ')}</Button></span>          
            </div>
            <div className="opt">
              <span className="opt"><Button disabled={disable} className="b1"   onClick={(e)=>{send_ans(e)}} value={data[count].incorrect_answers[2].replace(/[^a-zA-Z]/g, ' ')} variant="contained">{data[count].incorrect_answers[2].replace(/[^a-zA-Z]/g, ' ')}</Button></span>
              <span className="opt"><Button disabled={disable} className="b1"   onClick={(e)=>{send_ans(e)}} value={data[count].correct_answer.replace(/[^a-zA-Z]/g, ' ')} variant="contained">{data[count].correct_answer.replace(/[^a-zA-Z]/g, ' ')}</Button></span>          
            </div>
            
            <div className="nxtq">
              {
              selected && iscorrect.corr ?
                <h3>Correct</h3>
              :
              selected && !iscorrect.corr?
              <h3>InCorrect</h3>
              :
              <h3></h3>

                
              }
              {
                selected?
                <Button variant="contained" onClick={()=>{next_ques()}}>Next Ques</Button>
                :
                <Button disabled>Next Ques</Button>              }
              
            </div>
            <div>
              <div id='pbar'>
                
                <p id='p2'>Max:{max}</p>
  
                <p>score{score}</p>
              </div>
            
              
              
              <LinearProgress variant="determinate" value={score*100/20} />
            </div>
          </div>
          

          {/* {
            data.map((v,i)=>{
              return(
                <li>{v.question.replace(/[^a-zA-Z]/g, ' ')}</li>
              )

            })
          } */}

            
            {/* <TextField id="outlined-basic" label="Name" variant="outlined" /> */}
            {/* <Button variant="contained" onClick={()=>getdata()}>ADD Items</Button> */}
            {/* <LinearProgress variant="determinate" value={progress} /> */}
           
            {/* ques_an.stringify() */}
        </div>
       
    </div>
  );
}

export default QuizApp2