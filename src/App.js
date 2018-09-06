import React, { Component, Fragment } from 'react';
import debounce from 'lodash.debounce';
import TopBar from './components/TopBar';
import SearchForm from './components/SearchForm';
import Alert from './components/Alert';
import UserInfo from './components/UserInfo';

class App extends Component {
  state = {
    userData: {},
    message: '',
    length: '',
    showProfile: false,
  };

  debounceEvent = (...args) => {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  };

  fetchUser = async e => {
    const { value: name } = e.target;

    const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
    const url = `https://api.github.com/users/${name}?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`;
    const response = await fetch(url);
    const data = await response.json();

    const reposURL = `https://api.github.com/users/${name}/repos?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`;
    const reposResponse = await fetch(reposURL);
    const userRepos = await reposResponse.json();

    let showProfile;
    if (e.target.value !== '' && data.message !== 'Not Found') {
      showProfile = true;
    }

    this.setState({
      userData: data,
      repos: userRepos,
      message: data.message,
      length: e.target.value,
      showProfile,
    });
  };

  render() {
    const { message, showProfile, length, userData, repos } = this.state;

    return (
      <Fragment>
        <TopBar />
        <SearchForm fetchUser={this.fetchUser} debounceEvent={this.debounceEvent} />
        {message === 'Not Found' && length !== '' && <Alert message="User Not Found" />}
        {showProfile && <UserInfo repos={repos} userData={userData} />}
      </Fragment>
    );
  }
}

export default App;
