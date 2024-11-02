import Image from 'next/image';
import styles from '@/components/home/custom_image.module.css';

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage = ({ src, alt }: CustomImageProps) => {
  src = "../images/" + src;
  return (
    <Image src={src} alt={alt} width={0} height={0} className={styles.post_image}/>
  )
}

export default CustomImage;
