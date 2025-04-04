import React, { useState, useEffect } from 'react';
import RoomComponent from '../components/Room'; // Renaming the component to avoid conflict
import axios from "axios";
function Room() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/rooms/getallrooms');
                setRooms(response.data.rooms);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                rooms.map((room, index) => (
                    <div className='col-md-15' key={index}>
                        <RoomComponent room={room} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Room;
