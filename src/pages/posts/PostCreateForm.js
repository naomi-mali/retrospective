import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    image: "",
  });

  const { title, description, location, image, category } = postData;

  const imageInput = useRef(null);
  const history = useHistory();



  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", imageInput.current.files[0]);
    formData.append("category", category);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
     // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className={styles.FormContainer}>
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
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

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
        {errors?.description?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

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
        {errors?.location?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Form.Group className={styles.FormGroup}>
        <Form.Label className={styles.FormLabel}>Category</Form.Label>
        <Form.Control
          className={styles.Input}
          name="category"
          as="select"
          defaultValue="select"
          onChange={handleChange}
        >
          <option value="select">Please select a category</option>
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
        {errors.category?.map((message, idx) => (
          <Alert variant="warning" key={idx} className={styles.Alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <div className={styles.ButtonContainer}>
          <Button
            className={`${styles.Button} ${styles.ButtonCancel}`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            className={`${styles.Button} ${styles.ButtonBlue}`}
            type="submit"
          >
            Create
          </Button>
        </div>
    </div>
  );

  return (
    <>
      <h1 className={`${appStyles.Handwritten} text-center pt-7 pb-9 ${styles.LargeScreenTitle}`}>
        Create a post
      </h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
              <Form.Group className="text-center">
                {image ? (
                  <>
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
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label className="d-flex justify-content-center" htmlFor="image-upload">
                    <Asset src={Upload} message="Click or tap to upload an image" />
                  </Form.Label>
                )}
                <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} ref={imageInput} />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
          <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PostCreateForm;
