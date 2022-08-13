import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import  {multipleStepContext} from '../StepContext';

const text = { 
  container: { 
    marginBottom: '20px',
  }
}


const ThirdStep = () => {
  const {setCurrentStep , submitData, user, setUser} = useContext(multipleStepContext);
  return (
    <div>
      <div style={text.container}>
        <TextField label="Postal Code" value={user["code"]} onChange={ (e)=> setUser({...user, 'code' : e.target.value})} variant="outlined" />
      </div>  
      <div style={text.container}>
        <TextField label="Hobby" value={user["hobby"]} onChange={ (e)=> setUser({...user, 'hobby' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>
          <TextField label="Profession" value={user["profession"]} onChange={ (e)=> setUser({...user, 'profession' : e.target.value})} variant="outlined" />
      </div> 
      <div style={text.container}>
      <Button variant="contained" onClick={() => {setCurrentStep(2)}} color="secondary">Back</Button>
      <span> </span>
         <Button variant="contained" onClick={submitData}>Submit</Button>
      </div>     
    </div>
  )
}

export default ThirdStep
