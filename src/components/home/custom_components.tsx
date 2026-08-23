import Image from 'next/image';
import styles from '@/components/home/custom_components.module.css';

interface CustomImageProps {
  src: string;
  alt: string;
}

const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/blog" : "");

function normalizePublicAsset(src: string) {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("#") || src.startsWith("data:")) return src;
  const cleaned = src.replace(/^(\.\/|\.\.\/)+/, "").replace(/^\/+/, "");
  return `/images/${cleaned}`;
}

export const CustomImage = ({ src, alt }: CustomImageProps) => {
  src = normalizePublicAsset(src);
  return (
    <Image src={src} alt={alt} width={0} height={0} className={styles.post_image}/>
  )
}

export const CustomLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const safeHref =
      href && href.startsWith("/") && !href.startsWith(basePath)
          ? `${basePath}${href}`
          : href;

  return (
    <a href={safeHref} className={styles.link}>{children}</a>
  )
}

export const BlockQuote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className={styles.blockquote}>{children}</blockquote>
  )
}
