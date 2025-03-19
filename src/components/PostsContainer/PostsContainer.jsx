import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getForumWithId, getPosts } from '../../api/backend';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import styles from './PostsContainer.module.css';
import { useActiveUser } from '../UserContext/UserContext';

export default function PostsContainer() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const getPostsData = useCallback(async () => {
    setLoading(true);
    const postData = await getPosts(id);
    setPosts([...postData]);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (!id) navigate('/forum');
  }, [id, navigate]);

  useEffect(() => {
    const getTitle = async () => {
      const forumData = await getForumWithId(id);
      if (forumData.status === 401) {
        navigate('/forum');
      }
      setTitle(forumData.title);
      // if can't get title, the forum dont exist. redirect?
    };
    // const getPostsData = async () => {
    //   const data = await getPosts(id);
    //   setPosts(data);
    //   setLoading(false);
    // };
    getTitle();
    getPostsData();
  }, [id, navigate, getPostsData]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>{title}</h1>
      {posts.length === 0 ? (
        <div>
          <i>No posts yet...</i>
        </div>
      ) : (
        posts.map(post => <Post key={post.id} post={post} />)
      )}
      <NewPost forumId={id} handleSubmitPost={getPostsData} />
    </>
  );
}
