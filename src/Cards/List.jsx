// // import React, { useState } from 'react';
// // import laureatesData2 from '../Laureates-Json';
// // import CountryData from '../Country-json';
// // import { Link, Routes, Route } from 'react-router-dom';
// // import LaureateDetails from "./LaureateDetails";
// // import "../Styles/Style.css";
// // import Coin from "../images/Nobel.png";
// // import FilterAltIcon from '@mui/icons-material/FilterAlt';


// // const ITEMS_PER_PAGE = 4; // Number of items to show per page

// // function List() {
// //         const [laureatesData] = useState(laureatesData2);
// //         const [searchQuery, setSearchQuery] = useState('');
// //         const [currentPage, setCurrentPage] = useState(1);
// //         const [filteredData, setFilteredData] = useState([]); // New state to hold filtered data
// //         const [show, setShow] = useState(false);
// //         const [selectedYear, setSelectedYear] = useState('');



// //         const totalItems = laureatesData.length;
// //         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

// //         const searchFilter = (event) => {
// //                 const keyword = event.target.value?.toLowerCase() || "";
// //                 setSearchQuery(keyword);

// //                 // Check for valid values and handle the filtering accordingly
// //                 if (keyword) {
// //                         const filteredData = laureatesData.filter((laureate) => {
// //                                 return (
// //                                         laureate.firstname?.toLowerCase().includes(keyword) ||
// //                                         laureate.surname?.toLowerCase().includes(keyword)
// //                                 );
// //                         });

// //                         setFilteredData(filteredData);
// //                         setCurrentPage(1);
// //                 } else {
// //                         // If the search query is empty, reset the filteredData to an empty array
// //                         setFilteredData([]);
// //                         setCurrentPage(1);
// //                 }
// //         };


// //         const handlePrevPage = () => {
// //                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
// //         };

// //         const handleNextPage = () => {
// //                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
// //         };

// //         const handleFormSubmit = (event) => {
// //                 event.preventDefault(); // Prevent form submission from refreshing the page
// //         };

// //         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// //         const visibleData = searchQuery ? filteredData : laureatesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

// //         const currentYear = new Date().getFullYear();
// //         const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

// //         const handleYearChange = (event) => {
// //                 setSelectedYear(event.target.value);
// //         };

// //         return (
// //                 <>
// //                         <section className='Main'>
// //                                 <div className="search-container">

// //                                         <form onSubmit={handleFormSubmit}>
// //                                                 <input
// //                                                         className="search"
// //                                                         value={searchQuery}
// //                                                         onChange={searchFilter}
// //                                                         type='search'
// //                                                         placeholder='Search by first name or last name'
// //                                                 />
// //                                                 <button id="filter-button" class="filterbutton" onClick={() => setShow(!show)}> <FilterAltIcon fontSize="large" /></button>

// //                                         </form>
// //                                         {show && <div>
// //                                                 <hr />
// //                                                 <ul className='filter'>
// //                                                         <li ><button className='field'> <select className='field' name="Subject" id="c">
// //                                                                 {CountryData.map((country) =>
// //                                                                         <option value={country.name}>{country.name}</option>)}
// //                                                         </select></button></li>
// //                                                         <li ><button className='field'>

// //                                                                 <select className='field' id="year" value={selectedYear} onChange={handleYearChange}>
// //                                                                         <option value="">Select a year</option>
// //                                                                         {yearOptions.map((year) => (
// //                                                                                 <option key={year} value={year}>
// //                                                                                         {year}
// //                                                                                 </option>
// //                                                                         ))}
// //                                                                 </select>
// //                                                                 {/* {selectedYear && <p>Selected Year: {selectedYear}</p>} */}







// //                                                         </button></li>
// //                                                         <li ><button className='field'>

// //                                                                 <select className='field' name="Subject" id="c">

// //                                                                         <option className='field' value="Physics">Physics</option>
// //                                                                         <option className='field' value="Chemistry">Chemistry</option>
// //                                                                         <option className='field' value="Medicine">Medicine</option>
// //                                                                         <option className='field' value="Literature">Literature</option>
// //                                                                         <option className='field' value="Peace">Peace</option>
// //                                                                         <option className='field' value="Economic Science">Economic Science</option>
// //                                                                 </select>
// //                                                         </button></li>


// //                                                 </ul>
// //                                         </div>}
// //                                         <hr />
// //                                 </div>
// //                                 <ul>
// //                                         {visibleData.map((laureate) => (
// //                                                 <li className=""
// //                                                         key={laureate.id}>
// //                                                         <div className='Card'>
// //                                                                 <div className='Top'>
// //                                                                         <Link to={`/laureate/${laureate.id}`}>
// //                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
// //                                                                         </Link>
// //                                                                 </div>
// //                                                                 <div className='Middle'>
// //                                                                         <img className="coin" src={Coin} alt='Coin' />
// //                                                                 </div>
// //                                                                 <div className='Bottom'>
// //                                                                         <p>
// //                                                                                 <strong>Year Awarded:</strong> {laureate.year}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Born:</strong> {laureate.born}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Gender:</strong> {laureate.gender}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Category:</strong> {laureate.category}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Country:</strong> {laureate.bornCountry}
// //                                                                         </p>
// //                                                                 </div>
// //                                                         </div>
// //                                                 </li>
// //                                         ))}
// //                                 </ul>
// //                                 <br></br>
// //                                 <div className="pagination">
// //                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
// //                                                 &#8249;
// //                                         </button>
// //                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
// //                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
// //                                                 &#8250;
// //                                         </button>
// //                                 </div>
// //                                 {/* <div>
// //                                         <p>....................</p><br />
// //                                         <p>....................</p><br />
// //                                         <p>....................</p><br />
// //                                 </div> */}
// //                         </section>

