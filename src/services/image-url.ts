//This component is for generating an bg images by cropping and reduscing the size, for better performance.

const getOptimizedImageUrl = (url: string) => {
  const targetURL = "media/";
  const index = url.indexOf(targetURL) + targetURL.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getOptimizedImageUrl;
