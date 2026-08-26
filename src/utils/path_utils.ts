export const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH || '';

export const normalizePublicAsset = (src: string) => {
    console.log(`Normalizing asset path: ${src} with basePath: ${basePath}`);
    const path = `${basePath}${src.startsWith("/") ? src : `/${src}`}`;
    console.log(`Normalized asset path: ${path}`);
    return path;
}
