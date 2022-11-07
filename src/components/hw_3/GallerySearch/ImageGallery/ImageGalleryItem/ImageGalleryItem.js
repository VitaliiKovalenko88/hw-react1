export const ImageGalleryItem = ({ url, tags, modalUrl}) => {
  return (
    <li>
      <img data-image={modalUrl} src={url} alt={tags} width='200' />
    </li>)
};