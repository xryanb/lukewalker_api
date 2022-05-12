import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Form = () => {
    const [name,setName] = useState('');
    const [num,setNum] = useState(1);

    const navigate=useNavigate();

    const star=['people','films','vehicles','species'];

    const submitHandler=(e) =>{
        e.preventDefault();

        console.log(name,num);
        navigate(`/${name}/${num}`);
    }


  return (
    <div>Form
        <form onSubmit={submitHandler}>
          <p>{JSON.stringify(name)}</p>
          <p>{JSON.stringify(num)}</p>
          <label>Search for:</label>
            <select value={name} onChange={e => setName(e.target.value)}>
                {star.map( (wars, idx) => 
                    <option key={idx} value={wars}>{wars}</option>
                )}
            </select>
            <label>ID</label>
            <input type="number" min='1'value={num} onChange={e => setNum(e.target.value)}/> 
            <button>Search!</button>
        </form>
    </div>

  )
}



export default Form;