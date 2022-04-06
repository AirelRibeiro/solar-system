import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="system">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map(({ name, image }) => (
            <div key={ name }>
              <PlanetCard
                planetName={ name }
                planetImage={ image }
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
