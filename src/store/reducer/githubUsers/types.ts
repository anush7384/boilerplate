import { fetchUserFailure, fetchUserSuccess } from "../../actions/index";

export interface GithubUsersState {
  users: UsersFetchType[];
  error: string;
  spinner: boolean;
}

export interface UsersFetchType {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

type set = {
  type: "FETCH_USERS_SUCCESS";
  payload: {
    data: UsersFetchType[];
  };
};

type fail = {
  type: "FETCH_USERS_FAILURE";
  payload: {
    message: string;
  };
};

export type GithubUsersActions = set | fail;


// export type GithubUsersActions =
//    ReturnType<typeof fetchUserSuccess|typeof fetchUserFailure>
//   ;
