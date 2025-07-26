import React from "react";
import styles from "./about.module.css";
import { Box, Paper } from "@mui/material";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { ProjectFlow } from "@/components/home/home";
import { Profile } from "@/components/home/profile";


const Home = () => {
  return (
    <>
      <Profile />
      <ProjectFlow />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 8 }} >
            <Paper elevation={3} className={styles.card}>
              <Divider component="li"><h2>Experience</h2></Divider>
              
              <b>2022 Sep - Present: Software Developer, DataDrill Communications, Calgary, Canada</b>
              <ul className={styles.ul}>
                <li className={styles.li}>Improved the performance of several existing REST APIs up to 5 times</li>
                <li className={styles.li}>Speeded up loading time up to 10 times for a Django admin section with over 4 million records</li>
                <li className={styles.li}>Designed and implemented an event driven system with MQTT to control the RF sensors, motor and GPIOs on Raspberry Pi.</li>
                <li className={styles.li}>Created an embedded program on ESP32 to control a rotator.</li>
                <li className={styles.li}>Simplified a web server application with Flask and sped up the startup process over 10 times.</li>
                <li className={styles.li}>Developed inventory report applications with MongoDB, Nextjs, Pandas and Power BI to forecast the product demand for the company</li>
                <li className={styles.li}>Refactored and maintained existing Python Django applications following clean code and SOLID principles</li>
                <li className={styles.li}>Database design and administration with MySQL/SQL Server</li>
                <li className={styles.li}>Deployed applications with Microsoft Azure Cloud App services, Windows IIS and Docker containers/podman</li>
              </ul>

              <b>2022 Jul - Sep: Volunteer Backend Developer, 65Square, remote</b>
              <ul className={styles.ul}>
                <li className={styles.li}>Reviewed the design documents and provided feedback</li>
                <li className={styles.li}>Tested usability of existing APIs and applications</li>
                <li className={styles.li}>Assisted deploying applications with Docker containers</li>
              </ul>
              
              <Divider><h2>Rewards</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}>2021: Jason Lang Scholarship, Southern Alberta Institution of Technology</li>
              </ul>
            </Paper>
          </Grid>

          <Grid size={{ xs:12, md:4}}>
            <Paper elevation={3} className={styles.card}>
              <Divider><h2>Skills</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}>Event driven programming</li>
                <li className={styles.li}>Test driven development</li>
                <li className={styles.li}>RESTful API / GraphQL</li>
                <li className={styles.li}>Azure governance and security</li>
                <li className={styles.li}>Data analysis with Pandas and Power BI</li>
                <li className={styles.li}>MySQL / PostgreSQL</li>
                <li className={styles.li}>Web development with Django, Flask, FastAPI, Next.js/React.js and Spring Boot</li>
                <li className={styles.li}>Git and GitHub</li>
                <li className={styles.li}>Docker / Podman</li>
                <li className={styles.li}>Linux, Windows and MacOS</li>
                <li className={styles.li}>Agile methodology</li>
              </ul>

              <Divider><h2>Education</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}><b>2020 - 2022: Diploma of Information Technology</b>, Southern Alberta Institution of Technology</li>
                <li className={styles.li}><b>2012 - 2015: Bachelor of Science</b>, University of British Columbia</li>
                <li className={styles.li}><b>2012 - 2015: Bachelor of Forestry</b>, Nanjing Forestry University</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
