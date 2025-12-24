import styled from 'styled-components';

const ScheduleText = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const SubScheduleText = styled.span`
  font-size: 16px
`;

const MessageWrapper = styled.div`
  margin-top: 50px;
`

const Message = () => {
  return (
    <MessageWrapper>
      <p><ScheduleText>Schedule 2 more articles</ScheduleText></p>
      <p><SubScheduleText>To fill this week.</SubScheduleText></p>
    </MessageWrapper>
  )
};

export default Message;

