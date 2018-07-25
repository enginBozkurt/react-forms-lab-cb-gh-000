import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
     username: '',
     password: '',
   };
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
