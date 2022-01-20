import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setlineClass] = useState('hide');
  const [formClass, setformClass] = useState('');

  let sendData = (obj) => {
    setformClass('hide');
    setlineClass('');
    fetch(env.urlBackend,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      if(response.result){
        setUrl(env.url+'/'+response.url);
      }
    })
  }
    let LoadDataFromForm = (event) => {
      event.preventDefault();
      let note = event.target.elements.note.value;
      note = note.trim();
      if(note === ""){
        alert("заполнить поле");
        return false;
      }
      sendData({"note":note});
    }

    return (
      <div className="section">
        <form onSubmit={LoadDataFromForm} className={`form-floating ${formClass}`}>
          <label htmlFor="floatingTextarea">Введите заметку</label>
          <textarea className="form-control" name="note" id="note"></textarea>
          <button type="submit"  className="btn-offset btn  btn-outline-danger">ОТПРАВИТЬ</button>
        </form>
        <div className={lineClass}>
          <div class="alert alert-primary d-flex align-items-center" role="alert">
            <div>{url}</div>
          </div>
          <button className="btn-offset btn  btn-outline-danger" onClick={function(){window.location.reload()}}>СОЗДАТЬ</button>
        </div>
      </div>
    );
  }
  
  export default Create;