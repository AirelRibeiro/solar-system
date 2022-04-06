import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <div key={ name } className="infors-of-mission">
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </div>))}
        </section>
      </div>
    );
  }
}

export default Missions;
