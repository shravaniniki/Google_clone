import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search(hideButtons =false) {
    const [input,setInput]=useState('');
    const [{}, dispatch]= useStateValue();
    const navigate = useNavigate();
    const search=e =>{
        e.preventDefault();
        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: input,
        });
        navigate('/search');
    }
  return ( 

    <form className='search'>
      <div className='search_input'>
       <SearchIcon className='search_inputIcon'/>
       <input value={input} onChange={e => setInput(e.target.value)}/>
       <MicIcon/>
      </div>
      {!hideButtons ?(
      <div className='search_button'>
        <button type='submit'  variant="outlined" onClick={search}>Google Search</button>
        <button variant="outlined">I'm feeling Lucky</button>
     </div>
      ):( <div className='search_button'>
      <button className='search_buttonhidden' type='submit'  variant="outlined" onClick={search}>Google Search</button>
      <button className='search_buttonhidden' variant="outlined">I'm feeling Lucky</button>
   </div>
   )
   }
    </form>
  )
}

export default Search