import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';


const Widgets = () => {
    return (
        <div className='widgets'>
           <div className='widgets__input'>
               <SearchIcon className='widgets__searchIcon'/>
               <input placeholder='Search Twitter' type='text'/>
           </div>

           <div className='widgets__widgetContainer'>
               <h2>What's happening?</h2>

               <TwitterTweetEmbed tweetId='1496830803736731649'/>

               <TwitterTimelineEmbed sourceType='profile' screenName='NewNews_Eu' options={{height: 400}} />
             
              <TwitterShareButton url={'https://github.com/HeitorUrbanetz'} options={{text: '#react is awesome', via: 'heitor'}}/>
                
           </div>
        </div>
    );
}

export default Widgets;