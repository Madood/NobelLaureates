// import React, { useState } from 'react';
// import '../Styles/Style.css';
// import countryData from '../Country-json';

// function Nomination() {
//         const [popup, setPopup] = useState(null);

//         const handleMapHover = (event, index) => {
//                 const { clientX, clientY } = event;
//                 setPopup({ index, x: clientX, y: clientY });
//         };

//         const handleBodyHover = () => {
//                 setPopup(null);
//         };

//         const isElementActive = (index) => popup && popup.index === index;

//         return (
//                 <div className='Map'>
//                         <div className="app-svg-map--world" onClick={handleBodyHover}>
//                                 <svg x="0px" y="0px" viewBox="0.34389990089197225 0.34389990089197225 701 299.98145193260655" preserveAspectRatio="xMinYMin">
//                                         {countryData.map((country, index) => (
//                                                 <g key={index}>
//                                                         <path
//                                                                 data-title={country.name}
//                                                                 d={country.d}
//                                                                 onMouseEnter={(e) => handleMapHover(e, index)}
//                                                                 onMouseLeave={handleBodyHover}
//                                                         />
//                                                         {isElementActive(index) && (
//                                                                 <text
//                                                                         className="app-svg-map--world__name is-show"
//                                                                         x={country.x}
//                                                                         y={country.y}
//                                                                         textAnchor="middle"
//                                                                 >
//                                                                         {country.name}
//                                                                 </text>
//                                                         )}
//                                                 </g>
//                                         ))}
//                                 </svg>
//                         </div>
//                         <div className='response'>
                               
//                         </div>
//                 </div>
//         );
// }

// export default Nomination;
// import React, { useState } from 'react';
// import '../Styles/Style.css';
// import countryData from '../Country-json';
// import laureatesData2 from '../Laureates-Json';

// function Nomination() {
//         const [popup, setPopup] = useState(null);

//         const handleMapHover = (event, index) => {
//                 const { clientX, clientY } = event;
//                 setPopup({ index, x: clientX, y: clientY });
//         };

//         const handleBodyHover = () => {
//                 setPopup(null);
//         };

//         const isElementActive = (index) => {
//                 if (popup && popup.index === index) {
//                         // Assuming the 'name' property exists in the countryData array
//                         const countryName = countryData[index].name;
//                         return countryName;
//                 }
//                 return null;
//         };

//         const hoveredCountry = isElementActive(popup?.index);

//         const filteredData = laureatesData2.filter((laureate) => {
//                 const isCountryMatch =
//                         hoveredCountry === null || laureate.bornCountry?.toLowerCase() === hoveredCountry.toLowerCase();
//                 return isCountryMatch;
//         });

//         return (
//                 <>
//                         <div className='Map'>
//                                 <div className="app-svg-map--world" onClick={handleBodyHover}>
//                                         <svg x="0px" y="0px" viewBox="0.34389990089197225 0.34389990089197225 701 299.98145193260655" preserveAspectRatio="xMinYMin">
//                                                 {countryData.map((country, index) => (
//                                                         <g key={index}>
//                                                                 <path
//                                                                         data-title={country.name}
//                                                                         d={country.d}
//                                                                         onMouseEnter={(e) => handleMapHover(e, index)}
//                                                                         onMouseLeave={handleBodyHover}
//                                                                 />
//                                                                 {isElementActive(index) && (
//                                                                         <text
//                                                                                 className="app-svg-map--world__name is-show"
//                                                                                 x={country.x}
//                                                                                 y={country.y}
//                                                                                 textAnchor="middle"
//                                                                         >
//                                                                                 {country.name}
//                                                                         </text>
//                                                                 )}
//                                                         </g>
//                                                 ))}
//                                         </svg>
//                                 </div>
//                         </div>
//                         <div className='response'>
//                                 <ul>
//                                         {filteredData.map((laureate) => (
//                                                 <li key={laureate.id}>
//                                                         {/* Display the laureate data here */}
//                                                         <p>{`${laureate.firstname} ${laureate.surname}`}</p>
//                                                         {/* Add other laureate details as needed */}
//                                                 </li>
//                                         ))}
//                                 </ul>
//                         </div>
//                 </>
//         );
// }

// export default Nomination;
import React, { useState } from 'react';
import '../Styles/Style.css';
import countryData from '../Country-json';
import laureatesData2 from '../Laureates-Json';

function Nomination() {
        const [selectedCountry, setSelectedCountry] = useState(null);

        const handleMapClick = (index) => {
                setSelectedCountry(index);
        };

        const filteredData = laureatesData2.filter((laureate) => {
                const isCountryMatch =
                        selectedCountry === null || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
                return isCountryMatch;
        });

        return (
                <>
                        <div className='Map'>
                                <div className="app-svg-map--world">
                                        <svg x="0px" y="0px" viewBox="0.34389990089197225 0.34389990089197225 701 299.98145193260655" preserveAspectRatio="xMinYMin">
                                                {countryData.map((country, index) => (
                                                        <g key={index}>
                                                                <path
                                                                        data-title={country.name}
                                                                        d={country.d}
                                                                        onClick={() => handleMapClick(country.name)}
                                                                />
                                                                {selectedCountry === country.name && (
                                                                        <text
                                                                                className="app-svg-map--world__name is-show"
                                                                                x={country.x}
                                                                                y={country.y}
                                                                                textAnchor="middle"
                                                                        >
                                                                                {country.name}
                                                                        </text>
                                                                )}
                                                        </g>
                                                ))}
                                        </svg>
                                </div>
                        </div>
                        {selectedCountry && ( // Add conditional rendering here
                                <div className='response'>
                                        <h2>{selectedCountry}</h2>
                                        <p>{`${selectedCountry} has ${filteredData.length} number of laureates.`}</p>
                                        <ul>
                                                {filteredData.map((laureate) => (
                                                        <li key={laureate.id}>
                                                                {/* Display the laureate data here */}
                                                                <p>{`${laureate.firstname} ${laureate.surname}`}</p>
                                                                {/* Add other laureate details as needed */}
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        )}
                </>
        );
}

export default Nomination;
