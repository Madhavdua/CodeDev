import React, {useEffect} from 'react'



const Alert = (props) => {
    return (
        <div>
            <div className={`alert alert-${props.color} my-1`} role="alert">
                {props.message}
            </div>
        </div>
    )
}
Alert.defaultProps={
    message:"It is an Alert",
    color:"danger"
}

export default Alert