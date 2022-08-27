import React, { useState } from 'react';
import pokeball from '../assets/images/pokeball.png';
import Modal from './Modal';
import styled from 'styled-components';

const PokemonCardStyles = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: end;
    margin-right: 20px;
  }

  ::-webkit-scrollbar {
    width: 7px;
    background-color: #910305 !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fb7248 !important;
  }

  .right {
    display: flex;
    align-items: center;
    width: 38%;
    height: 55px;
    margin: 10px 0;
    padding: 5px 20px;
    font-size: 24px;
    font-weight: 700;
  }

  .right:hover {
    background: linear-gradient(135deg, #f0501d 40%, black 40%);
    border-radius: 50px;
    cursor: pointer;
  }

  .right:hover > :nth-child(3) {
    color: white;
  }
  .right:hover > :nth-child(4) {
    filter: invert(1);
  }
  .show {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 450px;
    height: 75vh;
    left: 10%;
    bottom: 10%;
    z-index: 2;
  }
`;

export default function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <PokemonCardStyles>
      <div className="container">
        {isShown && (
          <div className="show">
            <div className="stat-container-title">
              <img src={image} alt={name} className="image-tile" />
              <p style={{ width: '180px', color: 'black' }}>No. {id}</p>
              <p>{name}</p>
              <img src={pokeball} alt="pokeball" className="pokeball-title" />
            </div>
            <img src={image} alt={name} />
            <div style={{ display: 'flex', width: '100%' }}>
              <div
                style={{ background: '#dbdbd9', textAlign: 'center' }}
                className="stats-left"
              >
                <p>Type</p>
                <p>Height</p>
                <p>Weight</p>
              </div>
              <div style={{ background: '#ffffff' }} className="stats-right">
                <p>{type}</p>
                <p>{height}0 cm</p>
                <p>{weight} lbs</p>
              </div>
            </div>
            <div className="base-stats">
              <div>
                {statsName.map((stats) => (
                  <p className="stats">{stats}</p>
                ))}
              </div>
              <div>
                {statsName.map((stats) => (
                  <p className="stats">{stats}</p>
                ))}
              </div>
            </div>
          </div>
        )}
        <div
          className="right"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={modalHandler}
        >
          <img
            src={image}
            alt={name}
            style={{ maxHeight: '50px', marginRight: '10px', width: '50px' }}
          />
          <p style={{ width: '270px' }}>No. {id}</p>
          <p>{name}</p>
          <img
            src={pokeball}
            alt="pokeball"
            style={{ marginLeft: 'auto', width: '40px' }}
          />
        </div>
        {modalIsOpen && (
          <Modal
            id={id}
            name={name}
            image={image}
            height={height}
            weight={weight}
            stats={stats}
            statsName={statsName}
            type={type}
            onClick={closeModalHandler}
          />
        )}
      </div>
    </PokemonCardStyles>
  );
}
