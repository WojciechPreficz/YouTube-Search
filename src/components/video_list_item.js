import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
  //const video = props.video; // jeśli w parametrze funkcji jest props to trzeba napisać tak

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </div>
      </li>
        );
};

export default VideoListItem;