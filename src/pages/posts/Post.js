import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    description,
    category,
    location,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => history.push(`/posts/${id}/edit`);
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push(`/discover/`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReport = () => history.push(`/posts/${id}/report`);

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) =>
          post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) =>
          post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className={styles.OwnerName}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.PostDate}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
            {!is_owner && postPage && <MoreDropdown handleReport={handleReport} />}
          </div>
        </Media>

        <Card.Body>
          <div className={styles.PostImageWrapper}>
            <Link to={`/posts/${id}`}>
              <Card.Img src={image} alt={title} />
            </Link>
          </div>
          {title && <div className={styles.PolaroidCaption}>{title}</div>}
        </Card.Body>

        <Card.Body>
          {category && postPage && (
            <div className={styles.PostDetailWrapper}>
              <span className={styles.Category}>#{category}</span>
            </div>
          )}
          {description && postPage && (
            <div className={styles.PostDetailWrapper}>
              <span className={styles.Description}>{description}</span>
            </div>
          )}
          {location && postPage && (
            <div className={styles.PostDetailWrapper}>
              <span className={styles.Location}>{location}</span>
            </div>
          )}
        </Card.Body>

        <div className={styles.PostBar}>
          {is_owner ? (
             <OverlayTrigger placement="top" overlay={<Tooltip>You cant't like your own post!</Tooltip>}>
             <i className={`far fa-heart ${styles.HeartOutline}`} />
           </OverlayTrigger>
             
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts!</Tooltip>}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </OverlayTrigger>
          )}
          {likes_count}
          {currentUser ? (
  <Link to={`/posts/${id}`}>
    <i className={`far fa-comments ${styles.CommentOutline}`} />
  </Link>
) : (
  <OverlayTrigger placement="top" overlay={<Tooltip>Log in to comment!</Tooltip>}>
    <i className={`far fa-comments ${styles.CommentOutline}`} />
  </OverlayTrigger>
)}
{comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
