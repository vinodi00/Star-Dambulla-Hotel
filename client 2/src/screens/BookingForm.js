import React, { useState } from 'react'; // Combine import statements for React and useState
import axios from "axios";

function BookingForm() {
    

    const [formData, setFormData] = useState({
        name: '',
        fromDate: '',
        toDate: '',
        // Add more fields as needed
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/booking', formData);
            alert('Booking request sent successfully!');
            // Optionally, you can redirect the user to a confirmation page or update the UI accordingly
        } catch (err) {
            console.error('Error sending booking request:', err);
            alert('Failed to send booking request. Please try again later.');
        }
    };

    return (
        
        <div className="container">
            
            <h1>Booking Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">From Date:</label>
                    <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">To Date:</label>
                    <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} className="form-control" />
                </div>
                {/* Add more form fields as needed */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default BookingForm;
