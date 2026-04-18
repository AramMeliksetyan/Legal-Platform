/**
 * Asset filenames in public/images (Unicode). Use `publicImage()` for safe URLs.
 */
export const SITE_IMAGES = {
  corporate: "կորպորատիվ իրավունք.jpg",
  civil: "քաղաքացիական իրավունք.webp",
  tax: "Հարկային իրավունք.jpg",
  family: "ընտանեկան իրավունք.jpg",
  business: "գործարար իրավունք.webp",
  court: "դատական ներկայացուցչություն.jpg",
  professionalism: "պրոֆեսիոնալիզմ.jpg",
  responsibility: "պատասխանատվություն.webp",
  trustworthiness: "վստահելիություն.avif",
  personalApproach: "անհատական մոտեցում.jpg",
} as const;

export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}
