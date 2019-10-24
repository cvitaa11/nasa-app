import React, { Component } from "react";
import axios from "axios";

var API_KEY = "DEMO_KEY";

class PhotoOfTheDay extends Component {
  state = {
    photo: {}
  };

  componentDidMount() {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=" + API_KEY)
      .then(response => {
        this.setState({ photo: response.data });
      });
  }

  render() {
    const { photo } = this.state;
    return (
      <div id="wrapper" className="col-lg-10 m-auto">
        <div className="card">
          <img
            src={photo.url}
            className="card-img-top img-fluid"
            alt="APOD"
            style={{ height: 450 }}
          />
          <div className="card-body">
            <h5 className="card-title">{photo.title}</h5>
            <ul className="list-group">
              <li className="list-group-item">
                Author: <b>{photo.copyright}</b>
              </li>
              <li className="list-group-item">Date: {photo.date}</li>
              <li className="list-group-item text-justify">
                {photo.explanation}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default PhotoOfTheDay;
