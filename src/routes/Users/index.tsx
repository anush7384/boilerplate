import {Fragment,useEffect} from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components';

import { ClipLoader } from 'react-spinners';
import UserCard from './../../components/UserCard/index';
import { UsersFetchType } from '../../store/reducer/githubUsers/types';
import { fetchUserRequest } from "../../store/actions";

interface UsersPropsType{
    request:()=>void,
    users:UsersFetchType[],
    spinner:boolean,
}

const MainDiv = styled.div`
  background-color: #e6e8e6;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const SpinDiv = styled.div`
  display:flex;
  justify-content:center;
`

const Div = styled.div`
margin-top:15%;
`

const Users = (props:UsersPropsType)=>{
    useEffect(()=>{
        props.request();
    },[]);
    return (
      <Fragment>
        {props.spinner ? (
          <SpinDiv>
            <Div>
              <ClipLoader size="120px" />
            </Div>
          </SpinDiv>
        ) : (
          <MainDiv>
            {props.users.map((user: UsersFetchType, index: number) => {
              return <UserCard key={user.id} url={user.url} />;
            })}
          </MainDiv>
        )}
      </Fragment>
    );
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        request: () => dispatch(fetchUserRequest()),
    }
}

const mapStateToProps =(state:any) => {
    return{
        users:state.githubUsers.users,
        spinner:state.githubUsers.spinner,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
