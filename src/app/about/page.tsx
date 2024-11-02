import { Paper } from "@mui/material";
import styles from '@/app/about/page.module.css';

const AboutPage = () => {
	return(
		<>
			<Paper elevation={3} className={styles.about}>
				<p>Hi, my name is Mengqiu, a full stack developer currently working in DataDrill Communications. My friends usually call me Roger.</p>

				<p>I have Bachelor of Science degree from University of British Columbia and Diploma of Information Technology from Southern Alberta Institution of Technology. After working in several industries, I finally decide to live as a software developer. During after-work time, I like playing computer games and hiking.</p>

				<p>Currently, my primary programming language is Python. I also can code with Java, JavaScript, SQL and C++.</p>

				<p>I have finished several project, including timesheets, inventory management and report. I also worked with a project that is running on Raspberry Pi and has interactions with different RF sensors and components. Although the most projects I had touched with are web based, I am trying to spend more time in working with hardware.</p>
			</Paper>
		</>
	)
}

export default AboutPage;