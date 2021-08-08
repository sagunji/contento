import styled from 'styled-components';

const ScheduleText = styled.span`
  font-weight: bold;
`;

const MessageWrapper = styled.div`
  margin-top: 50px;
`

const Message = () => {
  return (
    <MessageWrapper>
      <p><ScheduleText>Schedule 2 more articles</ScheduleText></p>
      <p>To fill this week.</p>
    </MessageWrapper>
  )
};

export default Message;

