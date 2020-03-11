import React, {useRef} from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profiles from './pages/Profiles';
import myPage from './pages/myPage';
import { Button } from 'reactstrap';

import { render } from '@testing-library/react';



const NotFound = () => {
  return <h1>Not Found!</h1>;
}

// const activeStyle = {
//   color: "red"
// };

// class 안의 함수는 function을 생략한다.
// 컴포넌트를 만드는 템플릿 
// 요청이 들어왔을 때 그 요청에 맞는 컴포넌트를 보여주는 역할을 하는 Route
// path props를 받는다.
class App extends React.Component {

  // 생성자
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  // 컴포넌트가 처음 실행될 때: Mount
  // 컴포넌트가 시작되면: 우선 context, defaultProps와 state를 저장 
  // componentWillMount() 호출
  // render로 컴포넌트를 DOM에 부착한 후 Mount가 완료된 후 componentDidMount() 호출

  // componentDidMount() {
  //   auth.onAuthStateChanged(user => {
  //     this.setState({ currentUser: user })
  //   });
  // }

  render() {
    return (

      <>
     


      <nav>    
          {/* Switch : 라우터들을 묶은 다음 가장 먼저 path에 매치되는 Route에 연결시킴 */}
          <Switch>
            <Route exact path="/" component={Home} />
       
            <Route path="/about" component={About} /> 
            <Route path="/profiles" component={Profiles} />
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/myPage" component={myPage} />
            <Route component={NotFound} />
            {/* <Route path="/profile/:username" component={Profile} /> */}
          </Switch>
      </nav>

    </>
  
    );
  }
}


export default App;
