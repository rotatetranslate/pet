import 'aframe';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import update from 'immutability-helper';
import { wait } from './../helpers';

class ScrollingText extends Component {
  constructor() {
    super()
    this.state = {
      say: ''
    }
    this.speak = this.speak.bind(this);
  }

  render() {
    let {size, position, color} = this.props
    return (
      <Entity
        text-geometry={{value: this.state.say, size, font: '#waku3d'}}
        position={position}
        sound={{src: '#talk-click', on: 'componentchanged', volume: 8, poolSize: 2}}
        material={{color}}
        scale={{z: 0}}
       />
    )
  }

  componentDidMount() {
    this.speak();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text[0] && this.props.text != nextProps.text) {
      return wait(.4).then(() => this.speak())
    }
  }

  speak(i = 1) {
    let nextChar = this.props.text[0].slice(0, i);
    if (i === this.props.text[0].length + 1) {
      return wait(4).then(() => {
        this.setState({say: ''}, () => this.props.finishedPhrase());
      })
    } else {
      return this.setState({say: nextChar}, () => {
        wait(.1).then(() => this.speak(i + 1))
      });
    }
  }

}

export default ScrollingText;
