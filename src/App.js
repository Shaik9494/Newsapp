import React, { Component } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import Navbar from './components/Navbar';
import News from './components/News';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  mode = 'light'
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    }
  }
  updateBodyBackgroundColor() {
    const { mode } = this.state;
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
  }
  componentDidMount() {
    this.updateBodyBackgroundColor();
  }
  componentDidUpdate() {
    this.updateBodyBackgroundColor();
  }
  toggleMode = async () => {
    const newMode = this.state.mode === 'dark' ? 'light' : 'dark';
    this.setState({
      mode: newMode,
    });
  };
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar title="News App" mode={this.state.mode} togglemode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          {/* <News key="general" pageSize={10} heading={this.state.mode} country="in" category="business"/> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" pageSize={10} heading={this.state.mode} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={10} heading={this.state.mode} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={10} heading={this.state.mode} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={10} heading={this.state.mode} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={10} heading={this.state.mode} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={10} heading={this.state.mode} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={10} heading={this.state.mode} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={10} heading={this.state.mode} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

