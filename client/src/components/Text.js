import 'aframe';
import 'aframe-text-geometry-component';
import React, { Component } from 'react';
import {Entity} from 'aframe-react';

export default Text = (props) => {
  return (
    <Entity
      text-geometry={{value: props.text, font: props.font}} position={props.position} />
  )
}

// class Text extends Component {
//
//   render() {
//     return (
//       <Entity
//         text-geometry={{value: this.props.text}} position={this.props.position}
//         // ref={Entity => Entity.props['text-geometry'].font = font } />
//         ref={Entity => console.log(Entity) } />
//     )
//   }
// }
//
// export default Text;
