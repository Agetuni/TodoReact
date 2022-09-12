import React from "react"
import {  Link, Route, Routes } from "react-router-dom"
import SinglePage from "./SinglePage"

export default function About() {
  return <div>
      <ul>
          <li>
              <Link to="about-app">About App</Link>
          </li>
          <li>
              <Link to="about-author">About Author</Link>
          </li>
      </ul>
      <Routes>
          <Route path="about/:slug" component={<SinglePage/>}/>
      </Routes>
  </div>
}