import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => (
<div id="footer" className="">
<div className="spinner-grow text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<h1>Loading...</h1>
<div className="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger percent" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
</div>
)
export default Footer;
