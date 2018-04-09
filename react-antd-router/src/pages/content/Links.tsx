import * as React from 'react';
import { Link } from 'react-router-dom';
const Links = () => (
  <div>
    <Link to="/">Home</Link> ||
    <Link to="/About">About</Link> ||
    <Link to="/About/Jesus?isShowDetail=false">About?</Link> ||
    <Link to="/About/Mark?isShowDetail=true">mark up out</Link>
  </div>
);

export default Links;
