import { Image, ImageItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ url, tags, modalUrl}) => {
  return (
    <ImageItem>
      <Image data-image={modalUrl} src={url} alt={tags} width='200' />
    </ImageItem>)
};