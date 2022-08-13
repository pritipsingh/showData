import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import  {multipleStepContext} from '../StepContext';


const text = { 
  container: { 
    marginBottom: '20px',
  }
}


const FirstStep = () => {
  const {setCurrentStep, setUser, user} = useContext(multipleStepContext);
  return (
    <div>
      <div style={text.container}>
        <TextField label="Name" value={user["name"]} onChange={ (e)=> setUser({...user, 'name' : e.target.value})} variant="outlined" />
      </div>  
      <div style={text.container}>
        <TextField type="number" label="Contact Number" value={user["contact"]} onChange={ (e)=> setUser({...user, 'contact' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>
          <TextField label="Degree" value={user["degree"]} onChange={ (e)=> setUser({...user, 'degree' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>
         <Button variant="contained" onClick={() => setCurrentStep(2)}>Next</Button>
      </div>     
    </div>
  )
}

export default FirstStep
