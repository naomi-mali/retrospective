# Retrospective
----

## Table of Contents

- [Retrospective](#retrospective)
  - [Introduction](#introduction)
  - [Key Features](#key-features)
  - [Strategy](#strategy)
    - [User Stories](#user-stories)
  - [Scope](#scope)
    - [User Account Management](#user-account-management)
    - [Retrospective Creation and Management](#retrospective-creation-and-management)
    - [Interactive Features](#interactive-features)
    - [Search and Discovery](#search-and-discovery)
    - [User Engagement and Community Building](#user-engagement-and-community-building)
    - [General Features](#general-features)
    - [Content Moderation](#content-moderation)
    - [Infrastructure and Technical Requirements](#infrastructure-and-technical-requirements)
    - [Future Enhancements (Out of Current Scope)](#future-enhancements-out-of-current-scope)
  - [Future Development Ideas for Retrospective](#future-development-ideas-for-retrospective)
    - [Tagging Users in Posts and Comments](#tagging-users-in-posts-and-comments)
    - [Messaging Users](#messaging-users)
    - [Reporting Content](#reporting-content)
    - [Improved User Profiles](#improved-user-profiles)
    - [Why this features](#why-this-features)
  - [Surface](#surface)
  - [Features](#features)
    - [Avatar](#avatar)
    - [MoreDropdown & ProfileEdit Dropdown](#moredropdown--profile-edit-dropdown)
    - [Navbar](#navbar)
    - [Desktop - signed in](#desktop-signed-in)
    - [Desktop - signed out](#desktop-signed-out)
  - [Pages](#pages)
    - [About / Landing](#about--landing)
    - [Sign up](#sign-up)
    - [Sign in](#sign-in)
    - [Feedback page](#feedback-page)
    - [Thanks](#thanks)
    - [Create a post](#create-a-post)
    - [Edit a Post](#edit-a-post)
    - [Delete a post](#delete-a-post)
    - [View a post](#view-a-post)
    - [Feed pages](#feed-pages)
    - [Comment](#comment)
    - [Likes](#likes)
    - [Profile](#profile)
    - [Edit profile](#edit-profile)
    - [Who to Follow](#who-to-follow)
    - [Follow a profile](#follow-a-profile)
    - [Page not found](#page-not-found)
    - [Future Features](#future-features)
    - [Languages](#languages)
    - [Frameworks, Libraries & Tools](#frameworks-libraries-tools)
    - [Resources](#Resources)
    - [Testing & Validation](#testing-validation)
    - [Validation](#validation)
    - [HTML Validation - W3C](#HTML-validation-W3C)
      - [Landing Page](#landing-page)
      - [Sign up page](#sign-up-page)
      - [Sign in page](#sign-in-page)
      - [Discover page](#discover-page)
      - [Feed page](#feed-page)
      - [Liked page](#liked-page)
      - [Profile page](#profile-page)
      - [Post page](#post-page)
      - [Add post form](#add-post-form)
      - [Edit post form](#edit-post-form)
      - [Change username page](#change-username-page)
      - [Change password page](#change-password-page)
      - [Feedback page](#feedback-page)
      - [Thanks page](#thanks-page)
      - [404 page](#404-page)
    - [CSS Validation - Jigsaw](#CSS-validation-jigsaw)
      - [App.module.css](#App.module.css)
      - [About.module.css](#About.module.css)
      - [Asset.module.css](#Asset.module.css)
      - [Avatar.module.css](#Avatar.module.css)
      - [Buttons.module.css](#Buttons.module.css)
      - [Comment.module.css](#Comment.module.css)
      - [CommentCreateEditForm.module.css](#CommentCreateEditForm.module.css)
      - [Contact.module.css](#Contact.module.css)
      - [PostsPage.module.css](#PostsPage.module.css)
      - [PostCreateEditForm.module.css](#PostCreateEditForm.module.css)
      - [Post.module.css](#Post.module.css)
      - [MoreDropdown.module.css](#MoreDropdown.module.css)
      - [NavBar.module.css](#NavBar.module.css)
      - [PageNotFound.module.css](#PageNotFound.module.css)
      - [Profile.module.css](#Profile.module.css)
      - [ProfilePage.module.css](#ProfilePage.module.css)
      - [SignInForm.module.css](#SignInForm.module.css)
      - [SignUp.module.css](#SignUp.module.css)
      - [JavaScript Validation - ESLint](#javaScript-validation-ESLint)
    - [Lighthouse Validation - Accessibility](#lighthouse-validation-accessibility)
    - [Testing](#testing)
    - [Manual Testing of User Stories](#manual-testing-of-user-stories)
    - [Responsiveness](#responsiveness)
    - [Browser Compatibility](#browser-compatibility)
    - [Project Setup and Initial Deployment](#project-setup-and-initial-deployment)
    - [Create a New App in Heroku](#create-a-new-app-in-heroku)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Images](#images)
    -[Explanation for Removing the Report Button](#explanation-for-removing-the-report-button)
       -[Challenges with Backend Integration](#challenges-with-backend-integration)
       -[Decision to Remove the Report Button](#decision-to-remove-the-report-button)
       -[Steps Taken](#steps-taken)
       -[Benefits of Removing the Report Button](#benefits-of-removing-the-report-button)
       -[Future Plans](#future-plans)
    - [Code](#code)




## Introduction
Retrospective is a social media platform that captures life from perspective—in a retro way, blending the nostalgic charm of Polaroids with a modern twist on memory sharing. The name "Retrospective" is more than just a title—it’s a play on "retro" and "perspective," as well as the word "retrospective" itself, meaning a look back on the past. Retrospective invites users to chronicle their memories with this in mind, creating a digital scrapbook that honors life’s moments through a reflective, retro-inspired lens.

Each profile in Retrospective becomes a carefully curated album filled with Polaroid-style photos that showcase life’s highlights—weddings, birthdays, road trips, spontaneous gatherings, brunches with friends, and other special memories. This combination of retro aesthetics and personal perspective transforms every profile into a unique story of significant moments, each image capturing a meaningful view of the past.

Built with a powerful React front-end and Django back-end, Retrospective offers a seamless experience for uploading, organizing, and sharing photos, all while maintaining a distinct vintage feel. Every photo isn’t just a snapshot; it’s a memory framed in a way that invites reflection, preserving each experience with a sense of timelessness.

Retrospective goes beyond typical photo sharing by focusing on the joy of looking back. Whether users create a private photo journal or a shared gallery, Retrospective bridges the past and present, inviting a new way to appreciate life’s journey. With Retrospective, you’re not just sharing photos—you’re building a keepsake that brings together retro style, perspective, and meaningful retrospection for a unique storytelling experience.

![tttttttttttttttttttttttttttt](https://github.com/user-attachments/assets/78994cff-6838-4fb2-8c75-ba6b2919c6de)


- [Backend Repo](https://github.com/naomi-mali/api-retrospective)
- [Frontend Repo](https://github.com/naomi-mali/retrospective)
- [Frontend Deployed](https://retrospective-62d99ef7d5c6.herokuapp.com/)
- [Backend Deployed](https://api-retrospective-3d1e13d99a31.herokuapp.com/)


## Key Features
----

Retrospective offers a variety of features designed to enhance the user experience while capturing and sharing cherished memories. Here are some of the key features of the platform:

Polaroid-Style Photo Uploads: Users can easily upload images in a classic Polaroid format, giving each photo a vintage feel that resonates with nostalgia and warmth.

Personalized Profiles: Each user has a unique profile that acts as a digital scrapbook, allowing them to showcase their favorite moments and create a visual narrative of their life experiences.

Memory Categorization: Users can organize their photos by categories such as weddings, birthdays, road trips, and more, making it easy to navigate and reflect on specific types of memories.

Social Sharing: Users have the option to share their albums or individual photos with friends and followers, fostering connection and engagement within the Retrospective community.

Commenting and Interaction: Friends can leave comments on shared photos, allowing for interaction and conversation around treasured moments, enhancing the social experience.

Intuitive Interface: The platform is designed with user-friendliness in mind, making it simple to navigate, upload, and edit photos, ensuring a seamless experience for users of all ages.

Memory Reflection: Retrospective encourages users to reflect on their experiences, promoting mindfulness and appreciation for the special moments in life.

Secure Privacy Settings: Users can control the visibility of their photos and albums, ensuring that they can share their memories with the audience of their choice.

Mobile Compatibility: Retrospective is optimized for mobile use, allowing users to capture and upload memories on-the-go, ensuring that no moment goes undocumented.

With these features, Retrospective not only serves as a platform for sharing photos but also fosters a sense of community and connection, encouraging users to celebrate and reflect on the moments that matter most in their lives.

## Strategy
----

Develop a social media platform called Retrospective, designed to celebrate life’s most cherished moments and foster a sense of gratitude. Inspired by the nostalgia of Polaroid photography and the concept of reflection, Retrospective provides users with a space to showcase their highlights, creating a visual scrapbook of significant events and everyday joys. By encouraging individuals to share their best memories—whether from weddings, birthdays, road trips, or candid moments with friends—Retrospective promotes appreciation for life's little pleasures. This platform is grounded in the belief that sharing personal stories not only enhances individual perspectives but also cultivates a supportive and uplifting community where positivity thrives.

----

### User Stories:
User Account Management
Create an Account & Login
Landing Page
Navbar
Create Account
Log In
Log Out
Remain Logged In
Creating Retrospectives
Retrospective Management

Create Retrospective
View Retrospective
Update a Retrospective
Delete Retrospective
Retrospective Feeds

Retrospectives Feed
Liked Retrospectives
Discover Retrospectives
Profile Pages
User Profile Management
Edit Profile
Change Password
Who to Follow List
User Profiles
Interactivity Features
User Engagement
Like/Un-like a Retrospective
Comment on a Retrospective
View Comments
Edit a Comment
Delete a Comment
Follow/Unfollow a User
General Features
Site Functionality
Contact Form
Responsive Site
Simple User Navigation
404 Page
User Engagement Features
Post Management

Update Username and Password
Create Posts
View Posts of Followed Users
Edit Post
Delete a Post
Create and List Comments
View Comments
Edit Comment
Delete Comments
Like a Post
Profile Interaction

View Profile Page
Profile List
Search Posts by Keyword
View Liked Posts
View Activity Feed


Add Post Location
Infinite Scroll (for Posts and Comments)
Storage and Communication


Filter Messages
Most Followed Profiles
Landing Page
Log Out Setup
Navigation and User Experience
Navigation Setup
Conditional Rendering
Add Site Favicon
User Profile - User Stats
Create Contact
View a Post
Navigation
Search Profile
Routing

## Scope
----

The scope of the Retrospective social media platform encompasses the development of a user-friendly and engaging application designed to foster gratitude and enhance users' perspectives on life through sharing highlights of their experiences. The following outlines the key components and functionalities within the scope of this project:

#### 1.User Account Management
Registration and Login: Allow users to create accounts and securely log in or log out of the platform.
Profile Management: Enable users to edit their profiles, including updating their username, password, and profile picture.

#### 2.Retrospective Creation and Management
Memory Sharing: Provide features for users to create, view, update, and delete their retrospectives, showcasing their daily highlights.
Retrospective Feeds: Implement feeds to display all users’ retrospectives, liked retrospectives, and a discovery section for new photo upload.

#### 3.Interactive Features
Commenting System: Allow users to comment on retrospectives, including the ability to view, edit, and delete comments.
Engagement Mechanisms: Include features to like/unlike retrospectives and tag users in comments to foster interaction.
Follow/Unfollow System: Enable users to follow and unfollow other users to personalize their feeds.

#### 4.Search and Discovery
Search Functionality: Implement a robust search feature that allows users to find retrospectives by keywords, categories, or users.
Most Followed Profiles: Highlight popular profiles to encourage users to discover new content.

#### 5.User Engagement and Community Building
Activity Feed: Provide users with an activity feed to track interactions, including likes, comments, and new followers.
Messaging System: Implement a chat feature for users to communicate directly, enhancing community engagement.

#### 6.General Features
Responsive Design: Ensure the platform is fully responsive and user-friendly on various devices.
404 Page: Create a custom 404 page to improve navigation experience.
Contact Form: Include a contact form for user feedback and support.

#### 7.Content Moderation
Reporting System: Allow users to report inappropriate content, including posts and comments, to maintain a positive community.
Moderation Tools: Implement administrative tools to manage reported content effectively.

#### 8.Infrastructure and Technical Requirements
Cloud Storage Integration: Utilize cloud storage for static images and other media.
Data Security: Ensure user data is securely stored and protected through encryption and best practices.

#### 9.Future Enhancements (Out of Current Scope)
Advanced Analytics: Consider implementing user analytics to track engagement metrics and improve user experience over time.
Integration with External Platforms: Future integration with other social media platforms for broader sharing options.

### Future Development Ideas for Retrospective
----

As Retrospective continues to evolve, there are several exciting features and enhancements that I plan to implement in the future to make the platform more interactive and engaging for users. These updates will improve the overall user experience and expand the functionality of the site. Here are some key ideas for future development:

#### 1. **Tagging Users in Posts and Comments**
   - **Description**: Users will be able to tag others in their posts and comments, creating a more interactive and connected experience. This feature will allow users to mention their friends or followers, prompting notifications and enhancing engagement within the community.
   - **Future Benefits**: This feature will facilitate communication, increase user interaction, and help build a more social and collaborative environment on the platform.

#### 2. **Messaging Users**
   - **Description**: A private messaging system will be implemented, allowing users to send and receive direct messages. This feature will provide a space for one-on-one communication between users, fostering deeper connections and discussions beyond public posts and comments.
   - **Future Benefits**: The messaging system will add a personal touch to the platform, encouraging users to interact privately, share thoughts, and maintain stronger connections with others.

#### 3. **Reporting Content**
   - **Description**: To ensure the platform remains safe and positive, a content reporting feature will be introduced. Users will be able to report inappropriate, offensive, or harmful posts and comments. These reports will be reviewed by moderators or administrators to take necessary actions, such as removing harmful content or issuing warnings to users.
   - **Future Benefits**: This feature will help maintain a healthy and respectful community, reducing the potential for toxic behavior and ensuring that users feel safe when interacting with the platform.

#### 4. **Improved User Profiles**
   - **Description**: User profiles will be enhanced with more customization options, including the ability to showcase personal achievements, albums, and shared memories. This update will give users more control over their profile layout and what they share with others.
   - **Future Benefits**: Personalized profiles will allow users to express themselves more freely, making the platform feel more like a space to celebrate personal milestones and life moments.

### Why These Features?
These enhancements are intended to enrich the social experience on Retrospective, turning it into not just a place to showcase memories but also a platform for meaningful interactions and conversations. While these features couldn't be included in the initial launch due to time constraints, they are a natural next step in the platform’s development.

Stay tuned for updates as these features are integrated into Retrospective in the coming months. I look forward to continuing to improve the site and expanding its capabilities to create an even better experience for users!

### 5. Surface
----

- Color and themes were based on the five minute journal, using earthy calming colors and a mix of clean and handwritten fonts.

The color palette was built using [Adobe Color](https://color.adobe.com/)

Blue - #0B5BDB

Red - #DE4633

Yellow- #F6C76E

Green - #006935

Gray - #2C2C2E

![Screenshot 2024-11-05 165039](https://github.com/user-attachments/assets/d905682f-37f3-48ce-a327-7f11a351a569)


![Screenshot 2024-11-05 165718](https://github.com/user-attachments/assets/cc42b86a-c873-4af7-bc2a-58b0beead57f)
 
[Google Fonts](https://fonts.google.com/) supplied the fonts
- Montserrat
- Homemade Apple

## Features
----

#### Avatar
----

![Screenshot 2024-11-13 112530](https://github.com/user-attachments/assets/e86921ea-74d3-4b30-96ce-e94c56fd0faf)


The avatar component is used throughout the site for users avatar and their username. It take the following props:
- src: a link to the image url
- height: default set to 45px
- text: Text displayed in the image is not shown. Default is set to avatar

#### MoreDropdown & ProfileEdit Dropdown

![Screenshot 2024-11-13 112627](https://github.com/user-attachments/assets/5a619d51-1bb9-4f44-ac9c-83c694fd6f62)


![Screenshot 2024-12-12 141450](https://github.com/user-attachments/assets/92e4da19-384a-4eca-909f-0d18bf12ed4d)

![Screenshot 2024-12-12 141508](https://github.com/user-attachments/assets/e127c7ef-66c3-46d2-a4f8-fa702617ceb2)

![Screenshot 2024-12-12 141614](https://github.com/user-attachments/assets/4ee436e8-c118-4dd3-a0c0-72e450c14b64)

![Screenshot 2024-12-12 141746](https://github.com/user-attachments/assets/e30b301e-be80-483b-9211-02f6b06879d7)

The components are shown as 3 dots when a user is able to make changed to something, like a post, comment or their profile. Clicking on the dots will show a dropdown menu with options for the user.

MoreDropdown options:
- Edit a post
- Delete a post

ProfileEditDropdown
- Edit profile
- Edit username
- Change password

#### Navbar

The navbar is displayed on every page on the site, but will show different options for a logged in user to a non logged in user as well as on mobile and desktop devices.

## Desktop - signed in


A signed in user will see the options to:
- Visit the homepage via the logo
- Add a post
- Visit the discover page
- Visit the feed page
- Visit the liked page
- Sign out
- Visit their profile via the profile

![Screenshot 2024-11-13 112825](https://github.com/user-attachments/assets/db391af2-3680-4005-a44b-abd60ceddb8d)

## Desktop - signed out

![aaaaaaaaa](https://github.com/user-attachments/assets/29060c35-d554-4829-b1df-0d1354355e5e)

A user who is not signed in will see the following options:
- Visit the homepage via the logo
- Visit the discover page
- Sign in
- Sign up

Mobile - singed in

Users on a mobile device will have the same options but via a hamburger menu


![Screenshot 2024-11-13 112825](https://github.com/user-attachments/assets/256277fd-f269-4c93-a759-52971bd2ac21)

![Screenshot 2024-11-13 113254](https://github.com/user-attachments/assets/7539e379-553c-4720-bcdd-277eb323d256)

![Screenshot 2024-11-13 113330](https://github.com/user-attachments/assets/6d6379b9-7d0e-4444-9989-771fabc3ab14)

![Screenshot 2024-11-13 113422](https://github.com/user-attachments/assets/9863c728-64af-430a-8eb9-bbfeec72b21d)

![Screenshot 2024-11-13 113448](https://github.com/user-attachments/assets/7af63294-cabc-4692-b0ad-afc94441f9a2)

![Screenshot 2024-11-13 113508](https://github.com/user-attachments/assets/73136859-ce58-420e-b046-4e9f8a3e23fb)

![Screenshot 2024-11-13 113525](https://github.com/user-attachments/assets/47c526e7-3205-4b0d-97bf-3a5ed53a659e)

![Screenshot 2024-11-13 113906](https://github.com/user-attachments/assets/699cc5ca-53eb-49e9-83c3-53ac2972b146)

![Screenshot 2024-11-13 113952](https://github.com/user-attachments/assets/0d8ab5b4-7df5-4917-8834-ffb8bd370d95)

### Pages
----

#### About / Landing

![about](https://github.com/user-attachments/assets/fdbe382d-a48e-406f-8d9f-625783004d84)

The first page a user sees when navigating to the site is the landing page with:

Information on the site
Link to a feedback form for a user to send a message to the site owners
Links to sign up sign in for users who are not logged in

#### Sign up

![signup](https://github.com/user-attachments/assets/a01281d2-f675-4811-a2dc-0f4121b3be83)

This page is accessible for non signed in users via the navbar. For a desktop user it displays:
- A form on the left
- An image on the right
For a mobile user is displays:
- A sign up form

#### Sign in


![signin](https://github.com/user-attachments/assets/6a727917-3de5-4094-b8ef-a4826f98b26a)

This page is accessible for non signed in users via the navbar. For a desktop user it displays:
- A form on the left
- An image on the right
For a mobile user is displays:
- A sign in form

#### Feedback page

![conyact](https://github.com/user-attachments/assets/4cb949cd-182c-4cd3-b483-30c830029120)

This page is accessible from the landing page and can be reached via the logo in the navbar. 
It contains a form for users to fill out to give feedback to the site owners.

#### Thanks

![thanks](https://github.com/user-attachments/assets/a4a782f8-a5fc-4849-a782-961cdaac673a)

Once the user fills out the form they are taken to a thank you page so they know the message has been sent.
From there they are prompted to visit the feed page.

#### Create a post

![Screenshot 2024-12-12 143638](https://github.com/user-attachments/assets/e083e512-7f3f-460a-add8-9f77b6b93dc7)

A logged in user will be able to create a post from the navbar and will be taken to a form with the options to add the following things to their post:
- Title: to add a title to the post
- Description: for more details on the highlight
- Location : add a location to the post something similar to a scrapbook
- Category: a dropdown list of predefined categories
- Image: add an image from the users device

The date will automatically be added.

![post](https://github.com/user-attachments/assets/81a151e9-8633-45ae-9a40-7bd390207bfc)

#### Edit a Post

![edit](https://github.com/user-attachments/assets/b97472f9-3a30-403b-b42e-96bb8e6cb485)

A user can edit one of their post via the dropdown menu in the post page. They are taken to a pre populated post form containing the details of the post that can all be modified.

#### Delete a post

![delete](https://github.com/user-attachments/assets/0281eaee-0361-4616-ab1f-4fb77d8ddde4)

From the dropdown menu on a users post they also have the option to delete the post. Clicking on this will remove it from the site and the database then redirect the user to their feed page.

#### View a post

Once a post has been created it will show up on the discover page and any other applicable pages (feed, liked and profile). From those pages the image and date will take a user to a page for the post containing more detail and any comments.

The feed pages will show the following information:

User
Date
Title
Number of likes
Number of comments
Additional information on the posts detail page:

Category
Title 
Description
Location

![postsd](https://github.com/user-attachments/assets/5ae5345f-5bf6-4e91-a634-92cce4072bcc)

#### Feed pages

![feed](https://github.com/user-attachments/assets/173504a0-a501-4e29-9919-5237ffe1ecea)

![sa2](https://github.com/user-attachments/assets/605bd4bd-63f5-470c-8e97-9b43267731e1)

![sssss](https://github.com/user-attachments/assets/bac927c3-b9df-4a0d-91bd-b923b3c3a4a0)

There are 4 different feed pages each containing a different filer for posts to show:
- Discover: contains all posts
- Feed: contains posts from users the current user follows
- Liked: posts the current user has liked
- User profiles: posts from a single user

Each page displayed post from newest to oldest from top to bottom and has an infinite scroll component so the user does not have to click to a new page to see more posts.

#### Comment 

![comment](https://github.com/user-attachments/assets/413cdb8f-18b7-4327-b405-ac917eefeb9f)

A signed in user can add a comment to a post from the posts detail page. The comment will be displayed under the post and can be edited or deleted by the author via the dropdown menu.
Comments are displayed newest to oldest from top to bottom and have an infinite scroll component so users don't have to click to a new page to view more comments.


#### Like

![like](https://github.com/user-attachments/assets/83831cf2-5247-4f38-97a5-b1161d168139)

A signed in user can like a post to show support for it by clicking the heart icon at the bottom of the post. Clicking the like button will:
- Fill in the like icon to red
- Add to the like count
- Add the post to the users liked feed

Clicking the heart icon a second time will unlike the post, undoing all the actions caused by liking the post.

#### Profile

![poff2](https://github.com/user-attachments/assets/c1a9021d-987d-4660-86ee-ce10802d6c8d)

![pofffff](https://github.com/user-attachments/assets/9d138790-3ab7-4abc-a8c3-9ec880dadfa3)

Each user has a profile page that they can access from the navbar, accessing a different users profile can be done by clicking on their avatar from one of their highlights, comments or from the who to follow section. The users profile contains the following information:
- Username
- Profile image
- Number of posts
- Number of followers
- Number of following
- A bio
- The users posts

#### Edit Profile

![edit222](https://github.com/user-attachments/assets/dd9a5ef1-c8ae-4a0d-8c51-3e30ae17b20f)

A user can edit their own profile by clicking in the 3 dots dropdown menu at the top of their profile. The following things can be added or changed:
- Username
- Bio
- Profile image
- Password

**Change Username**

![edit5555](https://github.com/user-attachments/assets/beedb227-f8bd-4327-9298-ef8d27b89251)

**Change Bio and Profile picture**

![edit3333](https://github.com/user-attachments/assets/de3a1569-d975-4b53-b78d-f58d1295bbc2)

**Change Password**

![edit666](https://github.com/user-attachments/assets/fbafaba9-f144-4efa-85da-82f07c5cd15f)

#### Who to follow

For users to see who is active on the site there is a who to follow section on the feed pages. It contains 10 profile of the most active users for desktop and 4 for mobile.

![fffff](https://github.com/user-attachments/assets/969f91d1-07fd-47c0-882c-fe808c7ea668)

#### Follow a user

![wwww](https://github.com/user-attachments/assets/f66c676d-c7c4-491f-a62e-188378664031)

![wwwwww](https://github.com/user-attachments/assets/69407878-97ca-452d-a854-4339ff10d0b2)

Following a user will add their posts to the signed in users feed page and increase their following count as well as the followed users followers count. It can be done by clicking the follow button on their profile or the who to follow section. Once clicked, the button will change to an un follow button that will remove the users posts from their feed as well as decrease the following and followers count on the respective profile pages.

#### PageNotFound

![notfound](https://github.com/user-attachments/assets/a2a3f81a-a0b6-40d8-b7fc-d605fdec52eb)

If a user navigated to an invalid url a custom 404 page will be displayed.

### Future Features

- Tagging Users in Posts and Comments: Enables users to mention others, fostering engagement and prompting notifications for a more connected experience.  
- Private Messaging System: Allows users to send and receive direct messages, encouraging deeper, one-on-one interactions.  
- Content Reporting: Introduces a reporting feature for inappropriate or harmful content, helping maintain a safe and respectful community.  
- Enhanced User Profiles: Adds customization options for showcasing achievements, albums, and shared memories, letting users express themselves and celebrate milestones.  

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- [Django Rest Framework](https://www.django-rest-framework.org/) - Backend API
- [React](https://react.dev/) - Library for JS
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - CSS libraby
- [Canva](https://www.canva.com/en_gb/) - Wire-frame and design
- [GitPod](https://gitpod.io/workspaces) - Virtual IDE
- [GitHub](https://github.com/) - Repo hosting
- [Heroku](https://dashboard.heroku.com/apps) - Deployment
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Fonts
- [LucidChart](https://lucid.app/) - Development of flowchart
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools) - Development and bug fixing
- [Favicon.io](https://favicon.io/favicon-converter/) - Favicon conversion
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Dynamic routing
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - for instant loading and infinite scrolling
- [Axios](https://github.com/axios/axios) - Promise-based HTTP requests
- [Adobe Color](https://color.adobe.com/) - Color Palette
- [Am I Responsive?](https://ui.dev/amiresponsive) - Multi-device mockup

Validation:
- [WC3 Validator](https://validator.w3.org/) - validate the html
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - validate the css
- [ESLint](https://eslint.org/) - validate JS code
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - validate performance, accessibility, best practice and SEO

## Resources

- Code Institute Moments walkthrough
- React Bootstrap Docs
- Stack Overflow
- Slack Community

# Testing & Validation

## Validation

The Highlights site has been passed through the following validators: 
- [WC3 HTML Validator](https://validator.w3.org/)
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ESLint JavaScript Validator](https://eslint.org/)
- [Google Chrome Lighthouse Validator](https://developer.chrome.com/docs/lighthouse/overview/).

## HTML Validation - W3C

The WC3 Validator was used on the following pages.

#### Landing Page

![landing](https://github.com/user-attachments/assets/593130a6-cd51-4f90-8a5f-8d6d150e3034)

#### Sign up page

![signup](https://github.com/user-attachments/assets/4f1eff2f-2448-4e6c-adcb-5ac84a4d23be)

#### Sign in page

![signin](https://github.com/user-attachments/assets/609fbdaf-20e4-4fb5-a9e5-de05557a7291)

#### Discover page

![discovev](https://github.com/user-attachments/assets/ff2b6ea0-6ff4-4c7a-a6b9-311c1819c977)

#### Feed page

![feed](https://github.com/user-attachments/assets/e8153eeb-edb3-4c83-9e2d-71e2c58834de)

#### Liked page

![Screenshot 2024-12-13 102239](https://github.com/user-attachments/assets/bb6ef7a3-d63d-4ab7-bea5-997b4144da3f)

#### Profile page

![poo](https://github.com/user-attachments/assets/b28a2b9d-bf38-4be4-aea2-cb5b03672b14)

#### Post page

![Screenshot 2024-12-13 102458](https://github.com/user-attachments/assets/e6f2129a-3d13-4776-a9d2-9acdece1aa67)

#### Add post form

![add](https://github.com/user-attachments/assets/eb77aa43-14dd-4c05-a1b9-f3e4f5551484)

#### Edit post form

![Screenshot 2024-12-13 102817](https://github.com/user-attachments/assets/1f5420ff-f540-4f8c-8cdf-a0de72c11ae4)

#### Edit profile page

![edit](https://github.com/user-attachments/assets/9118928a-8b1e-4dc8-9d4a-9f31f81daec1)

#### Change username page

![use](https://github.com/user-attachments/assets/daab924f-5f5b-4e19-a8c3-064d925fafe7)

#### Change password page

![pass](https://github.com/user-attachments/assets/cc216d44-1340-437f-a2ac-b1eb741c2407)

#### Feedback page

![feedback](https://github.com/user-attachments/assets/99f3b5b9-e9e1-4276-8950-e2390b18a5bc)

#### Thanks page 

![thanks](https://github.com/user-attachments/assets/baa91103-4198-45ab-9621-fcc0c19eabae)

#### 404 page

![404](https://github.com/user-attachments/assets/bc216777-c9ed-48cf-b814-1ccff00bc523)

## CSS Validation - Jigsaw

#### App.module.css
![css 1](https://github.com/user-attachments/assets/0af012f5-55c4-4a2f-b8e9-b139d3f1c496)


#### About.module.css

![css2](https://github.com/user-attachments/assets/6274855d-6833-40e6-b421-16380f0820f9)

#### Asset.module.css

![css3](https://github.com/user-attachments/assets/14454dfa-190a-4422-9ae0-649d450eb64f)

#### Avatar.module.css

![css4](https://github.com/user-attachments/assets/af438df8-bd32-4203-ac3b-382a189bf5b3)

#### Buttons.module.css

![css5](https://github.com/user-attachments/assets/e29977f0-bb18-423a-b1ad-d6d4726b93a8)

#### Comment.module.css

![css6](https://github.com/user-attachments/assets/b62247b8-5323-459c-bb2f-8fc89dcb07ed)

#### CommentCreateEditForm.module.css

![css7](https://github.com/user-attachments/assets/066f5435-e186-4a77-8246-ef4eb14cedf6)

#### Contact.module.css

![css8](https://github.com/user-attachments/assets/adb002d5-5889-4d8b-a5f0-598b5f64078e)

#### PostsPage.module.css

![css9](https://github.com/user-attachments/assets/d4d05f24-56db-4298-afae-877597a685d5)

#### PostCreateEditForm.module.css

![css10](https://github.com/user-attachments/assets/7761425f-c75c-4e6c-9b00-437a99562d78)

#### Post.module.css

![css11](https://github.com/user-attachments/assets/d785b176-91ce-4fe3-afad-4c9b6690c769)

#### MoreDropdown.module.css

![css12](https://github.com/user-attachments/assets/a7fc29db-5bc2-4a65-bc4c-9eb47f356de4)

#### NavBar.module.css

![css13](https://github.com/user-attachments/assets/439c8832-a254-4977-b578-cdb6fdd325b9)

#### PageNotFound.module.css

![css14](https://github.com/user-attachments/assets/154628e9-d13a-45a7-ba8d-9b5f2bf7a1d4)

#### Profile.module.css

![css15](https://github.com/user-attachments/assets/d9e4699b-e385-46b0-8f01-a9bda1c1c0bb)

#### ProfilePage.module.css

![css16](https://github.com/user-attachments/assets/9b924b90-5120-4ce3-9a67-e95d951b3c83)

#### SignInForm.module.css

![css17](https://github.com/user-attachments/assets/a604cdaf-58b7-4fb6-950b-b9ad3a79662e)

#### SignUp.module.css

![css18](https://github.com/user-attachments/assets/0d8e4dfb-0c17-4979-a430-5b6f11cc9934)

 
All the pages were passed through the W3C CSS Validation Service with no errors found. 

### JavaScript Validation - ESLint

The ESLint validator plugin was used throughout development and no errors were present on final deployment.

### Lighthouse Validation - Accessibility

The Chrome Lighthouse Dev Tool was used to test performance, accessibility, best practices and SEO on both desktop and mobile.

**Landing Page - Desktop**

![landing](https://github.com/user-attachments/assets/271bcd97-48b4-467c-a6a9-c7aaf5d5d4ca)

**Landing Page - Mobile**

![landing2mobile](https://github.com/user-attachments/assets/e706e206-12ab-4ab0-bff1-d057b5e883fd)

**Discover Page - Desktop**

![discoev](https://github.com/user-attachments/assets/c3c03278-2a3c-4ea2-87d4-cd53116a9173)

**Discover Page - Mobile**

![discovev](https://github.com/user-attachments/assets/9f3180c9-38a8-4307-b946-76fd923f39b4)

## Testing

### Manual Testing of User Stories



| User Story | Action | Expected Outcome | Result |
|------------|--------|------------------|--------|
| As a user, I can edit my posts so that I can correct mistakes or add more information. | As a logged-in user, I edit one of my posts. | The post is updated with the new content. | As expected |
| As a user, I can update my username and password so that I can maintain my account's security. | As a logged-in user, I update my username and password. | The username and password are updated successfully. | As expected |
| As a user, I can edit my profile so that I can keep my information up to date. | As a logged-in user, I edit my profile. | The profile is updated with the new information. | As expected |
| As a user, I can follow or unfollow other users so that I can manage my connections. | As a logged-in user, I follow and unfollow a user. | The following/unfollowing action is reflected in the user's profile. | As expected |
| As a user, I can see an activity feed that shows recent activities of the users I follow so that I can stay updated on their interactions. | As a logged-in user, I visit my activity feed. | I can see the most recent posts and activities from users I follow. | As expected |
| As a user, I can create my profile so that I can share information about myself. | As a new user, I create my profile. | The profile is created with the provided information. | As expected |
| As a user, I can view a dedicated profile page for other users so that I can see their posts and engage with their content. | As a logged-in user, I visit another user's profile page. | I can see the user's posts and interact with them. | As expected |
| As a user, I can view a list of users so that I can find and connect with others. | As a logged-in user, I view the list of users. | I can see a list of users and select whom to follow. | As expected |
| As a visitor, I can access a landing page so that I can learn about the platform and sign up. | As a visitor, I visit the landing page. | I can see details about the platform and access the sign-up form. | As expected |
| As a user, I can complete a contact form so that I can reach out for support or inquiries. | As a logged-in user, I fill out the contact form. | The form is submitted successfully. | As expected |
| As a user, I can view posts from users I follow so that I can see their updates and interact with them. | As a logged-in user, I view posts from users I follow. | I can see posts from followed users in my feed. | As expected |
| As a visitor, I can create an account so that I can start sharing and interacting with content on the platform. | As a visitor, I sign up for an account. | My account is created, and I am logged in. | As expected |
| As a user, I can delete my posts so that I can remove content I no longer want to share. | As a logged-in user, I delete one of my posts. | The post is removed from my profile and feed. | As expected |
| As a user, I can see different navigation options based on my login status so that the interface adapts to my needs. | As a logged-in user, I view the navigation menu. | The menu includes options like profile, feed, logout. | As expected |
| As a visitor, I want to access limited content without signing up so I can explore the platform before creating an account. | As a visitor, I browse limited content. | I can view a preview of content but cannot interact without signing up. | As expected |
| As a user, I can view users' avatars so that I can easily identify users of the application. | As a logged-in user, I browse posts or profiles. | Each user has an avatar displayed next to their posts and profiles. | As expected |
| As a user, I can navigate between pages easily so that I can find content without frustration. | As a logged-in user, I use the navigation menu. | The page transitions smoothly between sections without issues. | As expected |
| As a user, I can navigate through pages quickly so that I can view content seamlessly without page refresh. | As a logged-in user, I browse the site. | Pages load quickly and smoothly without refresh. | As expected |
| As a developer, I can add a favicon to the site so that the brand is recognizable in browser tabs. | As a developer, I add a favicon. | The favicon appears in the browser tab. | As expected |
| As a developer, I can integrate Cloudinary Storage for static images so that my application can handle image uploads efficiently. | As a developer, I integrate Cloudinary Storage. | Images upload successfully to Cloudinary. | As expected |
| As a developer, I can set up the project structure so that I can begin development efficiently. | As a developer, I set up the basic project structure. | The project is ready for further development. | As expected |
| As a user, I can unlike posts so that I can remove my appreciation if I change my mind. | As a logged-in user, I unlike a post. | The like is removed from the post. | As expected |
| As a user, I can search for profiles by keywords so that I can find and connect with other users. | As a logged-in user, I use the profile search. | Relevant profiles appear in the search results. | As expected |
| As a user, I can scroll through comments infinitely so that I can view more discussions without page reloads. | As a logged-in user, I scroll through comments. | More comments load as I scroll down. | As expected |
| As a user, I can view individual posts so that I can see content details and engage with it. | As a logged-in user, I click on a post. | The full post details are displayed. | As expected |
| As a user, I can log out of my account so that I can ensure my account's security. | As a logged-in user, I click on the logout button. | I am logged out and redirected to the landing page. | As expected |
| As a user, I can scroll through posts infinitely so that I can explore more content without page reloads. | As a logged-in user, I scroll through posts. | More posts load as I scroll down. | As expected |
| As a user, I can add a location to my posts so that my content is contextualized geographically. | As a logged-in user, I add a location to my post. | The post displays the location along with the content. | As expected |
| As a user, I can search for posts by keywords so that I can find content relevant to my interests. | As a logged-in user, I use the post search feature. | Posts matching the search term appear in the results. | As expected |
| As a user, I can delete my comments so that I can remove content I no longer want to share. | As a logged-in user, I delete one of my comments. | The comment is removed from the post. | As expected |
| As a user, I can like posts so that I can show appreciation for content I enjoy. | As a logged-in user, I like a post. | The post shows an increased like count. | As expected |
| As a user, I can edit my comments so that I can correct mistakes or add more information. | As a logged-in user, I edit one of my comments. | The comment is updated with the new content. | As expected |
| As a user, I can view comments on posts so that I can read the discussions around the content. | As a logged-in user, I view a post's comments. | I can see the comments and engage with them. | As expected |
| As a user, I can create comments on posts so that I can engage in discussions. | As a logged-in user, I add a comment to a post. | The comment is added under the post. | As expected |
| As a user, I can sign in to my account so that I can access my personalized content. | As a returning user, I enter my credentials and sign in. | I am logged in and redirected to my feed. | As expected |
| As a user, I can view my profile so that I can see my displayed information and posts. | As a logged-in user, I visit my profile page. | My profile information and posts are displayed. | As expected |
| As a user, I can check if I am logged in so that I can access protected resources. | As a logged-in user, I attempt to access a protected page. | I can access the page without any issues. | As expected |
| As a user, I can create posts so that I can share my photos and thoughts. | As a logged-in user, I create a new post. | The post is successfully added and visible in my feed. | As expected |
| As a user, I can see the navbar on every page so that I can easily navigate the site. | As a logged-in user, I visit all pages on the site. | Navbar is present on all pages with links to the about page, add highlight, discover, feed, liked, profile pages, and logout. | As expected |
| As a returning user, I want to log in to my account so I can enjoy the features of the site. | As a returning user, I enter my login credentials. | I am logged in and redirected to the homepage. | As expected |
| As a user, I want to see a list of the top profiles so that I can discover and follow interesting users. | As a logged-in user, I visit the top profiles section. | A list of popular profiles is displayed. | As expected |
| As a user, I want to view a

 404 page for invalid URLs so that I know the page does not exist. | As a user, I visit an invalid URL. | A 404 error page is displayed. | As expected |
| As a logged-in user, I want to maintain my logged-in status so that I can keep using the site without interruptions. | As a logged-in user, I stay logged in. | My session remains active across page refreshes and browser restarts. | As expected |

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in WCAG 2.1 Reflow criteria for responsive design on Chrome, Firefox and Safari.

Steps to test:

- Open browser and navigate to [retrospective](https://retrospective-62d99ef7d5c6.herokuapp.com/)
- Open the developer tools (right click and inspect)
- Set to responsive and decrease width to 320px
- Click and drag the responsive window slowly to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

### Browser compatibility

Testing has been carried out on the following browsers:

- Google Chrome
- Firefox
- Safari

## Project Setup and Initial Deployment

- Create a new repository in GitHub.

- Create new workspace by clicking `Gitpod` button.

- Once workspace has loaded, run terminal command to create React app.  
```
npx create-react-app . --use-npm
```

- To install Bootstrap, run terminal command  
```
npm install react-bootstrap@1.6.3 bootstrap@4.6.0
```

- To run the app type the command  
```
nvm install 16 && use 16
```  
then  
```
npm start
```  

- Once the app is installed, run terminal command npm start to check app is working. Browser should open with the spinning React logo on a dark blue background.

### Create a new app in Heroku.

- Go to `Settings` and ensure that heroku/nodejs buildpack is present. If it is not, click on `Add Buildpack`, select `nodejs` and save changes.
- Click on the `Deploy` tab and go to `Deployment Method`. Click on `GitHub`.
- Go to `App connected to GitHub` and search for the relevant repository. Select that repository and click `Connect`.
- Go to `Manual Deploy` section and click `Deploy Branch`. Click on `build logs` to monitor build and ensure deployment is successful. Build is complete when log states `Build succeeded!`.
- Click `Open App` button to view newly deployed app.


## Forking the GitHub Repository

- Go to the GitHub repository
- Click on `Fork` button in top right corner
- You will then have a copy of the repository in your own GitHub account.

### Images

All images used and designs were from or created with [Canva](https://www.canva.com/en_gb/)

### Explanation for Removing the Report Button

Due to challenges in connecting the frontend and backend, the report button for posts could not function as intended. Reports submitted through the button were not properly stored in the backend API, resulting in incomplete functionality. To maintain a high-quality user experience and avoid confusion, I  made a decision to temporarily remove the report button from the frontend. Below is a detailed explanation of why this decision was necessary and its benefits:

---

#### Challenges with Backend Integration
1. **API Connectivity Issues:**  
   Despite efforts to connect the report form to the backend API, the submission of reports did not work correctly. This could be due to errors in the API endpoint, incorrect payload structures, or other integration challenges.

2. **Unsuccessful Data Storage:**  
   Reports submitted via the frontend were not being saved in the backend database as expected. Without proper backend support, the report feature could not fulfill its purpose.

3. **Impact on User Experience:**  
   A non-functional report button would mislead users into thinking their reports were being processed, even though they were not being stored or reviewed. This could lead to frustration and erode trust in the platform.

---

### **Decision to Remove the Report Button**
To address these challenges, the report button was removed from the frontend. This ensures that users are not exposed to a feature that does not work as intended, avoiding confusion and potential dissatisfaction.

---

### **Steps Taken**
1. **Frontend Code Adjustment:**  
   The code implementing the report button  was removed  to ensure the feature is no longer visible to users.
---

### **Benefits of Removing the Report Button**
1. **Improved User Experience:**  
   By removing a non-functional feature, users will not experience confusion or frustration when attempting to submit reports.

2. **Streamlined Interface09:**  
   The platform interface is simplified, focusing only on features that work correctly and add value.

3. **Encourages Future Improvements:**  
   Temporarily removing the feature allows time to address backend issues thoroughly and reintroduce the report button later with full functionality.

4. **Focus on Core Features:**  
   Resources can be reallocated to refining and improving other features that contribute to the platform’s core value.

---

### **Future Plans**
Once the backend integration issues are resolved, the report feature can be revisited and reintroduced with proper testing to ensure seamless functionality. This will allow users to report inappropriate or objectionable content effectively, enhancing the platform's integrity and safety.
By removing the report button for now, the platform avoids potential user confusion and maintains a focus on delivering a polished and reliable user experience. This temporary measure ensures the integrity of the platform while providing an opportunity to revisit the feature in the future with the necessary backend support.

### Code
This project was inspired by the Code Institute moments walkthrough project.
I have modified the styles and code and functionality to fit the needs of the project.
Further changes are planned and can be read about further in the [future features](#future-features) section.

