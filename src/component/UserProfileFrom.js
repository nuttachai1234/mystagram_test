import React, { useState } from 'react';
import { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4",
  });
const UserProfileFrom = ({username}) =>{

    const[userprofile , setUserprofile] = useState([]);

    unsplash.userprofile
    .profile(userprofile)
    .then(toJson)
    .then((json) =>{
        setUserprofile(json.results);
    });

    return(
        

    );


};

export default UserProfileFrom;