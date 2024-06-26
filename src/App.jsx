import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState(null);
  const[bmiStatus,setBmiStatus]=useState("");
  const[errorMessage,setErrorMessage]=useState("");
  const calculateBmi=()=>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters=height/100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5)
        {
          setBmiStatus("Underweight");
        }
        else if(bmiValue>=18.5 && bmiValue<24.9){
          setBmiStatus("Normal Weight");
        }
        else if(bmiValue>=25 && bmiValue<29.9){
          setBmiStatus("OverWeight");
        }    
        else{
          setBmiStatus("Obese");
          setErrorMessage("");
        }
      }else{
      setBmi(null);
      setBmiStatus(null);
      setErrorMessage("Please enter valid numeric values for height and weight.");
    }
      
  };
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm):</label>
            <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight(kg):</label>
            <input type="text" value={weight} id="weight"onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {bmi!==null && (
             <div className="result">
             <p>Your BMI is {bmi}</p>
             <p>Status: {bmiStatus}</p>
           </div>
          )}

        </div>
       
      </div>
    </>
  );
}

export default App


//With Gender featuere updation

/*
import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[gender,setGender]=useState("");
  const[bmi,setBmi]=useState(null);
  const[bmiStatus,setBmiStatus]=useState("");
  const[errorMessage,setErrorMessage]=useState("");
  const calculateBmi=()=>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters=height/100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(gender=="Female")
        {
          if(bmiValue<18.5)
            {
              setBmiStatus("Underweight");
            }
            else if(bmiValue>=18.5 && bmiValue<24.9){
              setBmiStatus("Normal Weight");
            }
            else if(bmiValue>=25 && bmiValue<29.9){
              setBmiStatus("OverWeight");
            }    
            else{
              setBmiStatus("Obese");
              setErrorMessage("");
            }
          }
        else if (gender=="Male")
        {
          if(bmiValue<19.5)
            {
              setBmiStatus("Underweight");
            }
            else if(bmiValue>=19.5 && bmiValue<25.9){
              setBmiStatus("Normal Weight");
            }
            else if(bmiValue>=26 && bmiValue<30.9){
              setBmiStatus("OverWeight");
            }    
            else{
              setBmiStatus("Obese");
              setErrorMessage("");
            }
        }
      }
      else{
        setBmi(null);
        setBmiStatus(null);
        setErrorMessage("Please enter valid numeric values for height and weight.");
      }
      
      
  };
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm):</label>
            <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight(kg):</label>
            <input type="text" value={weight} id="weight"onChange={(e)=>setWeight(e.target.value)}/>
          </div>

          <div className="input-container">
            <label htmlFor="gender">Male/Female:</label>
            <input type="text" value={gender} id="gender"onChange={(e)=>setGender(e.target.value)}/>
          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          {bmi!==null && (
             <div className="result">
             <p>Your BMI is {bmi}</p>
             <p>Status: {bmiStatus}</p>
           </div>
          )}

        </div>
       
      </div>
    </>
  );
}

export default App

*/
