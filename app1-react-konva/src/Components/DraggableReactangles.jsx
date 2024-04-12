import React, { Component } from 'react';

class DraggableRectangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementX: 100,
      elementY: 100
    }
    this.dragStart = this.dragStart.bind(this);
    this.dragging = this.dragging.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart(e) {
    e.preventDefault();
    this.offsetX = e.clientX - this.state.elementX;
    this.offsetY = e.clientY - this.state.elementY;
  }

  dragging(e) {
    e.preventDefault();
    this.setState({
      elementX: e.clientX - this.offsetX,
      elementY: e.clientY - this.offsetY
    });
  }

  dragEnd(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.state.elementY + 'px',
          left: this.state.elementX + 'px',
          width: '100px',
          height: '100px',
          backgroundColor: 'red'
        }}
        draggable
        onMouseDown={this.dragStart}
        onMouseMove={this.dragging}
        onMouseUp={this.dragEnd}
      >
      </div>
    );
  }
}

export default DraggableRectangle;