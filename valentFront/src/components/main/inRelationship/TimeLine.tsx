import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  width: 25%;
  top: 10%;
  right: 10%;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TimelineItem = styled.div`
  display: table;
  margin: 0 auto;
  align-items: center;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: white;
`;

const Line = styled.div`
  flex-grow: 1;
  width: 10px;
  height: 70px;
  background-color: white; 
  margin: 2%;
`;
const CreateEventButton = styled.button`
  width: 30%;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: white;
  font-size: large;
`;
export const TimeLine = () => {
  const events = [
    { text: 'Evento 1' },
    { text: 'Evento 2' },
    { text: 'Evento 3' },
  ];

  return (
    <Container>
        {events.map((event, index) => (
      <EventContainer>
          <TimelineItem key={index}>
            <Circle />
          </TimelineItem>
            <Line />
        </EventContainer>
        ))}
        <CreateEventButton> adicionar evento </CreateEventButton>
    </Container>
  );
};