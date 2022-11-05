import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      {gallery.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} url={ webformatURL} tags={tags} />
      })}
    </ul>
  )
 };