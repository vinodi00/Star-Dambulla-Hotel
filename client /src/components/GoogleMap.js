import React, { useState, useEffect } from 'react';

function GoogleMap() {
  const [, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoeZYVRQUbX4aoIC1fNkQOJ1sRb4dwo0s&callback=initMap";
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function initMap() {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    const map = new window.google.maps.Map(document.getElementById('google-map'), {
      center: { lat: 7.8340104, lng: 80.5732055 },
      zoom: 12,
    });
    setMap(map);
  }

  return <div id="google-map" style={{ width: '100%', height: '600px' }}></div>;
}

export default GoogleMap;