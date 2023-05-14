import { host } from "../config/server";

export const login = ({username, password}: {username: string, password: string}) => (
  fetch(host + "/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username, password 
    })
  })
)
