const HOST = 'http://localhost:5000';


function get_user_data(user_name) {
  // Bring user data from server.
  return fetch(`${HOST}/user/${user_name}`, { method: 'GET' })
    .then(res => res.json())
}


export default get_user_data;