// //                         <Routes>
// //                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
// //                         </Routes>
// //                 </>
// //         );
// // }

// // export default List;

// import React, { useState } from 'react';
// import laureatesData2 from '../Laureates-Json';
// import CountryData from '../Country-json';
// import { Link, Routes, Route } from 'react-router-dom';
// import LaureateDetails from "./LaureateDetails";
// import "../Styles/Style.css";
// import Coin from "../images/Nobel.png";
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const ITEMS_PER_PAGE = 4; // Number of items to show per page

// function List() {
//         const [laureatesData] = useState(laureatesData2);
//         const [searchQuery, setSearchQuery] = useState('');
//         const [currentPage, setCurrentPage] = useState(1);
//         const [filteredData, setFilteredData] = useState([]);
//         const [show, setShow] = useState(false);
//         const [selectedYear, setSelectedYear] = useState('');
//         const [selectedCountry, setSelectedCountry] = useState('');
//         const [selectedSubject, setSelectedSubject] = useState('');

//         const totalItems = laureatesData.length;
//         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//         const searchFilter = (event) => {
//                 const keyword = event.target.value?.toLowerCase() || "";
//                 setSearchQuery(keyword);

//                 // Check for valid values and handle the filtering accordingly
//                 if (keyword) {
//                         const filteredData = laureatesData.filter((laureate) => {
//                                 const isNameMatch =
//                                         laureate.firstname?.toLowerCase().includes(keyword) ||
//                                         laureate.surname?.toLowerCase().includes(keyword);
//                                 const isCountryMatch =
//                                         selectedCountry === '' || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
//                                 const isYearMatch = selectedYear === '' || laureate.year === parseInt(selectedYear);
//                                 const isSubjectMatch =
//                                         selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

//                                 return isNameMatch && isCountryMatch && isYearMatch && isSubjectMatch;
//                         });

//                         setFilteredData(filteredData);
//                         setCurrentPage(1);
//                 } else {
//                         // If the search query is empty, reset the filteredData to an empty array
//                         setFilteredData([]);
//                         setCurrentPage(1);
//                 }
//         };

//         const handlePrevPage = () => {
//                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//         };

//         const handleNextPage = () => {
//                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//         };

//         const handleFormSubmit = (event) => {
//                 event.preventDefault(); // Prevent form submission from refreshing the page
//         };

//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//         const visibleData = searchQuery ? filteredData : laureatesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//         const currentYear = new Date().getFullYear();
//         const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

//         const handleYearChange = (event) => {
//                 setSelectedYear(event.target.value);
//         };

//         return (
//                 <>
//                         <section className='Main'>
//                                 <div className="search-container">
//                                         <form onSubmit={handleFormSubmit}>
//                                                 <input
//                                                         className="search"
//                                                         value={searchQuery}
//                                                         onChange={searchFilter}
//                                                         type='search'
//                                                         placeholder='Search by first name or last name'
//                                                 />
//                                                 <button id="filter-button" class="filterbutton" onClick={() => setShow(!show)}>
//                                                         <FilterAltIcon fontSize="large" />
//                                                 </button>
//                                         </form>
//                                         {show && (
//                                                 <div>
//                                                         <hr />
//                                                         <ul className='filter'>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Country"
//                                                                                         value={selectedCountry}
//                                                                                         onChange={(e) => setSelectedCountry(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a country</option>
//                                                                                         {CountryData.map((country) => (
//                                                                                                 <option key={country.code} value={country.name}>
//                                                                                                         {country.name}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         id="year"
//                                                                                         value={selectedYear}
//                                                                                         onChange={handleYearChange}
//                                                                                 >
//                                                                                         <option value="">Select a year</option>
//                                                                                         {yearOptions.map((year) => (
//                                                                                                 <option key={year} value={year}>
//                                                                                                         {year}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Subject"
//                                                                                         value={selectedSubject}
//                                                                                         onChange={(e) => setSelectedSubject(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a subject</option>
//                                                                                         <option value="Physics">Physics</option>
//                                                                                         <option value="Chemistry">Chemistry</option>
//                                                                                         <option value="Medicine">Medicine</option>
//                                                                                         <option value="Literature">Literature</option>
//                                                                                         <option value="Peace">Peace</option>
//                                                                                         <option value="Economic Science">Economic Science</option>
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                         </ul>
//                                                 </div>
//                                         )}
//                                         <hr />
//                                 </div>
//                                 <ul>
//                                         {visibleData.map((laureate) => (
//                                                 <li className="" key={laureate.id}>
//                                                         <div className='Card'>
//                                                                 <div className='Top'>
//                                                                         <Link to={`/laureate/${laureate.id}`}>
//                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
//                                                                         </Link>
//                                                                 </div>
//                                                                 <div className='Middle'>
//                                                                         <img className="coin" src={Coin} alt='Coin' />
//                                                                 </div>
//                                                                 <div className='Bottom'>
//                                                                         <p>
//                                                                                 <strong>Year Awarded:</strong> {laureate.year}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Born:</strong> {laureate.born}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Gender:</strong> {laureate.gender}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Category:</strong> {laureate.category}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Country:</strong> {laureate.bornCountry}
//                                                                         </p>
//                                                                 </div>
//                                                         </div>
//                                                 </li>
//                                         ))}
//                                 </ul>
//                                 <br />
//                                 <div className="pagination">
//                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
//                                                 &#8249;
//                                         </button>
//                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
//                                                 &#8250;
//                                         </button>
//                                 </div>
//                         </section>
//                         <Routes>
//                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
//                         </Routes>
//                 </>
//         );
// }

