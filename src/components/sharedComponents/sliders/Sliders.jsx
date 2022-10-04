import React, { Component } from 'react';
import Slider from 'react-slick';
import './sliders.css';

export default class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <>
        <div>
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            dots={true}
            speed={0}
            slidesToShow={1}
            slidesToScroll={1}
            useCSS={false}
          >
            <div>
              <img src={this.props.carrousel[0]} />
            </div>
            <div>
              <img src={this.props.carrousel[1]} />
            </div>
            <div>
              <img src={this.props.carrousel[2]} />
            </div>
          </Slider>
        </div>
        <div className="contenedor__min">
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            focusOnSelect={true}
            useCSS={false}
          >
            <div>
              <img
                className="contenedor__slider-min"
                src={this.props.carrousel[0]}
              />
            </div>
            <div>
              <img
                className="contenedor__slider-min"
                src={this.props.carrousel[1]}
              />
            </div>
            <div>
              <img
                className="contenedor__slider-min"
                src={this.props.carrousel[2]}
              />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
