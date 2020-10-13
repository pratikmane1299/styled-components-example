import React from "react";

import {
  ProfileContainer,
  ProfileDetails,
  ProfileImageContainer,
  ProfileImage,
  ProfileInfo,
  ProfileUsernameContainer,
  EditProfileButton,
  Username,
  ProfileMeta,
  Paragraph,
  ProfileBioContainer,
  ProfileName,
  Bio,
  ImagesContainer
} from "./style";

import { PostImage } from '../../components';

const feedsource = [
  {
    source:
      'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
    id: 0,
  },
  {
    source:
      'https://images.pexels.com/photos/4505526/pexels-photo-4505526.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    id: 1,
  },
  {
    source:
      'https://images.pexels.com/photos/3964743/pexels-photo-3964743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    id: 2,
  },
  {
    source:
      'https://images.pexels.com/videos/1426695/free-video-1426695.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
    id: 3,
  },
  {
    source:
      'https://images.pexels.com/photos/2128334/pexels-photo-2128334.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=350&w=275',
    id: 4,
  },
];

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileImageContainer>
          <ProfileImage src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_ohc=Ozbg7VUJ-mkAX83JRFh&oh=ad2799993145b57879fca1a02f299aa8&oe=5FADEC0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
        </ProfileImageContainer>
        <ProfileInfo>
          <ProfileUsernameContainer>
            <Username>johnDoe77</Username>
            <EditProfileButton>Edit Profile</EditProfileButton>
          </ProfileUsernameContainer>
          <ProfileMeta>
            <Paragraph>
              <strong>5</strong> posts
            </Paragraph>
            <Paragraph>
              <strong>833</strong> followers
            </Paragraph>
            <Paragraph>
              <strong>27</strong> following
            </Paragraph>
          </ProfileMeta>
          <ProfileBioContainer>
            <ProfileName>John Doe</ProfileName>
            <Bio>FULL TIME REACT DEVELOPER, PART TIME GAMER</Bio>
          </ProfileBioContainer>
        </ProfileInfo>
      </ProfileDetails>
      <ImagesContainer>
        {
          feedsource.map(data => {
            return <PostImage key={data.id} image={data.source} />
          })
        }
      </ImagesContainer>
    </ProfileContainer>
  );
}
