import './Button.css'
import {useData} from "../Data";

const Button = ({class_name, text, display_id, id}) =>{

  const { data, setData } = useData()

  const addToDisplay = () => {
    const do_not_add_list = ['AC', '+/-', '%', '=']
    if (!do_not_add_list.includes(text)) {
      setData(data + text)
    } else{
      switch(text){
        case 'AC':
          setData("")
          break
        case '+/-':
          setData(-parseFloat(data));
          break
        case '%':
          setData(parseFloat(data) / 100);
          break
        case '=':
          try {
            let newData = data
            newData = newData.replace('÷', '/');
            newData = newData.replace('X', '*');
            const equation = new Function('return ' + newData)();
            setData(equation);
          } catch (error) {
            setData('Error');
          }
      }
    }
  }

    return(
        <div>
            <div onClick={addToDisplay} id={'button'} className={class_name}>
              <p>{text}</p>
            </div>
        </div>
    )
}

export default Button