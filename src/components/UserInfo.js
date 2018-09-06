import React from 'react';


const profileInfo = {
  display: 'flex',
}

const avatarArea = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '30%',
  padding: '1rem',
}

const avatar = {
  width: '250px',
  height: '250px',
  borderRadius: '6px',
}

const infoArea = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '70%',
  padding: '1rem',
}

const badges = {
  display: 'flex',
  marginBottom: '2rem',
  justifyContent: 'center',
}

const details = {
  display: 'flex',
  margin: '0.5rem',
}

const reposInfo = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
}

const repo = {
  padding: '0.5rem',
  width: '100%',
  display: 'flex',
  borderBottom: '1px solid #a34444',
  justifyContent: 'space-between',
}

const User = (props) => {
  const { avatar_url, html_url, public_repos, public_gists, followers, following, company, blog, location, created_at } = props.userData;


  return (
    <div className='container'>
      <div style={profileInfo}>
        <div style={avatarArea}>
          <img style={avatar} src={avatar_url} alt='avatar' />
          <a href={`${html_url}`} target='_blank'>Go to profile</a>
        </div>
        <div className='infoArea'>
          <div className='badges'>
            <span>Public repos: {public_repos}</span>
            <span>Public gists: {public_gists}</span>
            <span>Followers: {followers}</span>
            <span>Following: {following}</span>
          </div>
          <div className='details'>
            <ul>
              <li>Company: {company}</li>
              <li>Website/Blog: {blog}</li>
              <li>Location: {location}</li>
              <li>Member since: {created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='reposInfo'>
        {props.repos.map(repo =>
          <div className='repo' key={repo.id}>
            <span>Name: {repo.name}</span>
            <span>Stars: {repo.stargazers_count}</span>
            <span>Watchers: {repo.watchers_count}</span>
            <span>Forks: {repo.forks_count}</span>
          </div>)}
      </div>
    </div>
  );
}

export default User;
