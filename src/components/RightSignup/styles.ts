import styled from "styled-components";

interface formProps{
  page:"login"|"signup";
}

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-radius: 5px;
  padding-bottom: 2%;
  margin-top: ${(props:formProps)=> props.page === "login"? "25%":"10%"};
  font-family: "Inter", sans-serif;
  @media screen and (max-width: 600px) {
    margin-left: 50%;
    width: 150%;
  }
  @media screen and (max-width: 500px) {
    // margin-top: 45%;
    margin-top:${(props:formProps)=> props.page === "login"? "65%":"45%"};
  }
  @media screen and (max-width: 400px) {
    width: 200%;
    margin-left: 17%;
  }
`;

export const InputDiv = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 5%;
  border: 1px solid #f2f2f2;
  border-radius: 15px;
  display:flex;
  flex-direction:row;
`;

export const SignupDiv = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 6%;
  @media screen and (max-width: 900px) {
    margin-top: 10%;
  }
  @media screen and (max-width: 700px) {
    margin-top: 12%;
    height: 45px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 4%;
    height: 40px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 4%;
    height: 35px;
  }
`;

export const ConsentDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 8%;
  height: 9%;
  margin-bottom: 0%;
  @media screen and (max-width: 400px) {
    margin-top: 4%;
    height: 13%;
  }
`;
export const Check = styled.input`
  margin-bottom: 3%;
  @media screen and (max-width: 960px) {
    margin-bottom: 12%;
  }
  @media screen and (max-width: 860px) {
    margin-bottom: 14%;
  }
  @media screen and (max-width: 750px) {
    margin-bottom: 27%;
  }
  @media screen and (max-width: 670px) {
    margin-bottom: 13%;
  }
  @media screen and (max-width: 580px) {
    margin-bottom: 2%;
  }
  @media screen and (max-width: 295px) {
    margin-bottom: 10%;
  }
`;

export const Para = styled.div`
  word-wrap: break;
  font-size: medium;
  margin-left: 2%;
  height: 100%;
  margin-top: 2%;
  @media screen and (max-width: 700px) {
    font-size: medium;
  }
  @media screen and (max-width:500px){
    font-size:small;
    margin-top:2%;
  }
  @media screen and (max-width:700px){
    font-size:small;
  }
`;

export const BottomPara = styled.p`
color:grey;
@media screen and (max-width:850px){
  font-size:small;
}
`

export const OrDiv = styled.div`
  height: 5%;
  width: 100%;
  text-align: center;
  color: #91919;
  margin-top:3%;
  @media screen and (max-width: 400px) {
    margin-top: 4%;
  }
  @media screen and (max-width:395px){
    margin-top:0%;
  }
`;
export const GoogleDiv = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 3%;
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: white;
  @media screen and (max-width: 700px) {
    padding-top: 3%;
  }
  @media screen and (max-width: 600px) {
    padding-top: 1.5%;
  }
  @media screen and (max-width: 400px) {
    margin-left: 0;
  }
  @media screen and (max-width: 350px) {
    padding-top: 1.5%;
  }
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;

export const IconDiv = styled.div`
  margin-left: 25%;
  margin-top: 1%;
  height: 30px;
  @media screen and (max-width: 1250px) {
    margin-left: 20%;
  }
  @media screen and (max-width: 1070px) {
    margin-left: 18%;
  }
  @media screen and (max-width: 960px) {
    margin-left: 15%;
  }
  @media screen and (max-width: 900px) {
    margin-left: 8%;
    height: 28px;
  }
  @media screen and (max-width:850px){
    margin-left:14%;
  }
  @media screen and (max-width: 700px) {
    height: 25px;
  }
  @media screen and (max-width: 600px) {
    height: 23px;
    margin-left: 24%;
  }
  @media screen and (max-width: 500px) {
    margin-left: 17%;
  }
  @media screen and (max-width: 400px) {
    height: 20px;
    margin-left: 22%;
  }
`;
export const LoginDiv = styled.div`
  height: 15%;
  width: 100%;
  text-align: center;
  margin-top: 3%;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: #5352ed;
  font-size: large;
`;

export const OrP = styled.p`
  color: #91919f;
  @media screen and (max-width:400px){
    font-size:small;
  }
  @media screen and (max-width:395px){
    margin-top:4%;
  }
  @media screen and (max-width:850px){
    font-size:15px;
  }
`;

export const A = styled.a`
  color: #5352ed;
`;
export const HeadingDiv = styled.div`
  width: 100%;
  height:40px;
  display:flex;
  flex-direction:row;
  @media screen and (width>600px){
    visibility:hidden;
  }
  `;
  
  export const HeadDiv = styled.div`
  width:70%;
  font-family:"Inter", sans-serif;
  height:100%;
  text-align:center;
  margin-top:1%;

`
export const BackDiv = styled.div`
  width:10%;
  height:100%;
`

export const TermsA = styled.a`
color:#5352ED;
text-decoration:none;
`
