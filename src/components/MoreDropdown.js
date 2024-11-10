import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`fas fa-ellipsis-v ${styles.ThreeDotsIcon}`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete, handleReport }) => {
  return (
    <Dropdown className={`ml-auto ${styles.ThreeDotsContainer}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className={`text-center ${styles.DropdownMenu}`}
        popperConfig={{ strategy: "fixed" }}
      >
        {handleEdit &&
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" /> 
        </Dropdown.Item>
        }
        {handleDelete &&
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" /> 
        </Dropdown.Item>
        }
        {handleReport &&
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleReport}
          aria-label="report"
          title="Report"
        >
          <i className="fa-regular fa-flag" />
        </Dropdown.Item>
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};