import React from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Trail Name:
          <input required type="text" name='title' value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Trail Description:
          <input required type='text' name='desc' value={this.state.desc} onChange={this.handleChange} />
        </label>
        <label>
          Optional Photo:
          <input type='file' value={this.state.photo} onChange={this.handleChange} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}
