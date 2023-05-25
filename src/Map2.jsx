import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MapWrapper } from './MapWrapper';

export default function MapGL() {
  useEffect(() => {
    let map;
    let initial_marker;

    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [37.056795, 54.490336],
        zoom: 13,
        key: '',
      });
      initial_marker = new mapglAPI.Marker(map, {
        coordinates: [37.056795, 54.490336],
      });

      map.on('click', (event) => {
        new mapglAPI.Marker(map, {
          coordinates: event.lngLat,
        });
    });

    });

    return () => {
      if (map) {
        map.remove(initial_marker);
        map.destroy();
      }
    };
  }, []);
  

  return <MapWrapper/>;
}

