import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { activity } = this.props;
    return (
      <article>
        hello
        <img src={ activity.cover_image_url } alt="coverImage"/>
      </article>
    );
  }
}

export default Card;