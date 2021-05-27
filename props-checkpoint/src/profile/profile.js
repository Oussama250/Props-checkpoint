import React from "react";


const profile = ({fullName, bio, profession, fonction, children}) => {
    // const handleAlert = e => console.log(typeof fullName);
    const handleAlert = e => fonction(fullName);

    return (    
    <div>
        <img src={children} alt="user.png" />
        <p>
            {fullName}
        </p>
        <p>
            {bio}
        </p>
        <p>
            {profession}
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