// export default List;

// import React, { useState } from 'react';
// import laureatesData2 from '../Laureates-Json';
// import CountryData from '../Country-json';
// import { Link, Routes, Route } from 'react-router-dom';
// import LaureateDetails from "./LaureateDetails";
// import "../Styles/Style.css";
// import Coin from "../images/Nobel.png";
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const ITEMS_PER_PAGE = 4; // Number of items to show per page

// function List() {
//         const [laureatesData] = useState(laureatesData2);
//         const [searchQuery, setSearchQuery] = useState('');
//         const [currentPage, setCurrentPage] = useState(1);
//         const [show, setShow] = useState(false);
//         const [selectedYear, setSelectedYear] = useState('');
//         const [selectedCountry, setSelectedCountry] = useState('');
//         const [selectedSubject, setSelectedSubject] = useState('');

//         const totalItems = laureatesData.length;
//         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//         const searchFilter = (event) => {
//                 setSearchQuery(event.target.value?.toLowerCase() || "");
//                 setCurrentPage(1);
//         };

//         const handlePrevPage = () => {
//                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//         };

//         const handleNextPage = () => {
//                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//         };

//         const handleFormSubmit = (event) => {
//                 event.preventDefault(); // Prevent form submission from refreshing the page
//         };

//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//         const filteredData = laureatesData.filter((laureate) => {
//                 const isCountryMatch =
//                         selectedCountry === '' || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
//                 const isYearMatch = selectedYear === '' || laureate.year === parseInt(selectedYear);
//                 const isSubjectMatch =
//                         selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

//                 return isCountryMatch && isYearMatch && isSubjectMatch;
//         });

//         const visibleData = filteredData.filter((laureate) => {
//                 const isNameMatch =
//                         laureate.firstname?.toLowerCase().includes(searchQuery) ||
//                         laureate.surname?.toLowerCase().includes(searchQuery);

//                 return isNameMatch;
//         }).slice(startIndex, startIndex + ITEMS_PER_PAGE);

//         const currentYear = new Date().getFullYear();
//         const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

//         return (
//                 <>
//                         <section className='Main'>
//                                 <div className="search-container">
//                                         <form onSubmit={handleFormSubmit}>
//                                                 <input
//                                                         className="search"
//                                                         value={searchQuery}
//                                                         onChange={searchFilter}
//                                                         type='search'
//                                                         placeholder='Search by first name or last name'
//                                                 />
//                                                 <button id="filter-button" className="filterbutton" onClick={() => setShow(!show)}>
//                                                         <FilterAltIcon fontSize="large" />
//                                                 </button>
//                                         </form>
//                                         {show && (
//                                                 <div>
//                                                         <hr />
//                                                         <ul className='filter'>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Country"
//                                                                                         value={selectedCountry}
//                                                                                         onChange={(e) => setSelectedCountry(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a country</option>
//                                                                                         {CountryData.map((country) => (
//                                                                                                 <option key={country.code} value={country.name}>
//                                                                                                         {country.name}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         id="year"
//                                                                                         value={selectedYear}
//                                                                                         onChange={(e) => setSelectedYear(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a year</option>
//                                                                                         {yearOptions.map((year) => (
//                                                                                                 <option key={year} value={year}>
//                                                                                                         {year}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Subject"
//                                                                                         value={selectedSubject}
//                                                                                         onChange={(e) => setSelectedSubject(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a subject</option>
//                                                                                         <option value="Physics">Physics</option>
//                                                                                         <option value="Chemistry">Chemistry</option>
//                                                                                         <option value="Medicine">Medicine</option>
//                                                                                         <option value="Literature">Literature</option>
//                                                                                         <option value="Peace">Peace</option>
//                                                                                         <option value="Economic Science">Economic Science</option>
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                         </ul>
//                                                 </div>
//                                         )}
//                                         <hr />
//                                 </div>
//                                 <ul>
//                                         {visibleData.map((laureate) => (
//                                                 <li className="" key={laureate.id}>
//                                                         <div className='Card'>
//                                                                 <div className='Top'>
//                                                                         <Link to={`/laureate/${laureate.id}`}>
//                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
//                                                                         </Link>
//                                                                 </div>
//                                                                 <div className='Middle'>
//                                                                         <img className="coin" src={Coin} alt='Coin' />
//                                                                 </div>
//                                                                 <div className='Bottom'>
//                                                                         <p>
//                                                                                 <strong>Year Awarded:</strong> {laureate.year}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Born:</strong> {laureate.born}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Gender:</strong> {laureate.gender}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Category:</strong> {laureate.category}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Country:</strong> {laureate.bornCountry}
//                                                                         </p>
//                                                                 </div>
//                                                         </div>
//                                                 </li>
//                                         ))}
//                                 </ul>
//                                 <br />
//                                 <div className="pagination">
//                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
//                                                 &#8249;
//                                         </button>
//                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
//                                                 &#8250;
//                                         </button>
//                                 </div>
//                         </section>
//                         <Routes>
//                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
//                         </Routes>
//                 </>
//         );
// }

