import styled from "styled-components";
export const style = {
  CardDiv: styled.div`
    margin-top: 0.5%;
    margin-bottom: 0.5%;
    display: flex;
    background-color: white;
    box-shadow: 0 0 5px grey;
    flex-direction: column;
    border-radius: 7%;
    cursor: pointer;
    padding: 5px 5px 5px 5px;
    &:hover {
      box-shadow: 0 0 15px grey;
    }
    @media screen and (min-width: 1100px) and(max-width:1550px) {
      width: 20%;
    }
    @media screen and(max-width:1050px) {
      width: 50%;
    }
  `,
  OtherDiv: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  ImageDiv: styled.div`
    width: 100%;
  `,
  Image: styled.img`
    height: 90%;
    width: 90%;
    margin-left: 5%;
    border-radius: 50%;
  `,
  NameDiv: styled.div`
    width: 100%;
    text-align: center;
    font-size: 25px;
    padding-top: 0;
    padding-bottom: 0;
    color: #818582;
  `,
  IdDiv: styled.div`
    width: 100%;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
    font-weight: 500;
  `,
  FollowDiv: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  `,
  Numb: styled.b`
    color: red;
  `,
  FollowerDiv: styled.div`
    width: 50%;
    text-align: left;
  `,
  FollowingDiv: styled.div`
    width: 50%;
    text-align: right;
  `,
  RepoDiv: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3px;
  `,
};
