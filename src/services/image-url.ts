const getCroppedImageUrl = (url: string) => {
  if (url) {
    const endKey = "media/";
    const endIndex = url.indexOf(endKey) + endKey.length;
    const firstPartUrl = url.slice(0, endIndex);
    const secondPartUrl = url.slice(endIndex, url.length);
    return firstPartUrl + "crop/600/400/" + secondPartUrl;
  }
  return url;
};

export default getCroppedImageUrl;
