import styled from 'styled-components';
export const ListItem = styled.li`
  display: flex;
  gap: 16px;
  padding: 10px;
  box-shadow: 2px 2px 10px;
  align-items: center;
`;
export const Status = styled.span`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
    width 40px;
`;
export const Name = styled.span`
  font-size: 20px;
`;
