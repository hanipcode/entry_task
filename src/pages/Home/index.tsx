import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cxbind from 'classnames/bind';
import PageLayout from '../../containers/PageLayout';
import * as postActions from '../../modules/posts/action';
import Header from '../../components/Header';
import { RootState } from '../../modules';
import { IPost } from '../../types/post.types';
import Loading from '../../components/Loading';
import styles from './home.module.scss';
import ListItem from '../../components/ListItem';

const cx = cxbind.bind(styles);

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
      <div className={cx('home')}>
        {posts.map(post => (
          <ListItem post={post} />
        ))}
      </div>
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
