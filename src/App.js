
import './App.css';
import Button from './components/Button/Button'
import Display from "./components/Display/Display";
import { DataProvider } from './components/Data';
function App() {


  return (
    <div className="App">
      <div className={'container'}>
        <div className={'calculator_grid'}>
          <DataProvider>
          <div id={'display'}><Display id={'display'}/></div>

          <div><Button id={'button'} class_name={'light_gray'} text={'AC'}/></div>
          <div><Button id={'button'} class_name={'light_gray'} text={'+/-'}/></div>
          <div><Button id={'button'} class_name={'light_gray'} text={'%'}/></div>
          <div><Button id={'button'} class_name={'orange'} text={'÷'}/></div>

          <div><Button id={'button'} class_name={'dark_gray'} text={'7'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'8'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'9'}/></div>
          <div><Button id={'button'} class_name={'orange'} text={'X'}/></div>

          <div><Button id={'button'} class_name={'dark_gray'} text={'4'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'5'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'6'}/></div>
          <div><Button id={'button'} class_name={'orange'} text={'-'}/></div>

          <div><Button id={'button'} class_name={'dark_gray'} text={'1'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'2'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'3'}/></div>
          <div><Button id={'button'} class_name={'orange'} text={'+'}/></div>

          <div id={'zero'}><Button id={'button'} class_name={'dark_gray zero'} text={'0'}/></div>
          <div><Button id={'button'} class_name={'dark_gray'} text={'.'}/></div>
          <div><Button id={'button'} class_name={'orange'} text={'='}/></div>
          </DataProvider>
        </div>
      </div>


    </div>
  );
}

export default App;
