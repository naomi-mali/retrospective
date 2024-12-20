import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

/**
 * Component for displaying a single post with options for interaction.
 *
 * @param {Object} props - Post data including id, owner, profile details, likes, comments, and more
 * @return {JSX.Element} A card displaying the post with interactive elements
 */
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

  /**
   * Handles redirecting to the edit post page.
   */
  const handleEdit = () => history.push(`/posts/${id}/edit`);

  /**
   * Handles deleting a post and redirects to the discover page.
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push(`/discover/`);
    } catch (err) {
    }
  };

  /**
   * Handles liking a post and updates the post's like count.
   */
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
    }
  };

  /**
   * Handles unliking a post and updates the post's like count.
   */
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
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {/* Displaying owner's profile and name */}
          <Link to={`/profiles/${profile_id}`} className={styles.OwnerName}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>

          {/* Displaying post update time and options for the owner */}
          <div className="d-flex align-items-center">
            <span className={styles.PostDate}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
          </div>
        </Media>

        <Card.Body>
          {/* Displaying post image */}
          <div className={styles.PostImageWrapper}>
            <Link to={`/posts/${id}`}>
              <Card.Img src={image} alt={title} />
            </Link>
          </div>

          {/* Displaying post title if available */}
          {title && <div className={styles.PolaroidCaption}>{title}</div>}
        </Card.Body>

        <Card.Body>
          {/* Displaying post details like category, description, and location */}
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

        {/* Post interaction bar with like and comment actions */}
        <div className={styles.PostBar}>
          {/* Handling like and unlike actions */}
          {is_owner ? (
            <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own post!</Tooltip>}>
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

          {/* Handling comments section */}
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
