import axios from "axios";
import React from "react";


class Login extends React.Component{

    state = {
        credentials: {
            username:'',
            password:''
        }
    }

    handleChange = (evt) => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        })

    }

    login = (evt) =>{
        evt.preventDefault()

        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res =>{
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err =>{
                console.error(err)
            })
    }

    render() {
        return (<div className='login-component'>           
            <form onSubmit={this.login}>
                <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />

                <input
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />

                <input
                    type='submit'
                    name='login'
                    value='Login'
                />

            </form>
        </div>)
    }
}

export default Login;