// export default List;
// import React, { useState } from 'react';
// import laureatesData2 from '../Laureates-Json';
// import CountryData from '../Country-json';
// import { Link, Routes, Route } from 'react-router-dom';
// import LaureateDetails from "./LaureateDetails";
// import "../Styles/Style.css";
// import Coin from "../images/Nobel.png";
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const ITEMS_PER_PAGE = 4; // Number of items to show per page

// function List() {
//         const [laureatesData] = useState(laureatesData2);
//         const [searchQuery, setSearchQuery] = useState('');
//         const [currentPage, setCurrentPage] = useState(1);
//         const [show, setShow] = useState(false);
//         const [selectedYear, setSelectedYear] = useState('');
//         const [selectedCountry, setSelectedCountry] = useState('');
//         const [selectedSubject, setSelectedSubject] = useState('');

//         const totalItems = laureatesData.length;
//         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//         const searchFilter = (event) => {
//                 setSearchQuery(event.target.value?.toLowerCase() || "");
//                 setCurrentPage(1);
//         };

//         const handlePrevPage = () => {
//                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//         };

//         const handleNextPage = () => {
//                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//         };

//         const handleFormSubmit = (event) => {
//                 event.preventDefault(); // Prevent form submission from refreshing the page
//         };

//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

//         const filteredData = laureatesData.filter((laureate) => {
//                 const isCountryMatch =
//                         selectedCountry === '' || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
//                 const isYearMatch = selectedYear === '' || laureate.year === parseInt(selectedYear);
//                 const isSubjectMatch =
//                         selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

//                 return isCountryMatch && isYearMatch && isSubjectMatch;
//         });

//         const visibleData = filteredData.filter((laureate) => {
//                 const isNameMatch =
//                         laureate.firstname?.toLowerCase().includes(searchQuery) ||
//                         laureate.surname?.toLowerCase().includes(searchQuery);

//                 return isNameMatch;
//         }).slice(startIndex, startIndex + ITEMS_PER_PAGE);

//         const currentYear = new Date().getFullYear();
//         const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

//         return (
//                 <>
//                         <section className='Main'>
//                                 <div className="search-container">
//                                         <form onSubmit={handleFormSubmit}>
//                                                 <input
//                                                         className="search"
//                                                         value={searchQuery}
//                                                         onChange={searchFilter}
//                                                         type='search'
//                                                         placeholder='Search by first name or last name'
//                                                 />
//                                                 <button id="filter-button" className="filterbutton" onClick={() => setShow(!show)}>
//                                                         <FilterAltIcon fontSize="large" />
//                                                 </button>
//                                         </form>
//                                         {show && (
//                                                 <div>
//                                                         <hr />
//                                                         <ul className='filter'>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Country"
//                                                                                         value={selectedCountry}
//                                                                                         onChange={(e) => setSelectedCountry(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a country</option>
//                                                                                         {CountryData.map((country) => (
//                                                                                                 <option key={country.code} value={country.name}>
//                                                                                                         {country.name}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         id="year"
//                                                                                         value={selectedYear}
//                                                                                         onChange={(e) => setSelectedYear(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a year</option>
//                                                                                         {yearOptions.map((year) => (
//                                                                                                 <option key={year} value={year}>
//                                                                                                         {year}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Subject"
//                                                                                         value={selectedSubject}
//                                                                                         onChange={(e) => setSelectedSubject(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a subject</option>
//                                                                                         <option value="Physics">Physics</option>
//                                                                                         <option value="Chemistry">Chemistry</option>
//                                                                                         <option value="Medicine">Medicine</option>
//                                                                                         <option value="Literature">Literature</option>
//                                                                                         <option value="Peace">Peace</option>
//                                                                                         <option value="Economic Science">Economic Science</option>
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                         </ul>
//                                                 </div>
//                                         )}
//                                         <hr />
//                                 </div>
//                                 <ul>
//                                         {visibleData.map((laureate) => (
//                                                 <li className="" key={laureate.id}>
//                                                         <div className='Card'>
//                                                                 <div className='Top'>
//                                                                         <Link to={`/laureate/${laureate.id}`}>
//                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
//                                                                         </Link>
//                                                                 </div>
//                                                                 <div className='Middle'>
//                                                                         <img className="coin" src={Coin} alt='Coin' />
//                                                                 </div>
//                                                                 <div className='Bottom'>
//                                                                         <p>
//                                                                                 <strong>Year Awarded:</strong> {laureate.year}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Born:</strong> {laureate.born}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Gender:</strong> {laureate.gender}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Category:</strong> {laureate.category}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Country:</strong> {laureate.bornCountry}
//                                                                         </p>
//                                                                 </div>
//                                                         </div>
//                                                 </li>
//                                         ))}
//                                 </ul>
//                                 <br />
//                                 <div className="pagination">
//                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
//                                                 &#8249;
//                                         </button>
//                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
//                                                 &#8250;
//                                         </button>
//                                 </div>
//                         </section>
//                         <Routes>
//                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
//                         </Routes>
// //                 </>
// //         );
// // }

