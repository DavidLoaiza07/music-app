import React from 'react';
import ReactToolTip from 'react-tooltip';

export default function generateContent(dataTip) {
    ReactToolTip.rebuild()
    switch (dataTip.type) {
        case 'create':
            return <TipContent title='Create a playlist' tip='Log in to create and share playlist' />
        case 'list':
            return <TipContent title="Enjoy your liked songs' tip='Log in to see all the songs you've liked in one easy playlist" />
        case 'library':
            return <TipContent title='Enjoy your Library' tip='Log in to see saved songs, podcasts, artists, and playlists on your library' />
        case 'play':
            return <TipContent title='Log in to listen' tip='Due to limitations in the spotify playback api, log in to your PREMIUM account to listen' />
        case 'like':
            return <TipContent title='Save for later' tip='Log in to save this playlist to your library' />
        case 'follow':
            return <TipContent title='Follow' tip='Log in to follow' />
        default:
            return null
    }
}

function TipContent({title, tip}) {
    return (
        <div className='TipContent'>
            <h2>{title}</h2>
            <h3>{tip}</h3>
        </div>
    )
}