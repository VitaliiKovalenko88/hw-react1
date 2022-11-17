import { LoadBtn } from "./Button.styled";

export const Button = ({ onLoadMore }) => {
  return (
    <LoadBtn onClick={onLoadMore}>Load more</LoadBtn>
  )
};