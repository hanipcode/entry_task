import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageLayout from '../../containers/PageLayout';
import * as postActions from '../../modules/posts/action';
import Header from '../../components/Header';
import { RootState } from '../../modules';
import { IPost } from '../../types/post.types';
import Loading from '../../components/Loading';

type Props = {
  posts: IPost[];
  startFetchPosts: Function;
  isLoading: boolean;
};

const Home: React.FunctionComponent<Props> = ({
  posts,
  startFetchPosts,
  isLoading
}: Props) => {
  useEffect(() => {
    startFetchPosts();
  }, [startFetchPosts]);
  console.log(posts);
  return (
    <PageLayout>
      <Loading isVisible={isLoading && posts.length === 0} />
      <Header />
    </PageLayout>
  );
};

export default connect(
  (state: RootState) => ({
    posts: state.post.posts,
    isLoading: state.post.loading
  }),
  postActions
)(Home);
