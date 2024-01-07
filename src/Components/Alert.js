import React from 'react'



const Alert = (props) => {
    return (
        <div className='position-absolute ' style={{zIndex:2, left:"25vw",top:"4vh",width:"50vw"}}>
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