import { useState, useEffect } from "react";

import { style } from "./styles";

interface UserCardType {
  key: string;
  url: string;
}

const UserCard = (props: UserCardType) => {
  const [userDetails, setUserDetails] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      await setUserDetails(data);
    };
    fetchUserData();
  }, []);

  const navigateProfile = () => {
    window.open(userDetails.html_url);
  };

  return (
    <style.CardDiv onClick={navigateProfile}>
      <style.ImageDiv>
        <style.Image src={userDetails.avatar_url} />
      </style.ImageDiv>
      <style.OtherDiv>
        <style.NameDiv>
          <b>{userDetails.name === null ? "---" : userDetails.name}</b>
        </style.NameDiv>
        <style.IdDiv>
          {userDetails.login}
        </style.IdDiv>
        <style.RepoDiv>
          <div>
            <style.Numb>{userDetails.public_repos} </style.Numb>
            <b>Repositories</b>
          </div>
        </style.RepoDiv>
        <style.FollowDiv>
          <style.FollowerDiv>
            <style.Numb>
              {userDetails.followers >= 1000
                ? (userDetails.followers / 1000).toFixed(1)
                : userDetails.followers}
              {userDetails.followers >= 1000 ? "k" : ""}
            </style.Numb>{" "}
            <b>followers</b>
          </style.FollowerDiv>
          <style.FollowingDiv>
            <style.Numb>{userDetails.following}</style.Numb> <b>Following</b>
          </style.FollowingDiv>
        </style.FollowDiv>
      </style.OtherDiv>
    </style.CardDiv>
  );
};

export default UserCard;
