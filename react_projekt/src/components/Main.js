function Main() {
    return (

      <div>
        <div className="section main-section">
          <div>
            <h3>Обмен заметками</h3>
            <p>Приложение создано для обмена заметками. Создайте заметку, получите ссылку, по которой можно прочитать Вашу заметку.</p>
          </div>
          <div>
          <h5>Как это работает:</h5>
            <ul>
              <li>Кликните по кнопке "Создать"</li>
              <li>Введите вашу заметку</li>
              <li>Нажмите "Отправить"</li>
            </ul>
            <p><i>Полученная ссылка является адрессом Вашей заметки</i></p>
          </div> 
        </div>
        <div className="btn-group">
          <a className="btn btn-danger" href="/create">Создать</a>
          <a className="btn btn-outline-danger" href="/note">Посмотреть</a>
        </div>
      </div>
   
    
    );
  }
  
  export default Main;