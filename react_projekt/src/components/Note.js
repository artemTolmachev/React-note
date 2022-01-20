import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {
  let {noteURL} = useParams();
  const[noteText, setNotext] = useState('');
  const[LineClass, setlineClass] = useState('hide');
  const [formClass, setformClass] = useState('hide');
  const [ErrorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    if(noteURL !== undefined){
      fetch("http://localhost:3500",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"url": noteURL})
      })
      .then(response => response.json())
      .then(response => {

        if(response.result){
          setNotext(response.note);
          setlineClass('');
          setformClass('hide');
          setErrorClass('hide');
        }else if(!response.result){
          console.log(response.result);
          setlineClass('hide');
          setformClass('hide');
          setErrorClass('');
        }
      })
    }
    else{
      setlineClass('hide');
      setformClass('');
      setErrorClass('hide');
    }
  },[]);

  function getNote(event){
    event.preventDefault();
    let url = event.target.elements.url.value;
    console.log(url);
    url = url.trim();
    if(url === ""){
      alert("заполнить поле");
      return false;
    }
    noteURL = url;
    window.location.href = env.url +'/'+ url;
  }
  
  function searchNote(){
    window.location.href = env.url;
  }

    return (
      <div className="section">
        <div className={LineClass}>
          <h4>Note:</h4>
          <div className="resp">{noteText}</div>
          <div><button className="btn btn-offset  btn-outline-danger" onClick={searchNote}>ЕЩЁ ЗАМЕТКА</button></div>
        </div>
        <div>
          <div className={ErrorClass}>
            <p>Такой заметки не найдено!!!</p>
          </div>
          
          <div className={formClass}>
            <div class="alert alert-primary d-flex align-items-center px-3" role="alert">
              <div>На этой странице Вы можете вставить скопирыванный хеш вашей  ссылки и  получить информацию ранее созданной заметки</div>
            </div>            
            <form action="" onSubmit={getNote} className="input-group">
              <div className="input-group mt-3 px-2">
                <input type="text" id="url" name="url" className="form-control "/>
                <button type="submit" className="btn  btn-outline-danger" id="button-addon2">ИСКАТЬ ЗАМЕТКУ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Note;