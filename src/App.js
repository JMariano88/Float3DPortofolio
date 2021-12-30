import React, { useState, useRef } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import MedievalScreen from './screens/MedievalScreen';
import './styles.css'
import { send } from 'emailjs-com';
import CustomSwitch from './CustomSwitch';
import {Loader} from '@react-three/drei'


function App() {

  const [showClose, setShowClose] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_c0gbikn',
      'template_ohimimv',
      toSend,
      'user_k7Z78D6abMMBZlgpunHfN'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message send - Thank you! I will get in touch")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };




  const toggleClass = () => {
    if(showAbout===true || showContact===true || showMenu===true || showPortfolio===true ){
      setShowAbout(false);
      setShowContact(false);
      setShowMenu(false);
      setShowPortfolio(false);
      setShowClose(!showClose);
      
      
    }
    else{
    setShowMenu(true);
    setShowClose(!showClose);
    }
  }

  const toggleClassAbout = () => {
    if(showMenu===true || showContact===true || showPortfolio===true){
      setShowMenu(false);
      setShowContact(false);
      setShowPortfolio(false);
      setShowClose(true);
    }
    setShowAbout(!showAbout );
  }
  const toggleClassContact = () => {
    if(showMenu===true || showAbout===true || showPortfolio===true){
      setShowMenu(false);
      setShowAbout(false);
      setShowPortfolio(false);
      setShowClose(true);

    }
    setShowContact(!showContact );
  }

  const toggleClassPortfolio = () => {
    if(showMenu===true || showAbout===true || showContact===true){
      setShowMenu(false);
      setShowAbout(false);
      setShowContact(false);
      setShowClose(true);

    }
    setShowPortfolio(!showPortfolio );
  }
  return (
    <BrowserRouter>
     <header>
        <div
          className={showClose ? "menu-btn close" : "menu-btn"}
          onClick={() =>toggleClass()}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
      </div>
      <nav >
            <div className="logo">
                <a href="#"><span style={{fontSize: "14px"}}>by @Jimmy Mariano</span><br/><span style={{fontSize: "12px"}}>Web designer & Developer</span></a>
            </div>
            <div className="hidden">
              <ul className={showMenu ? "active" : ""}>
                <li><a onClick={() =>toggleClassAbout()}>About</a></li>
                <li><a onClick={() =>toggleClassContact()}>Contact</a></li>
                <li><a onClick={() =>toggleClassPortfolio()}>Portfolio</a></li>
              </ul>
            </div>
        </nav>
    </header>
     <main>
       <section className={showAbout ? "active" : ""}> 
       <button class="arrow" onClick={() =>toggleClass()}></button>
          <h1>Me & myself</h1>
          <p>
            My name is Jimmy. I am Designer / Frontend Developer enthusiast living in Porto,Portugal and I like to code things from scratch,
          </p>
          <p>
            Since I start my journey as a freelancer nearly 2 years ago (2018),
            I self realize have a serious passion for creating intuitive, dynamic user experiences.
          </p>
          <p>
            I enjoy bringing ideas to life in the browser. 
            </p>
          <p>
            I build everything from small business sites, if you are looking for a web presence I am the right guy,
            </p>
          <p>
            I am interested for all spectrum frontend ideas, ready to work on ambitious projects. Get in touch with me here.
          </p>
          <button onClick={() =>toggleClassContact()}>Let's make something great</button>
      </section>
      <section className={showContact ? "active" : ""}> 
      <button class="arrow" onClick={() =>toggleClass()}></button>
          <div className="contact">

              <div className="row">
                  <h1>contact me</h1>
              </div>
              <div className="row">
                  <h4 style={{textAlign:"left"}}>We'd love to hear from you!</h4>
              </div>
              <div className="row input-container">
              <form onSubmit={onSubmit}>
                    <div className="styled-input wide">
                      <input 
                      type="text" required
                      name='from_name'
                      placeholder='Your name'
                      value={toSend.from_name}
                      onChange={handleChange}
                      />
                      <label>Name</label> 
                   
                  </div>
                  
                    <div className="styled-input">
                      <input 
                      type="text" required
                      name='reply_to'
                      placeholder='Your email'
                      value={toSend.reply_to}
                      onChange={handleChange}
                       />
                      <label>Email</label> 
                    
                  </div>
                  
                    <div className="styled-input" style={{float:"right"}}>
                      <input type="text" required />
                      <label>Phone Number</label> 
                    </div>
                  
                  
                    <div className="styled-input wide">
                      <textarea 
                      type='text' required
                      name='message'
                      placeholder='Your message'
                      value={toSend.message}
                      onChange={handleChange}
                      ></textarea>
                      <label>Message</label>
                    </div>
                    <button className="btn-lrg submit-btn" type='submit'>Send Message</button>
                  </form>
              </div>
          </div>
      </section>
      <section className={showPortfolio ? "active" : ""} >
      <button class="arrow" onClick={() =>toggleClass()}></button>
        <div className="regional">
            <h2>Portfolio</h2>
            <h3>Dynamic Backgrounds</h3>
            <div className="reg">
              <div className="colunas">
              <Link to="/MedievalScreen" onClick={() =>toggleClass()} >
                <img src= '/images/bi1.jpg' className="image"></img>
                <div className="middle">
                   <div className="text">Medieval</div>
                </div>
                </Link>
              </div>
              <div className="colunas">
              <Link to="/" onClick={() =>toggleClass()} >
                <img src= '/images/bi2.jpg' className="image"></img>
                <div className="middle">
                   <div className="text">Earth & Universe</div>
                </div>
                </Link>
              </div>
            </div>
            </div>
            </section>
  </main> 
  
    <Route path="/" exact={true}  component={HomeScreen} />
    <Route path="/MedievalScreen" exact={true} component={MedievalScreen} />
  
  

  </BrowserRouter>
  );
}

export default App;
