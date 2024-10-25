import React, { useState } from "react"
import Button from 'react-bootstrap/Button';

function LikedAlbums() {

    const [filter, setFilter] = useState('all');
    const [newSongs, setNewSongs] = useState([""]);
    const [songs, setSongs] = useState(() => {
        return [
            { text: '"Larger Than Life", by Brent Faiyaz', completed: false },
            { text: '"CASE STUDY 01", by Daniel Caesar', completed: false },
            { text: '"VICE VERSA", by Rauw Alejandro', completed: false }
        ]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newSongs !== '') {
            setSongs([...songs, { text: newSongs, completed: false}]);
        }
    };

    const handleDelete = (index) => {
        const updatedSongs = [...songs];
        updatedSongs.splice(index, 1);
        setSongs(updatedSongs);
    };

    const handleToggleCompleted = (index) => {
        const updatedSongs = [...songs];
        updatedSongs[index].completed = !updatedSongs[index].completed;
        setSongs(updatedSongs);
    }

    const filteredSongs = songs.filter(songs => {
        if (filter === 'favorite') return songs.completed;
        if (filter === 'liked') return !songs.completed;
        return true;
    });

    // moveSongUp and moveSongDown stopped working towards the end of working on the project and I couldn't
    // figure out what went wrong.

    const moveSongUp = (index) => {
        if (index > 0) {
            const updatedSongs = [...newSongs];
            [updatedSongs[index], updatedSongs[index - 1]] = 
            [updatedSongs[index - 1], updatedSongs[index]];
            setSongs(updatedSongs);
        }
    };

    const moveSongDown = (index) => {
        if (index < newSongs.length - 1) {
            const updatedSongs = [...newSongs];
            [updatedSongs[index], updatedSongs[index + 1]] = 
            [updatedSongs[index + 1], updatedSongs[index]];
            setSongs(updatedSongs);
        }
    };

    return (
        <div 
            className="saved-albums container my-5 rounded border p-4" 
            style={{ width: "1200px", backgroundColor: "black"}}
        >

            <div >
                <h1>Saved Albums</h1>
                
                <input
                    type="text"
                    placeholder="Enter an album..."
                    value={newSongs}
                    id="searchbar"
                    onChange={(e) => setNewSongs(e.target.value)}/>
                <Button
                    className="add-button"
                    variant="outline-warning"
                    size="lg"
                    onClick={handleSubmit}>
                    Add
                </Button>
            </div>
            <div>
                <Button
                    className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                    aria-label="Show all tasks" 
                    variant="outline-warning">
                    Show All
                </Button>
                <Button
                    className={`filter-button ${filter === 'favorite' ? 'active' : ''}`}
                    onClick={() => setFilter('favorite')}
                    aria-label="Show favorite albums" 
                    variant="outline-warning">
                    Show Favorite Albums
                </Button>
                <Button
                    className={`filter-button ${filter === 'liked' ? 'active' : ''}`}
                    onClick={() => setFilter('liked')}
                    aria-label="Show liked albums" 
                    variant="outline-warning">
                    Show Liked Albums
                </Button>
            </div>
            <div>
                {filteredSongs.length === 0 ? (
                    <p className="empty-albums">No albums to show</p>
                ) : (
                    <ul className="text">
                        {filteredSongs.map((songs, index) => (
                            <li key={index} className="">
                                <span className={songs.completed ? 'completed' : 'album'}>
                                    {songs.text}
                                </span>
                                
                                <Button
                                    className="delete-button"
                                    variant="outline-danger"
                                    size="lg"
                                    onClick={() => handleDelete(index)}
                                    aria-label={`Delete album "${songs.text}"`}>
                                    Delete
                                </Button>
                                <Button
                                    className="move-button"
                                    variant="outline-info"
                                    size="lg"
                                    onClick={() => moveSongUp(index)}
                                    aria-label="Move album up">
                                    ⩓
                                </Button>
                                <Button
                                    className="move-button"
                                    variant="outline-info"
                                    size="lg"
                                    onClick={() => moveSongDown(index)}
                                    aria-label="Move album down">
                                    ⩔
                                </Button>
                                <input
                                    type="checkbox"
                                    value={newSongs}
                                    onChange={() => handleToggleCompleted(index)}
                                    className="checkbox"/>

                            </li>
                        ))}
                    </ul>
                )};
            </div>
        </div>
    );
}
    export default LikedAlbums;
