import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="div-planet">
        <h3 data-testid="planet-name" className="name-planet">{planetName}</h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="img-planet" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
