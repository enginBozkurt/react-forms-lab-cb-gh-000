import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
     username: '',
     password: '',
   };
  }

  handleLogin(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event){
    const username = this.state.username;
    const password = this.state.password;
    const submit = this.props.onSubmit;
    event.preventDefault();
    (username && password) ? submit({username, password}) : alert('Error');
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
