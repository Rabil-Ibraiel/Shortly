import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Functionalty() {
  const [url, setUrl] = useState('')
  const [temp, setTemp] = useState('')
  const [urls, setUrls] = useState([])
  const [loding, setLoding] = useState(false)
  let char = 0;

  console.log(screen.width)
  
  if (screen.width > 1400) {
    char = 50
  } else if(screen.width <= 650) {
    char = 15
  } else if (screen.width <= 768) {
    char = 25
  } else {
    char = 35
  }

  const getShortenUrl = async(e) => {
    e.preventDefault()
    if (!url) {
      return;
    }
    setLoding(true)
    const headers = {
      "Authorization": "Bearer aZ14uwdtTgsnSURJKjKQ5n1WqbBUYeqKpM8BEXj5OAoWFzQ7nwaPRPIB3DOa",
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
  
    let body = {
      "long_url": url,
      "short_id": "",
      "domain": "",
      "expire_at_datetime": "",
      "expire_at_views": "",
      "description": "",
      "public_stats": true,
      "password": ""
    };
    
    const api = await fetch('https://t.ly/api/v1/link/shorten', {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })

    const data = await api.json()
    setLoding(false)
    setUrls(prev=>[data, ...prev])
    setUrl('')
    document.getElementById('formInput').value = ""
    temp.innerHTML = "copy"
    temp.classList.remove('copied')
  }

  function copy(e) {
    const url = e.target.value
    if (temp) {
      if (temp === e.target && e.target.classList[0] === 'copied') {
        e.target.classList.remove('copied')
        e.target.innerHTML = 'copy'
        navigator.clipboard.writeText('')
      } else if(temp === e.target && e.target.classList[0] === undefined){
        navigator.clipboard.writeText(url);
        e.target.innerHTML = 'copied!'
        e.target.classList.add('copied')
      } else {
        navigator.clipboard.writeText
        (url);
        e.target.innerHTML = 'copied!'
        temp.innerHTML = 'copy'
        e.target.classList.add('copied')
        temp.classList.remove('copied')
        setTemp(e.target)
      }
    } else {
      navigator.clipboard.writeText
      (url);
      e.target.innerHTML = 'copied!'
      e.target.classList.add('copied')
      setTemp(e.target)
    }
  }

  return (
    <div>
      <Form>
        <input disabled={loding} autocomplete="off" id="formInput" onChange={(e)=>setUrl(e.target.value)} placeholder="Shorten a link here..." />
        <Button disabled={loding} onClick={(e)=>getShortenUrl(e)}>{loding ? <span id="loader" class="loader"></span> : 'Shorten it!'}</Button>
      </Form>

      {urls.length>0 && urls.map(item => {
        return (
          <Last>
            {screen.width <= 1200 ? <p>{item.short_url}</p> : <h5>{item.long_url.length > 50 ? item.long_url.substring(0, char) + '...' : item.long_url}</h5>}
            <div>
              {screen.width > 1200 && <p>{item.short_url}</p>}
              <button onClick={(e)=>copy(e)} value={item.short_url}>Copy</button>
            </div>
          </Last>
      )})}
      
    </div>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 9rem;
  background-color: var(--primary-violet);
  margin-top: 80px;
  border-radius: 5px;
  width: 100%;
  input {
    width: 80%;
    height: 40%;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    border: 2px solid var(--secondary-red);
    outline: none;
  }

  input::placeholder {
    color: var(--secondary-gray);
  }

  input:disabled {
    background-color: var(--primary-cyan);
  }

  @media screen and (max-width: 650px){
    flex-direction: column;
    input {
      width: 100%;
      margin-bottom: 0.8rem;
      height: 50%;
      font-size: 1.2rem;
    }
  }
`;

const Button = styled.button`
  height: 40%;
  margin-left: 20px;
  background-color: var(--primary-cyan);
  color: var(--primary-light);
  border-radius: 5px;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 1rem;

  &:disabled{
    cursor: not-allowed;
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px){
    padding: 0.6rem;
    font-size: 0.8rem;
    font-weight: 600;
  }

  @media screen and (max-width: 650px){
    width: 35%;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Last = styled.div`
  display: flex!important;
  justify-content: space-between!important;
  align-items: center!important;
  background-color: var(--primary-violet);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  color: var(--primary-light);
  div{
    display: flex!important;
    align-items: center!important;
  }

  h5 {
    font-weight: 500;
    margin: auto 0;
  }

  p {
    margin: 0;
  }

  div p {
    color: var(--secondary-grayViolet);
    margin: auto 0;
  }

  div button {
    margin-left: 1rem;
    padding: 0.4rem 1.4rem;
    font-size: 0.8rem;
    background-color: var(--primary-cyan);
    color: var(--primary-light);
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 250ms ease-in;
  }

  .copied {
    background-color: var(--secondary-red);
  }
  
`

export default Functionalty;
