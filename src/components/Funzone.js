import React from 'react'
import { useState } from 'react';
import './Funzone.css'
 const Funzone = () => {
        const [buttonCondition, setButtonCondition] =useState(false);
        const [num1, setNum1] = useState('');
        const [num2, setNum2] = useState('');
        const [result, setResult] = useState('');
        const [score, setScore] = useState('');
        if(score=="")
        setScore(100);
        if(num2=="")
        setNum2((Math.floor(Math.random() * (100 - 1 + 1)) + 1));
        const handleNum1Change = (e) => {
          setNum1(e.target.value);
        };
        const handleReset = () =>{
            setResult ("");
            setScore("");
            setButtonCondition(false)
            setNum2((Math.floor(Math.random() * (100 - 1 + 1)) + 1));
            
        }
        const handleShowButton =() =>{
            setButtonCondition(!buttonCondition);
        }
      
        
          
      
      
        const handleAddition = () => {
        //   const sum = Number(num1) + Number(num2);
        let sum;
        if(num1 != num2)
        setScore(score - 5);
        else
        setButtonCondition(true);
        num1==num2 ? sum="congratulations your guess is correct number is: "+num2 : (num1<num2 ?  sum="Your number is smaller try to increase the number" : sum="Your number is greater try to reduce it");
          setResult(sum);
        };

        
      
        return (
            <>
          <div>
          <p>Guess the number between 1 to 100</p>
            <input type="number" value={num1} onChange={handleNum1Change} />
            
            <button onClick={handleAddition}>check</button>
            <button onClick={handleReset}>Reset</button>
            <p>{result}</p>
            <p className='score'>Score : {score} %</p>


            

            
            
          </div>
          <div className={buttonCondition ? 'boxOpen' : 'box'}> {num2} </div>
          <div>
          <button onClick={handleShowButton} >Show/hide</button>
          </div>
          </>
        );
        };
    

export default Funzone