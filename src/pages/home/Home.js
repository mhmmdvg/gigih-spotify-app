// import React, { useState } from "react";
// import Track from "../../components/track-components/Track";
// import useAuth from "../../hooks/useAuth";
// import useSearch from "../../hooks/useSearch";
// import "./home.css";

// export default function Home({ onSubmit, onChange }) {
//   const [
//     searchKey,
//     searchResults,
//     setSearchResults,
//     handleSearch,
//     searchTrack,
//   ] = useSearch();

//   console.log(searchResults);
//   // const [token, setToken, searchTrack] = useAuth();
//   const [selected, setSelected] = useState([]);

//   const handleClick = (e) => {
//     setSelected([...selected, e]);
//     setSearchResults(searchResults.filter((track) => track !== e));
//   };

//   const deselectClick = (e) => {
//     setSelected(selected.filter((item) => item !== e));
//     setSearchResults([...searchResults, e]);
//   };

//   // console.log(selected);

//   const renderItem = () => {
//     return (
//       <>
//         {searchResults.map((track, index) => (
//           <React.Fragment key={index}>
//             <Track
//               image={track.album.images[0].url}
//               title={track.name}
//               artist={track.artists[0].name}
//               alt={track.name}
//               onClick={() => handleClick(track)}
//             >
//               Select
//             </Track>
//           </React.Fragment>
//         ))}
//       </>
//     );
//   };

//   return (
//     <>
//       <form className="form-search" onSubmit={onSubmit}>
//         <input
//           className="input-search"
//           onChange={onChange}
//           type="text"
//           name="search"
//           placeholder="Search for a song"
//         />
//         <input className="input-submit" type="submit" value="Search" />
//       </form>

//       {selected.length === 0 ? null : <h1>Selected List</h1>}
//       <div className="Wrapper">
//         {selected &&
//           selected.map((track, index) => (
//             <React.Fragment key={index}>
//               <Track
//                 image={track.album.images[1].url}
//                 title={track.name}
//                 artist={track.artists[0].name}
//                 alt={track.name}
//                 onClick={() => deselectClick(track)}
//               >
//                 Deselect
//               </Track>
//             </React.Fragment>
//           ))}
//       </div>

//       {searchResults.length === 0 ? null : <h1>Track List</h1>}
//       <div className="Wrapper">{renderItem()}</div>
//     </>
//   );
// }
