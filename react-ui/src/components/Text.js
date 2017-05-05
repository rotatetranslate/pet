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
        text-geometry={{value: this.state.say, font: 'url(/bubble1.json)', size: 4}}
        position={this.props.position}
        rotation={{y: 90}}
        sound={{src: 'url(/talk_1.mp3)', on: 'componentchanged', volume: 8, poolSize: 1}} />
    )
  }

  componentDidMount() {
    this.speak();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text[0] && this.props.text != nextProps.text) {
      setTimeout(() => {
        this.speak();
      }, 400);
    }
  }

  speak(i = 1) {
    let nextChar = this.props.text[0].slice(0, i);
    if (i === this.props.text[0].length + 1) {
      return setTimeout(() => {
        this.setState({say: ''}, () => this.props.finishedPhrase());
      }, 4000);
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
