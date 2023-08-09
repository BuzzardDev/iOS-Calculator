import './Button.css'
import { useData } from '../Data'

const Button = ({ class_name, text }) => {
  const { data, setData } = useData()

  const addToDisplay = () => {
    const do_not_add_list = ['AC', '+/-', '%', '=']
    if (!do_not_add_list.includes(text)) {
      setData(data + text)
    } else {
      handleSpecialOperations(text)
    }
  }

  const handleSpecialOperations = (operation) => {
    switch (operation) {
      case 'AC':
        setData('')
        break
      case '+/-':
        handleToggleSign()
        break
      case '%':
        handlePercentage()
        break
      case '=':
        handleEquals()
        break
      default:
        break
    }
  }

  const handleToggleSign = () => {
    setData(-parseFloat(data))
  }

  const handlePercentage = () => {
    setData(parseFloat(data) / 100)
  }

  const handleEquals = () => {
    try {
      let newData = data
      newData = newData.replace('÷', '/')
      newData = newData.replace('X', '*')

      const tokens = newData.match(/[+\-*/]|[^+\-*/]+/g)
      const filteredTokens = tokens.filter((token) => token.trim() !== '')

      let result = 0
      if (filteredTokens.length > 0) {
        result = parseFloat(filteredTokens[0])
        for (let i = 1; i < filteredTokens.length; i += 2) {
          const operator = filteredTokens[i]
          const operand = parseFloat(filteredTokens[i + 1])
          switch (operator) {
            case '+':
              result += operand
              break
            case '-':
              result -= operand
              break
            case '*':
              result *= operand
              break
            case '/':
              result /= operand
              break
            default:
              break
          }
        }
      }

      setData(result.toString())
    } catch (error) {
      setData('Error')
    }
  }

  return (
      <div>
        <div onClick={addToDisplay} id="button" className={class_name}>
          <p>{text}</p>
        </div>
      </div>
  )
}

export default Button
