import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './styles.module.css';
import img from './images/image.png'
import Nav from './nav';
import About from './pages/About';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    data: { },
    country: ' ',
  }

  async componentDidMount( ) {
  const data = await fetchData( );

    this.setState({ data });
}

  handleCountryChange = async (country) => {
  const data = await fetchData(country);

  this.setState({ data, country: country });
}

  render( ) {


    const { data, country } = this.state;
    return (
      <div className="container">
        <div>
          <Router>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="./pages/about" component={About} />
                <Route path="./pages/login" component={Login} />
              </Switch>
          </Router>
        </div>
        <img src={img} alt="custom bike" />
          
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
      </div>
    );
  }
}

const Home = () => (
  <h1>Home</h1>
)

export default App;
