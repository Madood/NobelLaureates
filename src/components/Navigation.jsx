import React, { useState } from 'react';
import "../Styles/Style.css";
import { Route, Routes, Link } from "react-router-dom";
import Events from "../NavigationPages/Events";
import Educational from '../NavigationPages/Educational';
import NewsInsights from '../NavigationPages/NewsInsights';
import AlfredNoble from '../NavigationPages/AlfredNobel';
import Laureates from '../NavigationPages/Laureates';
import Nomination from '../NavigationPages/Nomination';
import Home from "../NavigationPages/Home";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Result from "../NavigationPages/Result";
import LaureateDetails from '../Cards/LaureateDetails';
import List from '../Cards/List';

function Navigation() {

        const [isOpen, setIsOpen] = useState(false);

        return (
                <>
                        <section className="Navigation">

                                <button className="nav-btn open-btn" onClick={() => setIsOpen(true)} cursor="pointer" > {<MenuIcon />}</button>

                                <div className={isOpen ? 'nav visible' : 'nav'}>
                                        <button className="nav-btn close-btn" onClick={() => setIsOpen(false)} aria-hidden="true" cursor="pointer" >  {<ClearIcon />}</button>

                                        <ul className="list">

                                                <li><Link to="/Laureates">Noble-Prizes & Laureates </Link></li>
                                                <li><Link to="/Nomination">Nomination</Link></li>
                                                <li><Link to="/AlfredNoble">Alfred Nobel</Link></li>
                                                <li><Link to="/News">News & insights</Link></li>
                                                <li><Link to="/Events">Events</Link></li>
                                                <li><Link to="/Educational">Educational</Link></li>
                                              

                                        </ul>

                                </div>
                        </section>

                        <Routes>
                                <Route path="*" element={<Home />} ></Route>
                                <Route path='/result' element={<Result />}></Route>
                                <Route path="/Laureates/*" element={<Laureates />} ></Route>
                                <Route path="/Nomination" element={<Nomination />} ></Route >
                                <Route path="/AlfredNoble" element={<AlfredNoble />} ></Route >
                                <Route path="/News" element={<NewsInsights />} ></Route>
                                <Route path="/Events" element={<Events />} ></Route>
                                <Route path="/Educational" element={<Educational />} ></Route>
                                <Route path="/laureate/:id" element={<LaureateDetails />} />
                                <Route path="/*" element={<List />} />


                        </Routes>


                </>

        )
}
export default Navigation;

