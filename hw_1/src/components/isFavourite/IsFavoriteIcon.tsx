import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface isFavouriteIconProps {
  isFavourite: boolean;
  handleClick: () => void;
}

function IsFavoriteIcon({isFavourite, handleClick}: isFavouriteIconProps) {
  return (
    <div onClick={handleClick}>
      {isFavourite ? (
        <FavoriteIcon sx={{color: 'red'}}/>
      ) : (
        <FavoriteBorderIcon sx={{color: 'red'}}/>
      )}
    </div>
  )
}

export default IsFavoriteIcon;