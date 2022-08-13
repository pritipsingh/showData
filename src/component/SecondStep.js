import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import  {multipleStepContext} from '../StepContext';
const text = { 
  container: { 
    marginBottom: '20px',
  }
}


const SecondStep = () => {
  const {setCurrentStep, user, setUser} = useContext(multipleStepContext);
  return (
    <div>
      <div style={text.container}>
        <TextField label="Email" value={user["email"]} onChange={ (e)=> setUser({...user, 'email' : e.target.value})} type='email' variant="outlined" />
      </div>  
      <div style={text.container}>
        <TextField label="city" value={user["city"]} onChange={ (e)=> setUser({...user, 'city' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>
          <TextField label="Country" value={user["country"]} onChange={ (e)=> setUser({...user, 'country' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>

          <Button variant="contained" onClick={() => {setCurrentStep(1)}} color='secondary'>Back</Button>
          <span>  </span>
         <Button variant="contained" onClick={() => setCurrentStep(3)}>Next</Button>
      </div>     
    </div>
  )
}

export default SecondStep
