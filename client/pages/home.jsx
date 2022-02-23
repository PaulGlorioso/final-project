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
        <div className='container'>
          <h1 className='text-center trail'>TRAILBLAZE</h1>
          <div className='d-flex flex-column text-center title' style={{ height: '90vh' }}>
            <h2>Where ya wanna go?</h2>
            <div>
              <a href='#map' className='btn serbtn'>Search Here</a>
            </div>
            <div>
              <a href='#login' className=' btn logbtn'>Log-In/Sign-Up</a>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
