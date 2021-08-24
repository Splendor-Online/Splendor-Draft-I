const SCHEME = 'http://'
const HOST = 'localhost:5000';


function get_user_nickname(user_id) {
    // Bring user data from server.
    const scheme = SCHEME;
    const host = HOST;
    const path = `/user_data/${user_id}`;

    return fetch(scheme+host+path)
      .then(res => res.json())
}


export default get_user_nickname;
