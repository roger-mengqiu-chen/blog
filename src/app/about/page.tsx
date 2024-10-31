import { Paper, Toolbar } from "@mui/material";
import styles from '@/app/about/page.module.css';

const AboutPage = () => {
	return(
		<>
			<Toolbar />
			<Paper elevation={3} className={styles.about}>
				<p>Hi, my name is Mengqiu, a full stack developer currently working in DataDrill Communications. My friends usually call me Roger.</p>

				<p>I have Bachelor of Science degree from University of British Columbia and Diploma of Information Technology from Southern Alberta Institution of Technology. After working in several industries, I finally decided to live as a full stack developer. The journey is not easy but I have made my first step, working as a software developer in a communication company.</p>

				<p>Currently, my primary programming language is Python. I also can code with Java, JavaScript, SQL and C++.</p>

				<p>I have finished several applications, including timesheets, inventory management and report. I also worked with a project that is running on Raspberry Pi and has interactions with different RF sensors and components. Although the most projects I had touched with are web based, I am trying to spend more time in working with hardware.</p>
			</Paper>
		</>
	)
}

export default AboutPage;