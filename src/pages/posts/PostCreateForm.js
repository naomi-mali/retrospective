import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

// Importing necessary styling files
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// Importing axios for making API requests
import { axiosReq } from "../../api/axiosDefaults";
// Custom hook for redirecting users based on their authentication status
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  // Ensures that only logged-in users can access this form
  useRedirect("loggedOut");

  // State to manage form input values and validation errors
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    image: "",
  });

  // Destructuring postData to easily access form values
  const { title, description, location, image, category } = postData;

  // Refs for accessing image file input directly
  const imageInput = useRef(null);

  // History hook for redirecting after form submission
  const history = useHistory();

  // Handles changes in text inputs (title, description, location, category)
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles image file input changes, updates the image preview
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      // Revoke any previous object URL for the image to avoid memory leaks
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Handles form submission, sends the data to the backend to create a post
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Appending form data to the FormData object for submission
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", imageInput.current.files[0]);
    formData.append("category", category);

    try {
      // Sending POST request to backend to create a new post
      const { data } = await axiosReq.post("/posts/", formData);
      // Redirecting to the newly created post's page
      history.push(`/posts/${data.id}`);
    } catch (err) {
      // Handling error responses, displaying errors on the form
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Text fields to render for title, description, location, and category inputs
  const textFields = (
    <div className={styles.FormContainer}>
      {/* Title input field */}
      <Form.Group className={styles.FormGroup}>
        <Form.Label className={styles.FormLabel}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className={styles.FormControl}
          placeholder="Add a title of your post"
        />
        {/* Displaying error message for title if any */}
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      {/* Description input field */}
      <Form.Group className={styles.FormGroup}>
        <Form.Label className={styles.FormLabel}>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
          className={styles.FormControl}
          placeholder="Describe your post here"
        />
        {/* Displaying error message for description if any */}
        {errors?.description?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      {/* Location input field */}
      <Form.Group className={styles.FormGroup}>
        <Form.Label className={styles.FormLabel}>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          className={styles.FormControl}
          placeholder="Enter the location of your post"
        />
        {/* Displaying error message for location if any */}
        {errors?.location?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      {/* Category selection dropdown */}
      <Form.Group className={styles.FormGroup}>
        <Form.Label className={styles.FormLabel}>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          className={styles.Input}
          defaultValue="select"
          onChange={handleChange}
        >
          <option value="select">Please select a category</option>
          {/* Option for categories (these options can be expanded) */}
          <option value="family-and-friends">Family and Friends</option>
          <option value="everyday-life-&-candid-moments">Everyday Life & Candid Moments</option>
          <option value="nature-and-landscapes">Nature and Landscapes</option>
          <option value="cityscapes-and-architecture">Cityscapes and Architecture</option>
          <option value="food-and-drinks">Food and Drinks</option>
          <option value="people-and-portraits">People and Portraits</option>
          <option value="fashion-and-style">Fashion and Style</option>
          <option value="travel-and-adventure">Travel and Adventure</option>
          <option value="art-and-creativity">Art and Creativity</option>
          <option value="fitness-and-health">Fitness and Health</option>
          <option value="technology-and-gadgets">Technology and Gadgets</option>
          <option value="pets-and-animals">Pets and Animals</option>
          <option value="events-and-celebrations">Events and Celebrations</option>
          <option value="abstract-and-conceptual">Abstract and Conceptual</option>
          <option value="seasonal-and-holiday">Seasonal and Holiday</option>
          <option value="vintage-and-retro">Vintage and Retro</option>
          <option value="self-portraits">Self-Portraits</option>
          <option value="street-photography">Street Photography</option>
          <option value="relationships">Relationships</option>
          <option value="other">Other</option>
        </Form.Control>
        {/* Displaying error message for category if any */}
        {errors?.category?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      {/* Submit and Cancel buttons */}
      <div className={styles.ButtonContainer}>
        <Button
          className={`${styles.ButtonCancel} ${styles.Button}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button
          className={`${styles.ButtonCreate} ${styles.Button}`}
          type="submit"
        >
          Create
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Page title */}
      <h1
        className={`${appStyles.Handwritten} text-center pt-7 pb-9 ${styles.LargeScreenTitle}`}
      >
        Create a post
      </h1>

      {/* The form element */}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row>
          {/* Left column for image upload and text fields on large screens */}
          <Col md={7} lg={8} className="py-2 p-0 p-md-2">
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {/* Image preview and change option */}
                {image ? (
                  <>
                    <figure>
                      <Image
                        className={appStyles.Image}
                        src={image}
                        rounded
                        style={{
                          width: "600px",
                          height: "auto",
                          maxHeight: "500px",
                          objectFit: "contain",
                        }}
                      />
                    </figure>
                    <div>
                      <Form.Label
                        htmlFor="image-upload"
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      >
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset src={Upload} message="Click or tap to upload an image" />
                  </Form.Label>
                )}
                {/* File input for image */}
                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group>
              {/* Displaying image upload error messages if any */}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* Displaying text fields for mobile devices */}
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>

          {/* Right column for text fields on medium to large screens */}
          <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PostCreateForm;
