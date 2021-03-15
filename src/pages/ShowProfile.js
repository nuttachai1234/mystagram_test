import React from "react";
import Profile from "../component/UserProfileFrom";
import PhotoList from "../component/PhotoListFrom";

const ShowProfile = (props) => {
    return (
        <main>
            <Profile username={props.match.params.username} />
            <PhotoList username={props.match.params.username} />
        </main>
    );
};

export default ShowProfile;
