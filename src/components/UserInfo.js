import React from 'react';

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
      login,
      location,
      created_at,
    },
  } = props;

  return (
    <div className="container">
      <h1 className="profileTitle">{login}</h1>
      <hr />

      <div className="profileInfo">
        <div className="avatarArea">
          <img className="avatar" src={avatar_url} alt="avatar" />
          <a className="profileLink" href={html_url} target="_blank">
            Go to profile
          </a>
        </div>

        <div className="infoArea">
          <div className="badges">
            <span className="badge">Public repos: {public_repos}</span>
            <span className="badge">Public gists: {public_gists}</span>
            <span className="badge">Followers: {followers}</span>
            <span className="badge">Following: {following}</span>
          </div>

          <div className="details">
            <span className="detail">Company: {company}</span>
            <span className="detail">Website/Blog: {blog}</span>
            <span className="detail">Location: {location}</span>
            <span className="detail">Member since: {created_at}</span>
          </div>
        </div>
      </div>

      <h1 className="reposTitle">Repositories</h1>
      <hr />

      <div className="reposInfo">
        {repos.map(repo => (
          <div className="repo" key={repo.id}>
            <a href={repo.html_url} target="_blank">
              <span className="repoName">Name: {repo.name}</span>
            </a>
            <div className="items">
              <span className="item watchers">Watchers: {repo.watchers_count}</span>
              <span className="item stars">Stars: {repo.stargazers_count}</span>
              <span className="item forks">Forks: {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
