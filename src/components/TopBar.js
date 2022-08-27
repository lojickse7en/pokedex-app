import styled from 'styled-components';
import pokeball from '../assets/images/pokeball.png';
import pokeballcolor from '../assets/images/pokeballcolor.png';

const TopBarStyles = styled.div`
  .title {
    /* background-color: lightblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 0 350px 0 30px;
    top: 30px;
    width: 100%;
    height: 50px;
    background: linear-gradient(115deg, #ddd3d8 57.7%, black 57.7%);
  }

  .title__left {
    /* background-color: lightcyan; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }

  .title__left > p {
    font-size: 28px;
    font-weight: 700;
  }

  .caught-seen {
    /* background-color: yellowgreen; */
    display: flex;
    align-items: center;
  }
  .caught,
  .seen {
    /* background-color: lightyellow; */
    display: flex;
    align-items: center;
    background: #5a5a58;
    border-radius: 10px;
    margin-left: 20px;
    padding: 5px 20px;
    color: white;
  }
  /* .seen {
    background-color: lightcoral;
  } */
  /* p {
    background-color: lightgreen;
  } */
`;

export default function TopBar() {
  return (
    <TopBarStyles>
      <div className="title">
        <div className="title__left">
          <p>Pokédex</p>
          <div className="caught-seen">
            <div className="caught">
              <img
                src={pokeballcolor}
                alt="pokeball"
                style={{ width: '30px', marginRight: '10px' }}
              />
              <p>438</p>
            </div>
            <div className="seen">
              <img
                src={pokeball}
                alt="pokeball"
                style={{ width: '30px', marginRight: '10px' }}
              />
              <p>649</p>
            </div>
          </div>
        </div>
        <p style={{ color: 'white' }}>A -&gt; Z</p>
      </div>
    </TopBarStyles>
  );
}
