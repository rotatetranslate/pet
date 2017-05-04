import 'aframe';
import 'aframe-text-geometry-component';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import update from 'immutability-helper';

class Text extends Component {
  constructor() {
    super()
    this.state = {
      say: ''
    }
    this.speak = this.speak.bind(this);
  }

  render() {
    return (
      <Entity
        // text-geometry={{value: this.state.say, font: 'http://localhost:3000/bubble1.json', size: 4}}
        text-geometry={{value: this.state.say, font: url('/bubble1.json'), size: 4}}
        position={this.props.position}
        rotation={{y: 90}}
        // sound={{src: 'http://localhost:3000/talk_1.mp3', on: 'componentchanged', volume: 8, poolSize: 1}}
        sound={{src: url('/talk_1.mp3'), on: 'componentchanged', volume: 8, poolSize: 1}}
        // _ref = {(el) => el.setAttribute('text-geometry', {value: 'test'})}
      />
    )
  }

  componentDidMount() {
    this.speak();
  }

  speak(i = 1) {
    let nextChar = this.props.text.slice(0, i);
    if (i === this.props.text.length + 1) {
      return setTimeout(() => {
        this.setState({say: ''})
      }, 5000);
    } else {
      return this.setState({say: nextChar}, () => {
        setTimeout(() => {
          this.speak(i + 1);
        }, 100);
      });
    }
  }

}

export default Text;
