
import './bootstrap-4.5.3-dist/css/bootstrap.min.css'


import React from 'react';

const Users = [
  {id: 1, name: 'Dimaw', password: 'dimaw'},
  {id: 2, name: 'Maga', password: 'maga'}
];

const Goods = [
  {id: 1, name: 'htc-u', src: 'htc-u.jpg'},
  {id: 2, name: 'Huawei y7', src: 'Huawei y7.jpg'},
  {id: 3, name: 'huawei', src: 'huawei.jpg'},
  {id: 4, name: 'nokia', src: 'nokia 3.1.jpg'},
  {id: 4, name: 'Xiaomi Redmi Note 7', src: 'Xiaomi Redmi Note 7.jpg'},
  {id: 5, name: 'xiaomi-mi8', src: 'xiaomi-mi8.jpg'}
];



class MainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:""};
    this.state={password:""};
    this.state={check:true}
    this.state={i:0}
    this.handleChange = this.handleChange.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toCard = this.toCard.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    if(!this.state.check) {
    this.setState({check:true}); }
  }
  toCard(event) {
    alert("This good added in your basket")
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleChanged(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    let check=true;
     for(let i=0;i<3;i++) {
       if(Users[i].name==this.state.name && Users[i].password==this.state.password) {
        this.setState({check: false}) ;
        check = false;
        alert("You are sign in succesfully!")
       }
      if(check) {
        alert("Your email or password incorrect try again!")
       }
    }
    
    
    event.preventDefault();
  }
  render() {
    return <div> 
    <div className="row bg-info p-4 wight-100">
    <div className="col-2"></div>

<div><h3 className="text-white ml-5">e-shopping</h3></div> 
<div className="col-5"></div>
<div className="float-right text-dark">
  <a>{this.state.check ? "Register" : ""}</a>
  <a type="button" onClick={this.logout} className="ml-2 text-dark">{this.state.check ? "Login" : "Logout"}</a>
  <a className="ml-2 text-dark">RUS</a>
  <a className="ml-2 text-dark">ENG</a>
</div>

</div>

<div className="container">
  <div className="row">
    <div className="col-4 mt-3">
      <form onSubmit={this.handleSubmit}>
          Email:<br/>
          <input  onChange={this.handleChange} size="25"/><br/>
          Password:<br/>
          <input type="password"  onChange={this.handleChanged} size="25"/><br/><br/>
          <input className="btn btn-primary" type="submit" value="Sign in"/><br/><br/>
          <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
      </form>
    </div>
    <div className="col-8 row">
    <div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[0].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[0].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
<div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[1].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[1].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
<div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[2].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[2].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
<div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[3].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[3].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
<div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[4].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[4].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
<div class="card col-3 mt-3 w-25 ml-3 ">
  <img src={Goods[5].src} class="card-img-top h-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Goods[5].name}</h5>
    <input type="button" onClick={this.toCard} class="btn btn-primary" value="Add to Card"/>
  </div>
</div>
    </div>
  </div>
</div>
<div className="align-items-end">
<div className="row bg-dark p-5 wight-100">
   <div className="col-2"></div>
   <div className="col-3 text-white"><h3>E-Shopping</h3>
   <p>E-Shopping site.Easy to buy and cheap.</p>
   </div>
   <div className="col-2"></div>
    <div className="col-2 text-white ">
      <h3>Contacts</h3><br/>
      Tel: +345444545 <br/>
      Fax: +343534534 <br/>
      Almaty,Aimanova 126,Office 606
    </div>
    <div className="col-2 text-white ">
      <h3>FAQ</h3><br/>
      Feedback<br/>
      About Creators<br/>
      Developers<br/>
    </div>
</div></div>
  </div>
  }
}

function App() {
  return (
    <div><MainClass/></div>
    
  );
}

export default App;