// // export default List;



// // import React, { useState } from 'react';
// // import laureatesData2 from '../Laureates-Json';
// // import CountryData from '../Country-json';
// // import { Link, Routes, Route } from 'react-router-dom';
// // import LaureateDetails from "./LaureateDetails";
// // import "../Styles/Style.css";
// // import Coin from "../images/Nobel.png";
// // import FilterAltIcon from '@mui/icons-material/FilterAlt';

// // const ITEMS_PER_PAGE = 4; // Number of items to show per page

// // function List() {
// //         const [laureatesData] = useState(laureatesData2);
// //         const [searchQuery, setSearchQuery] = useState('');
// //         const [currentPage, setCurrentPage] = useState(1);
// //         const [show, setShow] = useState(false);
// //         const [selectedYear, setSelectedYear] = useState('');
// //         const [selectedCountry, setSelectedCountry] = useState('');
// //         const [selectedSubject, setSelectedSubject] = useState('');

// //         const handleYearChange = (event) => {
// //                 setSelectedYear(event.target.value);
// //                 setCurrentPage(1); // Reset to the first page when the year filter is changed
// //         };

// //         const handlePrevPage = () => {
// //                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
// //         };

// //         const handleNextPage = () => {
// //                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
// //         };

// //         const handleFormSubmit = (event) => {
// //                 event.preventDefault(); // Prevent form submission from refreshing the page
// //         };

// //         const filteredData = laureatesData.filter((laureate) => {
// //                 const isCountryMatch =
// //                         selectedCountry === '' || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
// //                 const isYearMatch = selectedYear === '' || laureate.year === parseInt(selectedYear);
// //                 const isSubjectMatch =
// //                         selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

// //                 return isCountryMatch && isYearMatch && isSubjectMatch;
// //         });

// //         const visibleData = filteredData.filter((laureate) => {
// //                 const isNameMatch =
// //                         laureate.firstname?.toLowerCase().includes(searchQuery) ||
// //                         laureate.surname?.toLowerCase().includes(searchQuery);

// //                 return isNameMatch;
// //         });

// //         const totalItems = visibleData.length;
// //         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

// //         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// //         const endIndex = startIndex + ITEMS_PER_PAGE;

// //         const currentYear = new Date().getFullYear();
// //         const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

