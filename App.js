import logo from './logo.svg';
import './App.css'
import './bootstrap-4.5.3-dist/css/bootstrap.min.css'


const navbar = <div className="row mt-3">
    <div className="col-4">
      <a className="text-secondary">ENG</a>
      <a className="ml-2 text-secondary">RUS</a>
    </div>
    <div className="col-4">
      <a className="text-danger h3 mr-3">WORLD NEWS PORTAL</a>
    </div>
    <div className="col-4">
      <a><button type="button" class="btn btn-outline-secondary float-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>Search</button></a>
    </div>
</div>;

const mainFrame=<div className="container">
  {navbar}
  <div className="row mt-3 p-2 mb-2 bg-info  text-white">
    <b className="col-1">BBC</b>
    <b className="col-1">CNN</b>
    <b className="col-1">TASS</b>
    <b className="col-2">ZAKON.KZ</b>
    <b className="col-2">AL JAZIRA</b>
    <b className="col-2">LA GAZETTA</b>
    <b className="col-2">NY TIMES</b>
    <b className="col-1">RBK</b>
  
  </div>
  <div className="row mt-3 p-3 bg-success text-white">
      <div col-7 ml-2>
      <h1 className="font-italic">All World News</h1>
      <h4>You can all news in different languages around world</h4>
      </div>
  </div>
  <div className="row mt-3">
    <div className="col-6">
    <div class="card w-100 h-75" >
  <img src="1.jpeg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Еще 18 трасс станут платными в 2021 году</h5>
    <p class="card-text">В Казахстане в этом году станут платными еще 18 республиканских трасс. Это больше половины всех планируемых автодорог, на которых до 2024 года хотят внедрить систему платного проезда. Глава "ҚазАвтоЖол" Улан Алипов рассказал о датах ввода платного автопроезда, передает корреспондент Tengrinews.kz.</p>
    <a href="#" class="btn btn-primary">Подробнее</a>
  </div>
</div>
    </div>
    <div className="col-6">
    <div class="card w-100 h-75" >
  <img src="2.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Итальянского врача обвиняют в убийстве больных COVID-19 для освобождения коек</h5>
    <p class="card-text">По данным следствия, врач специально вводил пациентам с COVID-19 препарат, вызывающий угнетение дыхания. В результате его действий погибли двое больных. В одном случае вскрытие позволило обнаружить внутри тканей и органов пациента присутствие лекарства</p>
    <a href="#" class="btn btn-primary">Подобнее</a>
  </div>
</div>
    </div>
    </div>
    <div className="bg-secondary p-3 w-100 text-center">
<b className="p-2">Copyright(c) 2021 year</b>
</div>
  </div>
  
  ;

  
function App() {
  return (
    mainFrame
  );
}

export default App;
