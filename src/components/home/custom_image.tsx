import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage = ({ src, alt }: CustomImageProps) => {
  src = "../images/" + src;
  return (
    <Image src={src} alt={alt} width={600} height={400} />
  )  
}

export default CustomImage;
