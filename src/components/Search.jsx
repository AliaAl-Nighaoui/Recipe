import styled from  "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }
  return (
   <FromStyle onSubmit={submitHandler}>
       <div>
       <FaSearch></FaSearch>
       <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
       </div>
   </FromStyle>
  )
}

const FromStyle = styled.form`
    margin: 3rem 20rem;

    div {
        position: relative;
        width: 100%;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem; 
        color: white;
        padding: 4px 20px 4px 40px;
        border: none;
        border-radius: 0.5rem;
        ourline: none;
        width: 100%;
        
    }
    svg {
        position: absolute; 
        top: 20%;
        left: 1%;
        transform: translate:(100%, -50%);
        color: white;
    }
`
export default Search