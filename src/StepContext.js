import React, {Children, useContext, useState} from 'react'
import App from './App';

export const multipleStepContext = React.createContext(null);


const StepContext = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState([]) ;
  const [finalData , setFinalData] = useState([]) ;
   
  const submitData = () => { 
    setFinalData((finalData) => [...finalData, user]) ;
    setUser(" ") ;
    setCurrentStep(1)
    console.log(finalData) ;
  }
  

  return (
    <multipleStepContext.Provider value={{currentStep, setCurrentStep, user, setUser, setFinalData, finalData, submitData}}>
      <App />
   </multipleStepContext.Provider>
  )
}

export default StepContext