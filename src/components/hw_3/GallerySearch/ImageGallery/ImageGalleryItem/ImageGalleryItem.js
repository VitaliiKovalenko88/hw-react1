export const ImageGalleryItem = ({ url, tags}) => {
  return (
    <li>
      <img src={url} alt={tags} />
    </li>)
};