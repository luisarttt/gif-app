import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setinputValue] = useState('');

    const onInputChaged = (e) => {
        setinputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() == 0) return;
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
  
    return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChaged}
        />
    </form>
  )
}
