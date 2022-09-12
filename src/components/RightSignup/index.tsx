import styled from "styled-components";
import {useState} from "react";

import { FcGoogle } from "react-icons/fc";
import {IoIosArrowRoundBack} from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Input from "../shared/Input";
import {
  FormDiv,
  InputDiv,
  SignupDiv,
  ConsentDiv,
  Check,
  Para,
  OrDiv,
  GoogleDiv,
  IconDiv,
  LoginDiv,
  Button,
  OrP,
  A,
  HeadingDiv,
  HeadDiv,
  BackDiv,
  BottomPara,
  TermsA,
} from "./styles";

const ShowIcon = styled(FaRegEye)`
  width: 100%;
  color: grey;
  opacity:60%;
  @media screen and(max-width:400px) {
    width: 10%;
  }
`;
const HideIcon = styled(FaRegEyeSlash)`
  width: 100%;
  color: grey;
  opacity:60%;
  @media screen and(max-width:400px) {
    width: 50%;
  }
`;

const GoogleIcon = styled(FcGoogle)`
height:100%;
width:100%;
@media screen and (max-width:850px){
  height:90%;
  width:90%;
}
`
const CustomB = styled.b`
font-weight:550;
@media screen and (max-width:850px){
  font-size:small;
}
`
const ShowHideDiv = styled.div`
width:13%;
height:40%;
margin-top:3.5%;
@media screen and (max-width:900px){
  margin-top:7%;
  margin-left:3%;
}
@media screen and (max-width:600px){
  margin-top:4.5%;
  margin-left:0;
}
@media screen and (max-width:400px){
  margin-top:7%;
}
`

const RightSignup = () => {
  const [show,setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  }
  return (
    <FormDiv page="signup">
      <HeadingDiv>
        <BackDiv>
          <IoIosArrowRoundBack size="30px" />
        </BackDiv>
        <HeadDiv>
          <b>Sign Up</b>
        </HeadDiv>
      </HeadingDiv>
      <InputDiv>
        <Input type="text" placeholder="Name" />
      </InputDiv>
      <InputDiv>
        <Input type="text" placeholder="Email" />
      </InputDiv>
      <InputDiv>
        <Input type={show ? "text" : "password"} placeholder="Password" />
        <ShowHideDiv>
          {show ? (
            <HideIcon onClick={showHandler} />
          ) : (
            <ShowIcon onClick={showHandler} />
          )}
        </ShowHideDiv>
      </InputDiv>
      <ConsentDiv>
        <Check type="checkbox" />
        <Para>
          By signing up, you agree to the
          <TermsA href="/terms"> Terms of Service and Privacy Policy</TermsA>
        </Para>
      </ConsentDiv>
      <SignupDiv>
        <Button>Sign Up </Button>
      </SignupDiv>
      <OrDiv>
        <OrP>
          <b>Or with</b>
        </OrP>
      </OrDiv>
      <GoogleDiv>
        <IconDiv>
          <GoogleIcon />
        </IconDiv>
        <Para>
          <CustomB>Sign Up with Google</CustomB>
        </Para>
      </GoogleDiv>
      <LoginDiv>
        <BottomPara>
          Already have an account? <A href="/login">Login</A>
        </BottomPara>
      </LoginDiv>
    </FormDiv>
  );
};

export default RightSignup;
