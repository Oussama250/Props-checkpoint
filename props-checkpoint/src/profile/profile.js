import React from "react";


const profile = (props) => {
    const handleAlert = e => console.log(props.fonction("aaa"));
    //const handleAlert = e => props.fonction("Oussama250");

    return (    
    <div>
        <img src={props.children} alt="user.png" />
        <p>
            {props.fullName}
        </p>
        <p>
            {props.bio}
        </p>
        <p>
            {props.profession}
        </p>
        <div>
            <button onClick={handleAlert} style={{ width: '50%', height: '30px', border: 'solid 2px', borderRadius: '3px', fontSize: '12' }} >
                click here
            </button>
        </div>
    </div>
    );
}

export default profile;