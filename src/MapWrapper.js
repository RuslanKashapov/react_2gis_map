import React from 'react';

export const MapWrapper = React.memo(
    () => {
        return <div id='map-container' style={{ width: '2040px', height: '1000px' }}></div>;
    },
    () => true,
);