import { useDispatch } from "react-redux";

import { followUser, unfollowUser } from "../../redux/operations";

import {
  Avatar,
  Card,
  Followers,
  Img,
  ItemBtnFollow,
  ItemBtnUnfollow,
  Logo,
  Round,
  Tweets,
} from "./TweetItem.styled";
import vector from "../../img/vector.png";
import img from "../../img/img.png";

export default function TweetItem({
  avatar,
  id,
  tweets,
  followers,
  isFollowed,
}) {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    if (!isFollowed) {
      dispatch(followUser([id, followers]));
    } else {
      dispatch(unfollowUser([id, followers]));
    }
  };
  return (
    <Card>
      <Logo src={vector} alt="Logo" />
      <Img src={img} alt="img photo" />

      <Round>
        <Avatar src={avatar} alt="user photo" />
      </Round>

      <Tweets>{tweets} tweets</Tweets>

      <Followers>{followers.toLocaleString("en-US")} followers</Followers>
      {isFollowed ? (
        <ItemBtnUnfollow onClick={(id) => onHandleClick()}>
          following
        </ItemBtnUnfollow>
      ) : (
        <ItemBtnFollow onClick={(id) => onHandleClick()}>follow</ItemBtnFollow>
      )}
    </Card>
  );
}
