import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/download.png";

// import HeroBannerImage from "../assets/images/images.png";

const ProjectDetailPage = () => (
    <div class="project">
    <h2>Project Name</h2>
    <p>Description of the project</p>
    <a href="https://wl0523.github.io/fitness/" target="_blank" rel="noopener noreferrer">View Live Site</a>
  </div>
);

export default ProjectDetailPage;
