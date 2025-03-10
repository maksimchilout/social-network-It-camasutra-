import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false)
    // let [editMode, setEditMode] = stateWithSetState
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Sttus: </b><span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>

            }
        </div>
    )
}

export default ProfileStatusWithHooks