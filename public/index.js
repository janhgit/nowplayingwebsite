

var cache = new LastFMCache();

        /* Create a LastFM object */
        var lastfm = new LastFM({
            apiKey: '',
            apiSecret: '',
            cache: cache
        });

        let love = ""
        
        
        lastfm.user.getRecentTracks({user:'janh07', extended: 1}, {
            success: function (data) {
                const songName = data.recenttracks.track[0].name
                const albumName = data.recenttracks.track[0].album['#text']
                const artistName = data.recenttracks.track[0].artist.name
                const image = data.recenttracks.track[0].image[2]['#text']
                const playcount = data.recenttracks['@attr'].total

                
                
                
                
                document.getElementById("song-name").innerHTML = songName;
                document.getElementById("album-name").innerHTML = "on " + albumName;
                document.getElementById("artist-name").innerHTML = "by " + artistName;
                document.getElementById('my-Image').src=image;
                document.getElementById('playcount').innerHTML = "Jan has a total playcount of " + playcount 
                
                if (data.recenttracks.track[0].loved > 0) {
                    love = "❤️Loved Track"
                  } 
                //   else {
                //     love = ""
                //   }
                document.getElementById("loved").innerHTML = love;

                
            
            }, error: function (code, message) {
                console.error(code, message)
            }
        });


        


       


        