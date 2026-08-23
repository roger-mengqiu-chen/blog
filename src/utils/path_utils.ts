export const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/blog" : "/");

export const normalizePublicAsset = (src: string) => {
    return `${basePath}${src.startsWith("/") ? src : `/${src}`}`;
}
