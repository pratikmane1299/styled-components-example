import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const ProfileContainer = styled(Container)`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileDetails = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProfileImageContainer = styled.div`
  width: 150px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 100%;
  height: 150px;
  padding: 5px;
`;

export const ProfileInfo = styled.div`
  margin-left: 4.5rem;
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const ProfileUsernameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const EditProfileButton = styled.div`
  margin-left: 1.2rem;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #262626;
  cursor: pointer;
  padding: 5px 9px;
  font-size: 14px;
  font-weight: 600;
  text-transform: inherit;
`;

export const Username = styled.p`
  font-size: 25px;
  font-weight: 300;
  color: rgb(93 88 88);
`

export const ProfileMeta = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #262626;
  letter-spacing: 0.025rem;
`;

export const ProfileBioContainer = styled.div`
  margin-top: 1rem; 
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02rem;
`;

export const Bio = styled.span`
  margin-top: 0.5rem;
  font-size: 16px;
  color: #262626;
  letter-spacing: 0.025rem;
  line-height: 1.6;
`;

export const ImagesContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
