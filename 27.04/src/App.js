import PageBoard from './components/PageBoard';
import logo from './logo.svg';
import evented from "./upcoming-events.json";
import styled from "styled-components";


const Title = styled.h1`
color: #000;
font-family: "Helvetica Now Display";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 106px; /* 91.379% */
  text-align: center;
  background: aqua;
  border: 1.5px solid blue;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background: rgb(163, 160, 160);
border: 1px solid rgb(108, 106, 106);`

function App() {
  return (
    <>
    <Title>24th Core Worlds Coalition Conference</Title>

    <Section>
      {evented.map((e, index) => (
        <PageBoard key={index} events={e} />
      ))}
    </Section>
    </>
  );
}

export default App;
