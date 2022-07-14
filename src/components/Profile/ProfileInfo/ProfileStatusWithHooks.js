import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {   

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true);
    }
    const deactivateEditeMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditeMode}>{props.status||"--------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input autoFocus = {true} onBlur={deactivateEditeMode} onChange={onStatusChange} value = {status}/>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatusWithHooks;