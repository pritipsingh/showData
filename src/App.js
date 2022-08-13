import FirstStep from './component/FirstStep';
import SecondStep from './component/SecondStep';
import ThirdStep from './component/ThirdStep';
import './App.css';
import Stepper from '@mui/material/Stepper';
import { useContext } from 'react';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import  {multipleStepContext} from './StepContext';
import DisplayData from './component/DisplayData';

const steps = [
  'First Step',
  'Second Step',
  'Third Step',
];


function App() {
  const { currentStep, finalData} = useContext(multipleStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default:
        return <div>No step</div>
    }
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: 'Red' }}>Title page</h1>
        <div>
          <Stepper style={{ marginBottom: '20px', width: '100' }} activeStep={currentStep-1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}

          </Stepper>
        </div>


        {showStep(currentStep)};
              {finalData.length > 0 ? <DisplayData/> : ' '}
      </header>

    </div>
  );
}

export default App;
