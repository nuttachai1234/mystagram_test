import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const unsplash = new Unsplash({
    accessKey: "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4",
});
export default function SearchPhotos() {

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);


    const searchPhotos = async (e) => {
        e.preventDefault();

        unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                // console.log(json);
                setPics(json.results);
            });

    };

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                {" "}
                <label className="label" htmlFor="query">
                    {" "}
          📷
        </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
        </button>
            </form>
            <from >
                
                    {pics.map((pic) => (
                        <div  key={pic.id}>
                            <div className="photo__header"  >
                                <div className="photo__header-color" >
                                    <a href={"/profile/" + pic.user.username} >
                                        <img
                                            className="photo__avatar"
                                            alt={pic.alt_description}
                                            src={pic.user.profile_image.medium}
                                        ></img>
                                    </a>
                                </div>
                                <div className="photo__header-column">
                                    <span className="photo__username"><a href={"/profile/" + pic.user.username} >{pic.user.username}</a></span>
                                </div>
                            </div>
                            <div className="photo__file-container">
                                <img className="photo__file"  alt={pic.alt_description} src={pic.urls.raw}></img>
                            </div>
                            <div className="photo__info">
                                <div className="photo__icons">
                                    <span className="photo__icon"><FontAwesomeIcon icon={faHeart}/></span> 
                                    <span className="photo__icon"><FontAwesomeIcon icon={faComment}/></span> <span className="photo__icon"><FontAwesomeIcon icon={faShare}/></span>
                                </div>
                                <span className="photo__likes">{pic.likes} likes</span>
                                <div className="photo__comments">
                                    <div className="photo__comment">
                                        <span className="photo__comment-author">
                                            <a href={"/profile/" + pic.user.username}>{pic.user.username}</a>
                                        </span>{pic.alt_description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}{" "}
                
            </from>

        </>
    );
}