// //         return (
// //                 <>
// //                         <section className='Main'>
// //                                 <div className="search-container">
// //                                         <form onSubmit={handleFormSubmit}>
// //                                                 <input
// //                                                         className="search"
// //                                                         value={searchQuery}
// //                                                         onChange={(event) => setSearchQuery(event.target.value)}
// //                                                         type='search'
// //                                                         placeholder='Search by first name or last name'
// //                                                 />
// //                                                 <button id="filter-button" className="filterbutton" onClick={() => setShow(!show)}>
// //                                                         <FilterAltIcon fontSize="large" />
// //                                                 </button>
// //                                         </form>
// //                                         {show && (
// //                                                 <div>
// //                                                         <hr />
// //                                                         <ul className='filter'>
// //                                                                 <li>
// //                                                                         <button className='field'>
// //                                                                                 <select
// //                                                                                         className='field'
// //                                                                                         name="Country"
// //                                                                                         value={selectedCountry}
// //                                                                                         onChange={(e) => setSelectedCountry(e.target.value)}
// //                                                                                 >
// //                                                                                         <option value="">Select a country</option>
// //                                                                                         {CountryData.map((country) => (
// //                                                                                                 <option key={country.code} value={country.name}>
// //                                                                                                         {country.name}
// //                                                                                                 </option>
// //                                                                                         ))}
// //                                                                                 </select>
// //                                                                         </button>
// //                                                                 </li>
// //                                                                 <li>
// //                                                                         <button className='field'>
// //                                                                                 <select
// //                                                                                         className='field'
// //                                                                                         id="year"
// //                                                                                         value={selectedYear}
// //                                                                                         onChange={handleYearChange}
// //                                                                                 >
// //                                                                                         <option value="">Select a year</option>
// //                                                                                         {yearOptions.map((year) => (
// //                                                                                                 <option key={year} value={year}>
// //                                                                                                         {year}
// //                                                                                                 </option>
// //                                                                                         ))}
// //                                                                                 </select>
// //                                                                         </button>
// //                                                                 </li>
// //                                                                 <li>
// //                                                                         <button className='field'>
// //                                                                                 <select
// //                                                                                         className='field'
// //                                                                                         name="Subject"
// //                                                                                         value={selectedSubject}
// //                                                                                         onChange={(e) => setSelectedSubject(e.target.value)}
// //                                                                                 >
// //                                                                                         <option value="">Select a subject</option>
// //                                                                                         <option value="Physics">Physics</option>
// //                                                                                         <option value="Chemistry">Chemistry</option>
// //                                                                                         <option value="Medicine">Medicine</option>
// //                                                                                         <option value="Literature">Literature</option>
// //                                                                                         <option value="Peace">Peace</option>
// //                                                                                         <option value="Economic Science">Economic Science</option>
// //                                                                                 </select>
// //                                                                         </button>
// //                                                                 </li>
// //                                                         </ul>
// //                                                 </div>
// //                                         )}
// //                                         <hr />
// //                                 </div>
// //                                 <ul>
// //                                         {visibleData.slice(startIndex, endIndex).map((laureate) => (
// //                                                 <li className="" key={laureate.id}>
// //                                                         <div className='Card'>
// //                                                                 <div className='Top'>
// //                                                                         <Link to={`/laureate/${laureate.id}`}>
// //                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
// //                                                                         </Link>
// //                                                                 </div>
// //                                                                 <div className='Middle'>
// //                                                                         <img className="coin" src={Coin} alt='Coin' />
// //                                                                 </div>
// //                                                                 <div className='Bottom'>
// //                                                                         <p>
// //                                                                                 <strong>Year Awarded:</strong> {laureate.year}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Born:</strong> {laureate.born}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Gender:</strong> {laureate.gender}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Category:</strong> {laureate.category}
// //                                                                         </p>
// //                                                                         <p>
// //                                                                                 <strong>Country:</strong> {laureate.bornCountry}
// //                                                                         </p>
// //                                                                 </div>
// //                                                         </div>
// //                                                 </li>
// //                                         ))}
// //                                 </ul>
// //                                 <br />
// //                                 <div className="pagination">
// //                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
// //                                                 &#8249;
// //                                         </button>
// //                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
// //                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
// //                                                 &#8250;
// //                                         </button>
// //                                 </div>
// //                         </section>
// //                         <Routes>
// //                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
// //                         </Routes>
// //                 </>
// //         );
// // }

// // export default List;

// import React, { useState } from 'react';
// import laureatesData2 from '../Laureates-Json'; // Importing laureatesData from the provided data
// import { Link, Routes, Route } from 'react-router-dom';
// import LaureateDetails from "./LaureateDetails";
// import "../Styles/Style.css";
// import Coin from "../images/Nobel.png";
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const ITEMS_PER_PAGE = 4; // Number of items to show per page

// function List() {
//         // State hooks to manage filters and pagination
//         const [searchQuery, setSearchQuery] = useState('');
//         const [currentPage, setCurrentPage] = useState(1);
//         const [showFilters, setShowFilters] = useState(false);
//         const [selectedYear, setSelectedYear] = useState('');
//         const [selectedCountry, setSelectedCountry] = useState('');
//         const [selectedSubject, setSelectedSubject] = useState('');

//         // Handlers for filtering and pagination
//         const handleYearChange = (event) => {
//                 setSelectedYear(event.target.value);
//                 setCurrentPage(1); // Reset to the first page when the year filter is changed
//         };

//         const handlePrevPage = () => {
//                 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//         };

//         const handleNextPage = () => {
//                 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//         };

//         const handleFormSubmit = (event) => {
//                 event.preventDefault(); // Prevent form submission from refreshing the page
//         };
        

//         // Filter data based on selected filters
//         const filteredData = laureatesData2.filter((laureate) => {
//                 const isCountryMatch =
//                         selectedCountry === '' || laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
//                 const isYearMatch = selectedYear === '' || laureate.year === selectedYear.toString();
//                 const isSubjectMatch =
//                         selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

//                 return isCountryMatch && isYearMatch && isSubjectMatch;
//         });

//         // Filter data based on search query
//         const visibleData = filteredData.filter((laureate) => {
//                 const isNameMatch =
//                         laureate.firstname?.toLowerCase().includes(searchQuery) ||
//                         laureate.surname?.toLowerCase().includes(searchQuery);

//                 return isNameMatch;
//         });

