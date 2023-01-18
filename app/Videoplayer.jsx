import React from 'react';
import 'video-react/dist/video-react.css';
import Player from 'video-react';

impo;

export default function Videoplayer() {
  return (
    <main>
      <div>
        <Player
          src="https://lfc.milkywayfiasco.com/title.mp4"
          type="video/mp4"
        />
      </div>
    </main>
  );
}
