import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const useCropData = (location) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData([]); // Reset data on location change
    setLoading(true);
    fetch(`/nodupi.csv?ts=${Date.now()}`)
      .then((response) => response.text())
      .then((csvText) => {
        console.log('Raw CSV:', csvText);
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed Data:', result.data);
            const filteredData = result.data.filter(
              (row) => row.State?.toLowerCase() === location?.toLowerCase()
            );
            console.log('Filtered Data:', filteredData);
            setData(filteredData);
            setLoading(false);
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching CSV:', error);
        setLoading(false);
      });
  }, [location]);

  return { data, loading };
};

export default useCropData;