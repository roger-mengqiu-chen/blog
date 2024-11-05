import Image from 'next/image';
import styles from '@/components/home/custom_components.module.css';

interface CustomImageProps {
  src: string;
  alt: string;
}

export const CustomImage = ({ src, alt }: CustomImageProps) => {
  src = "../images/" + src;
  return (
    <Image src={src} alt={alt} width={0} height={0} className={styles.post_image}/>
  )
}

export const CustomLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a href={href} className={styles.link}>{children}</a>
  )
}
