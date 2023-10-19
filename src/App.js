import "./components/app/app.css"
import Input from "./components/app/input/input"
import Button from "./components/app/button/button"
import { useState } from "react"
export default function App() { 
  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState("")
  const onChange = (e) => { 
    setInputValue(e.target.value)
  } 
  const onClick = async () => { 
    try { 
      const response = await fetch(`https://clck.ru/--?url=${inputValue}`); 
      if (response.ok) { 
        const result = await response.text()
        setData(result)
      } else {
        setData("Ошибка при запросе")
      } 
    } catch (error) { 
      console.error(error);
      setData("Произошла ошибка")
    } 
  } 
  return ( 
    <div className="container1"> 
      <p className="text1"> 
        Помогите клиентам быстро найти вашу страницу в интернете. Благодаря 
        короткой ссылке клиентам не придётся видеть длинные URL-адреса, 
        занимающие много места. 
      </p> 
      <Input 
        inputValue={inputValue} 
        onChange={onChange} 
        placeholder={"введите ссылку которую нужно сократить"}> 
        HI 
      </Input> 
      <Button onClick={onClick} value={"Сократить"}></Button> 
      <p>{data}</p> 
    </div> 
  ); 
}