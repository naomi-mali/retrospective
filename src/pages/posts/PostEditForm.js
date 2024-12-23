import React, { useEffect, useRef, useState } from "react";

// Importing Bootstrap components for the form and button elements
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importing custom styles
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// Importing hooks and functions for routing and making API requests
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
  // State to store any errors encountered during the form submission
  const [errors, setErrors] = useState({});

  // State to store form data (title, description, location, category, and image)
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    image: "",
  });

  // Destructuring form data for easy access
  const { title, description, location, image, category } = postData;

  // Refs for image input to access the selected file
  const imageInput = useRef(null);

  // History and params hooks for navigation and dynamic route handling
  const history = useHistory();
  const { id } = useParams();

  // useEffect hook to load the current post data when the component mounts
  useEffect(() => {
    const handleMount = async () => {
      try {
        // Making a GET request to fetch the post data using the post ID from the URL
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, description, location, image, category, is_owner } = data;

        // Check if the logged-in user is the owner of the post
        // If they are not the owner, redirect them to the home page
        is_owner ? setPostData({ title, description, location, image, category }) : history.push("/");
      } catch (err) {
        // Handle any errors encountered while fetching the post data
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]); // Dependencies array ensures that useEffect runs when 'history' or 'id' changes

  // Handle changes to the form input fields (title, description, location, category)
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle image input change (preview the selected image)
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      // Revoke the previous object URL to avoid memory leaks
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]), // Create a new object URL for the selected image
      });
    }
  };

  // Handle form submission (sending the updated post data to the backend)
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("category", category);

    // Check if an image was selected and append it to the FormData
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      // Make a PUT request to update the post with the new data
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`); // Redirect to the post detail page after successful submission
    } catch (err) {
      // Handle errors that occur during the submission (e.g., validation errors)
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data); // Set error messages if they exist in the response
      }
    }
  };

  // Render the text fields (title, description, location, and category) for the form
  const textFields = (
    <div className="text-center">
      {/* Title field */}
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange} 
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message} {/* Display title validation errors */}
        </Alert>
      ))}

      {/* Description field */}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message} {/* Display description validation errors */}
        </Alert>
      ))}

      {/* Location field */}
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message} {/* Display location validation errors */}
        </Alert>
      ))}

      {/* Category field */}
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          className={styles.Input}
          name="category"
          as="select"
          defaultValue="select"
          onChange={handleChange}
        >
          <option value="select">Please select a category</option>
          {/* List of available categories for the user to choose from */}
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
      </Form.Group>
      {errors.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message} {/* Display category validation errors */}
        </Alert>
      ))}

      {/* Cancel and Save buttons */}
      <Button
        className={`${styles.Button} ${styles.ButtonCancel} 
        ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.LargeButton}`}
        type="submit"
      >
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}> {/* Form submission handler */}
      <Row>
        {/* Main content area */}
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            {/* Image upload section */}
            <Form.Group className="text-center">
              <figure>
                <Image
                  className={appStyles.Image}
                  src={image}
                  rounded
                  style={{ width: '600px', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
                />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image {/* Label for image upload */}
                </Form.Label>
              </div>

              {/* File input for selecting an image */}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message} {/* Display image validation errors */}
              </Alert>
            ))}

            {/* Render text fields for mobile view */}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        {/* Sidebar for desktop view */}
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;
