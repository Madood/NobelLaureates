// import React from 'react';
// import List from "../Cards/List";
// import { Routes, Route } from "react-router-dom";
// import LaureateDetails from "../Cards/LaureateDetails";

// function Laureates() {
//         return (
//                 <>
                      
                        
//                          <Routes>
//                                 <Route path="*" element={<List />} />
//                                 <Route path="/laureate/:id" element={<LaureateDetails />} />

//                         </Routes> 
                       
//                 </>
//         );
// }

// export default Laureates;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../Cards/List';
import LaureateDetails from '../Cards/LaureateDetails';

function Laureates() {
        return (
                <>
                        <Routes>
                                <Route path="/" element={<List />} />
                                <Route path="/laureates/:id" element={<LaureateDetails />} />
                        </Routes>
                </>
        );
}

export default Laureates;
