import { StyledImageGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <StyledImageGallery onClick={onClick} >
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => {
        return <ImageGalleryItem key={id} url={webformatURL} tags={tags} modalUrl={largeImageURL} />
      })}
    </StyledImageGallery>
  )
 };