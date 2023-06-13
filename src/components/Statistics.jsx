import styled from "styled-components";
import Brand_Recognition from "../images/icon-brand-recognition.svg";
import Detailed_Records from "../images/icon-detailed-records.svg";
import Fully_Customizable from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <Container>
      <Info>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </Info>

      <Wrapper>
        <Card>
          <div>
            <img src={Brand_Recognition} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil condience in your content.
          </p>
        </Card>

        <Card>
          <div>
            <img src={Detailed_Records} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </Card>

        <Card>
          <div>
            <img src={Fully_Customizable} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </Card>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 8rem;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  text-align: center;
  padding: 0 25%;
  
  @media screen and (max-width: 768px) {
    padding: 0 10%;
  }

  p {
    margin-top: 0.25rem;
    color: var(--primary-cyan);
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.5rem 1rem;
  margin-top: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: auto;
  width: 300px;
  position: relative;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.25);
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    div {
      left: calc(50% - 1rem - 1rem - 1px);
      background-color: var(--primary-violet);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: var(--secondary-darkViolet);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    padding: 1rem;
    top: -35px;
    left: 20px;
    transition: all 250ms ease-in;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 15px;
    margin-bottom: 0.6rem;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
  }
`;

export default Statistics;
