import React, { useState, useEffect } from "react";
import axios from 'axios';
/*import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

const UserProfileFrom = ({ username }) => {

    //key จาก unspash
    const accessKey = "oU8z-apsIFDAVlEJDT_mLBTcczi_w5g5ZppeVkHZ_jI"  
    //เรียก api ด้วย username 
    const apiuser = "https://api.unsplash.com/users/" + username + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;


    const [pics, setPics] = useState([]);
    useEffect(() => {
        axios.get(apiuser).then((response) => {
            console.log(response);
            setPics(response.data);
        });
    }, [username])
    return (
        <form>
            <div className="row">
                {pics.map(pics => (
                    <div key={pics.id}>
                        <section className="photo">
                            <div className="card-list" tabindex="0">
                                <img src={pics.urls.small} className="gallery-image" alt=""></img>
                            </div>
                        </section>
                    </div >
                ))}
            </div>
        </form >
    );
}
export default UserProfileFrom;