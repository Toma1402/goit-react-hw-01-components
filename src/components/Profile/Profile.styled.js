import styled from 'styled-components';
export const ProfileBlock = styled.div`
  text-align: center;

  width: 250px;
  margin: 10px auto;
  border: 1px solid black;
`;
export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Tag = styled.p`
  color: grey;
  margin-bottom: 5px;
`;
export const ProfileInfo = styled.div`
  margin-bottom: 5px;
`;
export const Location = styled.p`
  font-style: italic;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(220, 216, 211);
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;
