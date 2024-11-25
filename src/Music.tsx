export default function Music() {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Music
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="p-5">
          <h2 className="text-center mb-2">Listen on Spotify</h2>
          <iframe
            className="musicplayer"
            title="Pippin on Spotify"
            src="https://open.spotify.com/embed/artist/258p0UNcFL1t1ZhHNfr0Cb"
            width="100%"
            height="380"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="p-5">
          <h2 className="text-center mb-2">Remixes on Soundcloud</h2>
          <iframe
            className="musicplayer"
            title="Pippin on Soundcloud"
            width="100%"
            height="300"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207978428&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div className="p-5">
          <h2 className="text-center mb-2">A playlist to for you to enjoy</h2>
          <iframe
            className="musicplayer"
            title="spotify playlist"
            src="https://open.spotify.com/embed/playlist/7flFQLkUgt5LOacTo4Sdfh"
            width="100%"
            height="380"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