//         // Calculate pagination
//         const totalItems = visibleData.length;
//         const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//         const endIndex = startIndex + ITEMS_PER_PAGE;

//         return (
//                 <>
//                         <section className='Main'>
//                                 <div className="search-container">
//                                         <form onSubmit={handleFormSubmit}>
//                                                 <input
//                                                         className="search"
//                                                         value={searchQuery}
//                                                         onChange={(event) => setSearchQuery(event.target.value)}
//                                                         type='search'
//                                                         placeholder='Search by first name or last name'
//                                                 />
//                                                 <button id="filter-button" className="filterbutton" onClick={() => setShowFilters(!showFilters)}>
//                                                         <FilterAltIcon fontSize="large" />
//                                                 </button>
//                                         </form>
//                                         {showFilters && (
//                                                 <div>
//                                                         <hr />
//                                                         <ul className='filter'>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Country"
//                                                                                         value={selectedCountry}
//                                                                                         onChange={(e) => setSelectedCountry(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a country</option>
//                                                                                         {laureatesData2.map((laureate) => (
//                                                                                                 <option key={laureate.id} value={laureate.bornCountry}>
//                                                                                                         {laureate.bornCountry}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         id="year"
//                                                                                         value={selectedYear}
//                                                                                         onChange={handleYearChange}
//                                                                                 >
//                                                                                         <option value="">Select a year</option>
//                                                                                         {laureatesData2.map((laureate) => (
//                                                                                                 <option key={laureate.id} value={laureate.year}>
//                                                                                                         {laureate.year}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                                 <li>
//                                                                         <button className='field'>
//                                                                                 <select
//                                                                                         className='field'
//                                                                                         name="Subject"
//                                                                                         value={selectedSubject}
//                                                                                         onChange={(e) => setSelectedSubject(e.target.value)}
//                                                                                 >
//                                                                                         <option value="">Select a subject</option>
//                                                                                         {laureatesData2.map((laureate) => (
//                                                                                                 <option key={laureate.id} value={laureate.category}>
//                                                                                                         {laureate.category}
//                                                                                                 </option>
//                                                                                         ))}
//                                                                                 </select>
//                                                                         </button>
//                                                                 </li>
//                                                         </ul>
//                                                 </div>
//                                         )}
//                                         <hr />
//                                 </div>
//                                 <ul>
//                                         {visibleData.slice(startIndex, endIndex).map((laureate) => (
//                                                 <li className="" key={laureate.id}>
//                                                         <div className='Card'>
//                                                                 <div className='Top'>
//                                                                         <Link to={`/laureate/${laureate.id}`}>
//                                                                                 <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
//                                                                         </Link>
//                                                                 </div>
//                                                                 <div className='Middle'>
//                                                                         <img className="coin" src={Coin} alt='Coin' />
//                                                                 </div>
//                                                                 <div className='Bottom'>
//                                                                         <p>
//                                                                                 <strong>Year Awarded:</strong> {laureate.year}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Born:</strong> {laureate.born}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Gender:</strong> {laureate.gender}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Category:</strong> {laureate.category}
//                                                                         </p>
//                                                                         <p>
//                                                                                 <strong>Country:</strong> {laureate.bornCountry}
//                                                                         </p>
//                                                                 </div>
//                                                         </div>
//                                                 </li>
//                                         ))}
//                                 </ul>
//                                 <br />
//                                 <div className="pagination">
//                                         <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
//                                                 &#8249;
//                                         </button>
//                                         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//                                         <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
//                                                 &#8250;
//                                         </button>
//                                 </div>
//                         </section>
//                         <Routes>
//                                 <Route path="/laureate/:id" element={<LaureateDetails />} />
//                         </Routes>
//                 </>
//         );
// }

// export default List;
import React, { useState } from 'react';
import laureatesData2 from '../Laureates-Json';
import { Link, Routes, Route } from 'react-router-dom';
import LaureateDetails from './LaureateDetails';
import '../Styles/Style.css';
import Coin from '../images/Nobel.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import countriesData from "../Country-json";

const ITEMS_PER_PAGE = 4;

