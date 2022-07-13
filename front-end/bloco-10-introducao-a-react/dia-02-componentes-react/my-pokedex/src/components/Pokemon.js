import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, weight, unit, image } = this.props;
    return (
      <div className='pokemon'>
        <p><b>Name:</b> {name}</p>
        <p><b>Type:</b> {type}</p>
        <p>
          <b>Average weight:</b> {weight} {unit}
        </p>
        <img src={image} alt={`Pokémon ${name}`} className="images" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.number,
  unit: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;
