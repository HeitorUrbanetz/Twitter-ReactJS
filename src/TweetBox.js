import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import {auth, db} from './firebase'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    //Cancel the refresh
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Heitor Urbanetz',
      username: 'heior.mp3',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://avatars.githubusercontent.com/u/96732484?s=400&u=658379e79c3088df16ae859e145b387e009bf6e1&v=4'
    })

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/96732484?s=400&u=658379e79c3088df16ae859e145b387e009bf6e1&v=4" />
          <input 
            onChange={e => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?" />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
