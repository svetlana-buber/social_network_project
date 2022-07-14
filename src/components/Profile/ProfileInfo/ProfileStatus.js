import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode : false,
        status : this.props.status
    }

    activateEditeMode = () => {
        this.setState ({
            editMode : true
        })
    }

    deactivateEditeMode = () => {
        this.setState ({
            editMode : false
        })
        this.props.updateStatus(this.state.status);
    }

    changeStatus = (e) => {
        this.setState ({
            status : e.currentTarget.value
        })
        // this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status) {
            this.setState ({
                status : this.props.status
            })
        }
    }

    render (){
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input autoFocus = {true} onBlur={this.deactivateEditeMode} onChange={this.changeStatus} value = {this.state.status}/>
                        </div>
                    }
                </div>
            </>
        )

    }
}

export default ProfileStatus;