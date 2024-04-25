
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SpotifySearch = () => {
    
//   const fetchData = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://spotify23.p.rapidapi.com/search/',
//       params: {
//         q: 'indila',
//         type: 'artists',
//         offset: '0',
//         limit: '10',
//         numberOfTopResults: '5'
//       },
//       headers: {
//         'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
//         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.get(options.url, {
//         params: options.params,
//         headers: options.headers
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* يمكنك هنا عرض البيانات المسترجعة من Spotify */}
//     </div>
//   );
// };

// export default SpotifySearch;