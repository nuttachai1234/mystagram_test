import React, { useState, useEffect } from "react";
import axios from 'axios';
/*import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

const UserProfileFrom = ({ username }) => {
    //key จาก unspash
    const accessKey = "oU8z-apsIFDAVlEJDT_mLBTcczi_w5g5ZppeVkHZ_jI"
    //เรียก api ด้วย username 
    const apiuser = "https://api.unsplash.com/search/users?page=1&query=" + username + "&per_page=1&client_id=" + accessKey;

    const [userprofile, setUserprofile] = useState([]);
    useEffect(() => {
        axios.get(apiuser).then((response) => {
            console.log(response);
            setUserprofile(response.data.results);
        });
    }, [username])
    return (
        <form>
            <div class="profile" >
                {userprofile.map(user =>
                    <div key={user.id}>
                        <p class="profile-image" ><img src={user.profile_image.medium} class="profile-image" alt="Avatar"></img>
                            <h2>{user.id}</h2></p>
                        <hr></hr>
                        <div>
                            <p>{user.bio}</p>
                            <p><span>{user.total_photos}</span>photos</p>
                            <p><span>{user.total_likes}</span>  Like</p>
                        </div>
                        <hr></hr>
                    </div>
                )}
            </div>

        </form>
    );
}
export default UserProfileFrom;