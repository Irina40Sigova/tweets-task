import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Paper } from "@mui/material";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

import {
  fetchAll,
  fetchFollow,
  fetchFollowing,
  fetchTotalPages,
} from "../redux/operations";
import {
  selectUsers,
  selectError,
  selectIsLoading,
  selectTotalPages,
} from "../redux/selectors";

import TweetItem from "./TweetItem/TweetItem";
import Loader from "./Loader/Loader";

localStorage.setItem("targetPage", 1);

const defaultCase = () => {
  localStorage.setItem(
    "targetPage",
    Number(localStorage.getItem("targetPage")) + 1
  );
};

export default function TweetList() {
  const dispatch = useDispatch();

  const loadMore = () => {
    const filterType = localStorage.getItem("filter");

    switch (filterType) {
      case "all":
        defaultCase();
        dispatch(fetchAll(Number(localStorage.getItem("targetPage"))));
        break;

      case "follow":
        defaultCase();
        dispatch(fetchFollow(Number(localStorage.getItem("targetPage"))));
        break;

      case "following":
        defaultCase();
        dispatch(fetchFollowing(Number(localStorage.getItem("targetPage"))));
        break;
      default:
        break;
    }
  };

  const userList = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (localStorage.getItem("targetPage") !== "1") {
      return;
    } else {
      localStorage.setItem("filter", "all");
      dispatch(fetchTotalPages());
      dispatch(fetchAll(1));
    }
  }, [dispatch]);

  let targetPage = localStorage.getItem("targetPage");

  return (
    <Paper
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}

      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "100px",
          marginTop: "30px",
        }}
      >
        {userList.length > 0 ? (
          userList.map((item) => (
            <TweetItem
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              tweets={item.tweets}
              followers={item.followers}
              isFollowed={item.isFollowed}
            />
          ))
        ) : (
          <p>Unfortunately, there are no records in the database</p>
        )}
      </List>
      {totalPages > Number(targetPage) && (
        <Button
          sx={{ alignSelf: "center", marginTop: "30px" }}
          variant="contained"
          type="button"
          onClick={() => loadMore()}
        >
          Load More
        </Button>
      )}
    </Paper>
  );
}
