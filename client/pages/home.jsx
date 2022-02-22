import React from 'react';
import Navbar from '../components/navbar';
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
    <div className='home'>
      <Navbar />
      <div className='text-center'>
        <h1>TRAILBLAZE</h1>
        <h2>Where ya wanna go?</h2>
        <div>
            <a href='#map'>Search Here<i className="fa-solid fa-magnifying-glass glass"></i></a>
        </div>
        <div>
        <a href='#login'>Log-In/Sign-Up</a>
        </div>
      </div>
    </div>
    );
  }
}
