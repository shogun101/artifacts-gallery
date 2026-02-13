export const artifactsQuery = `*[_type == "artifact"] | order(order asc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  prompt,
  sourceType,
  sourceUrl,
  order
}`
