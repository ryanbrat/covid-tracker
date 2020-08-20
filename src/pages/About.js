import React from 'react';
import { Cards } from '../components';


class About extends React.Component {
  state = {
    data: { },
    country: ' ',
  }
  render() {
const { data, country } = this.state;
return (
    <div>
      <Cards data={data} />
    </div>
  );
}
}
export default About;
