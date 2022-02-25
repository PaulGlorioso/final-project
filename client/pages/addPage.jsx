import React from 'react';
import AddForm from '../components/addForm';

export default class AddPage extends React.Component {
  render() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    return (
    <AddForm lat={lat} lng={lng}/>
    );
  }
}
