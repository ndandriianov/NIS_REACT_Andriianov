import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface isFavouriteIconProps {
  isFavourite: boolean;
}

function IsFavoriteIcon({isFavourite}: isFavouriteIconProps) {
  return isFavourite ? (
    <FavoriteIcon sx={{color: 'red'}}/>
  ) : (
    <FavoriteBorderIcon sx={{color: 'red'}}/>
  )
}

export default IsFavoriteIcon;