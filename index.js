require('dotenv').config();
const express = require('express')
const app = express()
// const port = 3000
const git_response = {
    "login": "BhanuPratapJha",
    "id": 97533267,
    "node_id": "U_kgDOBdA9Uw",
    "avatar_url": "https://avatars.githubusercontent.com/u/97533267?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/BhanuPratapJha",
    "html_url": "https://github.com/BhanuPratapJha",
    "followers_url": "https://api.github.com/users/BhanuPratapJha/followers",
    "following_url": "https://api.github.com/users/BhanuPratapJha/following{/other_user}",
    "gists_url": "https://api.github.com/users/BhanuPratapJha/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/BhanuPratapJha/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/BhanuPratapJha/subscriptions",
    "organizations_url": "https://api.github.com/users/BhanuPratapJha/orgs",
    "repos_url": "https://api.github.com/users/BhanuPratapJha/repos",
    "events_url": "https://api.github.com/users/BhanuPratapJha/events{/privacy}",
    "received_events_url": "https://api.github.com/users/BhanuPratapJha/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-01-11T14:33:59Z",
    "updated_at": "2025-03-29T19:27:30Z"
  };
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('<h1>in login page</>');
})
app.get('/github',(req,res)=>{
    res.json(git_response);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})