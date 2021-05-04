import React, { Component } from 'react'
import MessengerCustumerChat from 'react-messenger-customer-chat';

export default class Messenger extends Component {
    render() {
        return (
            <div>
                <MessengerCustumerChat pageId="101074078806582" appId="509972076678422" />
            </div>
        )
    }
}