function List() {
        const [searchQuery, setSearchQuery] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
        const [showFilters, setShowFilters] = useState(false);
        const [selectedYear, setSelectedYear] = useState('');
        const [selectedCountry, setSelectedCountry] = useState('');
        const [selectedSubject, setSelectedSubject] = useState('');

       
        const handlePrevPage = () => {
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        };

        const handleNextPage = () => {
                setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        };

        const handleFormSubmit = (event) => {
                event.preventDefault();
        };

        const filteredData = laureatesData2.filter((laureate) => {
                const isCountryMatch =
                        selectedCountry === '' ||
                        laureate.bornCountry?.toLowerCase() === selectedCountry.toLowerCase();
                const isYearMatch = selectedYear === '' || laureate.year === selectedYear.toString();
                const isSubjectMatch =
                        selectedSubject === '' || laureate.category?.toLowerCase() === selectedSubject.toLowerCase();

                return isCountryMatch && isYearMatch && isSubjectMatch;
        });

        const visibleData = filteredData.filter((laureate) => {
                const isNameMatch =
                        laureate.firstname?.toLowerCase().includes(searchQuery) ||
                        laureate.surname?.toLowerCase().includes(searchQuery);

                return isNameMatch;
        });

        const totalItems = visibleData.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        // Function to capitalize the input string
        const lOWERCASEString = (str) => {
                return str.toLowerCase();
        };

        const currentYear = new Date().getFullYear();
        const yearOptions = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);

        const handleYearChange = (event) => {
                setSelectedYear(event.target.value);
                setCurrentPage(1);
        };
        

        return (
                <>
                        <section className="Main">
                                <div className="search-container">
                                        <form onSubmit={handleFormSubmit}>
                                                <input
                                                        className="search"
                                                        value={lOWERCASEString(searchQuery)} // Convert input to capital letters
                                                        onChange={(event) => setSearchQuery(lOWERCASEString(event.target.value))}
                                                        type="search"
                                                        placeholder="Search by first name or last name (capital letters only)"
                                                />
                                                <button
                                                        id="filter-button"
                                                        className="filterbutton"
                                                        onClick={() => setShowFilters(!showFilters)}
                                                >
                                                        <FilterAltIcon fontSize="large" />
                                                </button>
                                        </form>
                                        {showFilters && (
                                                <div>
                                                        <hr />
                                                        <ul className="filter">
                                                                <li>
                                                                        <button className="field">
                                                                                <select
                                                                                        className="field"
                                                                                        name="Country"
                                                                                        value={selectedCountry}
                                                                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                                                                >
                                                                                        <option value="">Select a country</option>
                                                                                        {countriesData.map((country) => (
                                                                                                <option key={country.code} value={country.name}>
                                                                                                        {country.name}
                                                                                                </option>
                                                                                        ))}
                                                                                </select>
                                                                        </button>
                                                                </li>
                                                                <li>
                                                                        <button className="field">
                                                                                <select
                                                                                        className="field"
                                                                                        id="year"
                                                                                        value={selectedYear}
                                                                                        onChange={handleYearChange}
                                                                                >
                                                                                        <option value="">Select a year</option>
                                                                                        {yearOptions.map((year) => (
                                                                                                <option key={year} value={year}>
                                                                                                        {year}
                                                                                                </option>
                                                                                        ))}
                                                                                </select>
                                                                                {/* {selectedYear && <p>Selected Year: {selectedYear}</p>} */}
                                                                        </button>
                                                                </li>

                                                                <li>
                                                                        <button className="field">
                                                                                <select
                                                                                        className="field"
                                                                                        name="Subject"
                                                                                        value={selectedSubject}
                                                                                        onChange={(e) => setSelectedSubject(e.target.value)}
                                                                                >
                                                                                        <option value="">Select a subject</option>
                                                                                       <option className='field' value="Physics">Physics</option>
                                                                                       <option className='field' value="Chemistry">Chemistry</option>
                                                                                       <option className='field' value="Medicine">Medicine</option>
                                                                                       <option className='field' value="Literature">Literature</option>
                                                                                       <option className='field' value="Peace">Peace</option>
                                                                                       <option className='field' value="Economic Science">Economic Science</option>
                                                                                </select>
                                                                        </button>
                                                                </li>
                                                        </ul>
                                                </div>
                                        )}
                                        <hr />
                                </div>
                                <ul>
                                        {visibleData.slice(startIndex, endIndex).map((laureate) => (
                                                <li className="" key={laureate.id}>
                                                        <div className="Card">
                                                                <div className="Top">
                                                                        <Link to={`/laureate/${laureate.id}`}>
                                                                                <h2>{`${laureate.firstname} ${laureate.surname}`}</h2>
                                                                        </Link>
                                                                </div>
                                                                <div className="Middle">
                                                                        <img className="coin" src={Coin} alt="Coin" />
                                                                </div>
                                                                <div className="Bottom">
                                                                        <p>
                                                                                <strong>Year Awarded:</strong> {laureate.year}
                                                                        </p>
                                                                        <p>
                                                                                <strong>Born:</strong> {laureate.born}
                                                                        </p>
                                                                        <p>
                                                                                <strong>Gender:</strong> {laureate.gender}
                                                                        </p>
                                                                        <p>
                                                                                <strong>Category:</strong> {laureate.category}
                                                                        </p>
                                                                        <p>
                                                                                <strong>Country:</strong> {laureate.bornCountry}
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </li>
                                        ))}
                                </ul>
                                <br />
                                <div className="pagination">
                                        <button className="pgbtn" disabled={currentPage === 1} onClick={handlePrevPage}>
                                                &#8249;
                                        </button>
                                        <span>{`Page ${currentPage} of ${totalPages}`}</span>
                                        <button className="pgbtn" disabled={currentPage === totalPages} onClick={handleNextPage}>
                                                &#8250;
                                        </button>
                                </div>
                        </section>
                        <Routes>
                                <Route path="/laureate/:id" element={<LaureateDetails />} />
                        </Routes>
                </>
        );
}

export default List;

