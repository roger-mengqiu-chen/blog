export const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/blog" : "");

export function normalizePublicAsset(src: string) {
    if (!src) return src;
    if (/^(https?:)?\/\//.test(src) || src.startsWith("#") || src.startsWith("data:")) return src;
    const cleaned = src.replace(/^(\.\/|\.\.\/)+/, "").replace(/^\/+/, "");
    return `/${cleaned}`;
}
