import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { songsData } from "./assets/assets";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black ">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[90%] flex ">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-white">No songs available</p>
        </div>
      )}

      {track && track.file ? (
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      ) : null}
    </div>
  );
};

export default App;
