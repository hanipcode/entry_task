import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cxbind from 'classnames/bind';
import PageLayout from '../../containers/PageLayout';
import * as postActions from '../../modules/posts/action';
import * as userActions from '../../modules/user/action';
import Header from '../../components/Header';
import { RootState } from '../../modules';
import { IPost } from '../../types/post.types';
import Loading from '../../components/Loading';
import styles from './home.module.scss';
import ListItem from '../../components/ListItem';

const cx = cxbind.bind(styles);

type Props = {
  posts: IPost[];
  likes: number[];
  participated: number[];
  startFetchPosts: Function;
  isLoading: boolean;
  likePost: Function;
  fetchParticipated: Function;
  fetchLiked: Function;
  participatePost: Function;
};

const Home: React.FunctionComponent<Props> = ({
  posts,
  startFetchPosts,
  isLoading,
  likes,
  participated,
  likePost,
  fetchParticipated,
  fetchLiked,
  participatePost
}: Props) => {
  useEffect(() => {
    startFetchPosts();
    fetchParticipated();
    fetchLiked();
  }, [fetchLiked, fetchParticipated, startFetchPosts]);
  return (
    <PageLayout>
      <Loading isVisible={isLoading && posts.length === 0} />
      <Header />
      <div className={cx('home')}>
        {posts.map(post => (
          <ListItem
            post={post}
            isLiked={likes.includes(post.id)}
            isParticipated={participated.includes(post.id)}
            likePost={likePost}
            participatePost={participatePost}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default connect(
  (state: RootState) => ({
    posts: state.post.posts,
    likes: state.user.liked,
    participated: state.user.participated,
    isLoading: state.post.loading
  }),
  {
    ...postActions,
    ...userActions
  }
)(Home);
