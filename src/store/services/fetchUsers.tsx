import {GITHUB_USERS} from '../../utils/api';
const fetchUsers = async() => {
  const response = await fetch(GITHUB_USERS);
  const data = await response.json();
  return data;
}

export default fetchUsers;
