import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

/**
 * 
 * @returns Sitemap from uploaded file
 */
const Sitemap = () => {
  const [siteMap, setSiteMap] = useState('');
  useEffect(() => {
    fetch('http://localhost:4500/api/v1/maps')
      .then(res => res.json())
      .then(data => setSiteMap(data.body.replace(/(\r\n|\n|\r)/gm, " ")))

  }, [])


  return (
    <>
      <Typography variant="h5" align="center" color="textPrimary">
        {siteMap}
      </Typography>
    </>
  );
};

export default Sitemap;
