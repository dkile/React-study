import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;

const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading["sample/GET_POST"],
      loadingUsers: loading["sample/GET_POST"],
    })
  );

  const dispatch = useDispatch();

  const onGetPost = useCallback((id) => dispatch(getPost(id)), [dispatch]);
  const onGetUsers = useCallback(() => dispatch(getUsers()), [dispatch]);

  useEffect(() => {
    onGetPost(1);
    onGetUsers(1);
  }, [onGetPost, onGetUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
