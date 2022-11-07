import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul onClick={onClick}>
      {gallery.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} url={ webformatURL} tags={tags} />
      })}
    </ul>
  )
 };