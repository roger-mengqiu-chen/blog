import React from "react";
import styles from "./about.module.css";
import { Box, Paper } from "@mui/material";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';

export const generateStaticParams = async () => {
	return [{slug: "about"}]
}

export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Blog | About`,
    description: "Blog from Roger Chen",
  }
}

const AboutPage = () => {
	return (
    <>
      <h1 className={styles.title}>About Me</h1>
      <Paper elevation={3} className={styles.card}>
        <p>Hi, my name is Roger Chen, a software developer currently working in DataDrill Communications in Calgary, Canada.</p>

        <p>I have Bachelor of Science degree from University of British Columbia and Diploma of Information Technology from Southern Alberta Institution of Technology. After working in several industries, I finally decide to live as a software developer. During after-work time, I like playing computer games and hiking.</p>

        <p>Currently, my primary programming language is Python. I also can code with Java, JavaScript, SQL and C++.</p>

        <p>I have finished several projects during my last a few years, including timesheets, inventory management report and of course this site! I also worked with a project that is deployed on Raspberry Pi and has interactions with different RF sensors and components. Although the most projects I had touched with are web based, I am trying to spend more time in working with hardware. You will see more projects and posts here in the future.</p>

      </Paper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 8 }} >
            <Paper elevation={3} className={styles.card}>
              <Divider component="li"><h2>Experiences</h2></Divider>
              
              <b>2022 Sep - Present: Software Developer, DataDrill Communications, Calgary, Canada</b>
              <ul className={styles.ul}>
                  <li className={styles.li}>
                    Refactored and maintained existing Python Django applications following clean code and SOLID principles
                  </li>
                <li className={styles.li}>Improved the performance of several existing REST APIs up to 5 times</li>
                
                <li className={styles.li}>Speeded up loading time up to 10 times for a Django admin section with over 4 million records</li>
                <li className={styles.li}>Designed and implemented an event driven system with MQTT to control the RF sensors, motor and GPIOs on Linux OS.</li>
                <li className={styles.li}>Simplified a web server application with Flask and reduced the startup time from 30 seconds to 2 seconds</li>
                <li className={styles.li}>Developed inventory report applications with Nextjs, Pandas and Power BI, which does data analysis for the company to forecast the product demand</li>
                <li className={styles.li}>Database design and administration with MySQL</li>
                <li className={styles.li}>Deployed applications with Microsoft Azure Cloud App services, Windows IIS and Docker containers</li>
              </ul>

              <b>2022 Jul - Sep: Volunteer Backend Developer, 65SQuare, remote</b>
              <ul className={styles.ul}>
                <li className={styles.li}>Reviewed the design documents and provided feedback</li>
                <li className={styles.li}>Tested usability of existing APIs and applications</li>
                <li className={styles.li}>Assisted deploying applications with Docker containers</li>
              </ul>
              
              <Divider><h2>Rewards</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}>2021: Json Lang Scholarship, Southern Alberta Institution of Technology</li>
              </ul>
            </Paper>
          </Grid>

          <Grid size={{ xs:12, md:4}}>
            <Paper elevation={3} className={styles.card}>
              <Divider><h2>Skills</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}>Event driven programming</li>
                <li className={styles.li}>Test driven development</li>
                <li className={styles.li}>RESTful API design</li>
                <li className={styles.li}>Azure governance and security</li>
                <li className={styles.li}>Data analysis with Pandas and Power BI</li>
                <li className={styles.li}>Database design with MySQL</li>
                <li className={styles.li}>Web development with Django, Flask, Next.js and Spring Boot</li>
                <li className={styles.li}>Git and GitHub</li>
                <li className={styles.li}>Docker</li>
                <li className={styles.li}>Linux, Windows and MacOS</li>
                <li className={styles.li}>Agile methodology</li>
              </ul>

              <Divider><h2>Education</h2></Divider>
              <ul className={styles.ul}>
                <li className={styles.li}><b>2020 - 2022: Diploma of Information Technology</b>, Southern Alberta Institution of Technology</li>
                <li className={styles.li}><b>2012 - 2015: Bachelor of Science</b>, University of British Columbia</li>
                
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
	)
}

export default AboutPage;
