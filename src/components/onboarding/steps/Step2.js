import React from 'react';

import avatar from './../../../assets/img/avatar.svg'

export default class Step2 extends React.Component {

    constructor(props) {
        super(props);
    }

    _setNodeName(e) {
        return this.props.setNodeName(e.target.value)
    }

    render() {
        return (
            <div className="container-step__onboarding">
                <div className="section-image__onboarding">
                    <img src={avatar}/>
                    <div className="nickname-area__onboarding">
                        <input className="nickname-input__onboarding" placeholder="Anonymous Golem" onChange={::this._setNodeName}/>
                    </div>
                </div>
                <div className="desc__onboarding">
                    <span>First, please name your node. Adding an avatar is optional, but can help
                    to build trust, an important part 
                    of the Golem system.</span>
                </div>
            </div>
        )
    }
}
