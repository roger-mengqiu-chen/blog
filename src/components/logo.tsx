import Avatar from '@mui/material/Avatar';
import Link from 'next/link';


const Logo = () => {
	return (
		<Link href="/">
			<Avatar src="/icon.jpeg" alt="logo" />
		</Link>
	);
}

export default Logo;
