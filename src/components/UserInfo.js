import React from 'react';

const profileInfo = {
  display: 'flex',
};

const avatarArea = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '30%',
  padding: '1rem',
};

const avatar = {
  width: '250px',
  height: '250px',
  borderRadius: '6px',
};

const infoArea = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '70%',
  padding: '1rem',
};

const badges = {
  display: 'flex',
  marginBottom: '2rem',
  justifyContent: 'center',
};

const badge = {
  backgroundColor: '#e06b6b',
  color: '#fff',
  borderRadius: '8px',
  margin: '0 0.5rem',
  padding: '0.6rem',
};

const details = {
  display: 'flex',
  margin: '0.5rem',
};

const detail = {
  listStyleType: 'none',
  borderBottom: '1px solid #a34444',
  color: '#a34444',
  padding: '0.5rem',
  marginTop: '0.5rem',
};

const reposInfo = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
};

const repoStyle = {
  padding: '0.5rem',
  width: '100%',
  display: 'flex',
  borderBottom: '1px solid #a34444',
  justifyContent: 'space-between',
};

const item = {
  marginRight: '1rem',
  color: '#a34444',
  padding: '0.5rem',
  marginTop: '0.5rem',
};

const UserInfo = props => {
  const {
    repos,
    userData: {
      followers,
      avatar_url,
      html_url,
      public_repos,
      public_gists,
      following,
      company,
      blog,
      location,
      created_at,
    },
  } = props;

  return (
    <div className="container">
      <div style={profileInfo}>
        <div style={avatarArea}>
          <img style={avatar} src={avatar_url} alt="avatar" />
          <a href={html_url} target="_blank">
            Go to profile
          </a>
        </div>
        <div style={infoArea}>
          <div style={badges}>
            <span style={badge}>Public repos: {public_repos}</span>
            <span style={badge}>Public gists: {public_gists}</span>
            <span style={badge}>Followers: {followers}</span>
            <span style={badge}>Following: {following}</span>
          </div>
          <div style={details}>
            <ul>
              <li style={detail}>Company: {company}</li>
              <li style={detail}>Website/Blog: {blog}</li>
              <li style={detail}>Location: {location}</li>
              <li style={detail}>Member since: {created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={reposInfo}>
        {repos.map(repo => (
          <div style={repoStyle} key={repo.id}>
            <span style={item}>Name: {repo.name}</span>
            <span style={item}>Stars: {repo.stargazers_count}</span>
            <span style={item}>Watchers: {repo.watchers_count}</span>
            <span style={item}>Forks: {repo.forks_count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
