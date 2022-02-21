import React from 'react';
import Map from '../components/map';
import Navbar from '../components/navbar';

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <Navbar />
        <Map />
      </>
    );
  }
}
