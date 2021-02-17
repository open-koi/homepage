import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import GlobalStyle from 'theme/globalStyle';
import 'assets/css/fontawesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import MyRoute from 'service/MyRoute';
import Home from 'containers/Home';

function App() {

  return (
    <div className="App">
      <Scrollbars autoHide style={{ flex: 1 }}>
        <GlobalStyle />
        <Router>
          <Switch>
            <MyRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </Scrollbars>
    </div>
  );
}

export default App;
