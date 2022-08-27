import styled from 'styled-components';

const BottomBarStyles = styled.div`
  .bottom {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: end;
    grid-template: 30px;
    padding-right: 50px;
  }
  .bottom-btn {
    display: flex;
    grid-template: 15px;
    color: white;
    cursor: pointer;
  }

  .bg-circle-white {
    border-radius: 50%;
    padding: 0 5px;
    background: white;
    color: black;
  }
`;

export default function BottomBar() {
  return (
    <BottomBarStyles>
      <div className="bottom">
        <div className="bottom-btn">
          <p className="bg-circle-white">A</p>
          <p>See Details</p>
        </div>

        <div className="bottom-btn">
          <p className="bg-circle-white">X</p>
          <p>Habitat</p>
        </div>

        <div className="bottom-btn">
          <p className="bg-circle-white">Y</p>
          <p>Sort</p>
        </div>

        <div className="bottom-btn">
          <p className="bg-circle-white">+</p>
          <p>See Evaluation</p>
        </div>

        <div className="bottom-btn">
          <p className="bg-circle-white">B</p>
          <p>Back</p>
        </div>
      </div>
    </BottomBarStyles>
  );
}
