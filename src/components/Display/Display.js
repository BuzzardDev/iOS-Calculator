import './Display.css'
import { useData } from '../Data'
const Display = (id) =>{

  const { data } = useData();
  return(
      <div>
        <textarea placeholder={'0'} id={id} readOnly={true} className={'display'} value={data}></textarea>
      </div>
  )
}

export default Display