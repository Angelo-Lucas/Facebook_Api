import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
    };



    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div>
                    <div>
                        <img id="foto" width='25px'src={this.state.picture} alt={this.state.name}/>
                    </div>
                    <div>
                        <p textColor='black'>{this.state.name}</p>
                    </div>
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
            appId = "509972076678422"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
                />
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
