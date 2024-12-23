export const images = [
  "images/img_1.webp",
  "images/img_2.webp",
  "images/img_3.webp",
  "images/img_4.webp",
  "images/img_5.webp",
  "images/img_6.webp",
  "images/img_7.webp",
  "images/img_8.webp",
  "images/img_9.webp",
];

export const getImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
