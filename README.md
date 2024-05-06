
# WhatsApp Clone

WhatsApp Clone is a simple chat application built with Express.js and Mongoose. It allows users to send and receive messages in real-time.

## Table of Contents
1. [Routes](#routes)
2. [Packages Used](#packages-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Database Setup](#database-setup)
6. [Contributing](#contributing)


## Routes

1. **Home Route (`GET /`)**:
   - This route simply displays a welcome message or homepage.
   - It doesn't require any database interaction and serves as a landing page for users.

2. **View Chats Route (`GET /chats`)**:
   - This route fetches all the chats stored in the database and renders them in a view.
   - It interacts with the MongoDB database to retrieve the chat data using Mongoose.

3. **Add New Chat Form Route (`GET /chats/new`)**:
   - This route renders a form where users can input details to create a new chat.
   - It doesn't interact with the database directly but prepares the form for submitting new chat data.

4. **Create Chat Route (`POST /chats`)**:
   - This route handles the form submission from the "Add New Chat" form.
   - It receives data from the form submission, creates a new chat object, saves it to the MongoDB database using Mongoose, and then redirects the user back to the "View Chats" route.

5. **Edit Chat Form Route (`GET /chats/:id/edit`)**:
   - This route renders a form to edit an existing chat.
   - It fetches the chat data associated with the provided ID from the MongoDB database using Mongoose and renders the form with the pre-filled chat details.

6. **Update Chat Route (`PUT /chats/:id`)**:
   - This route handles the form submission from the "Edit Chat" form.
   - It receives updated data from the form submission, finds the chat object by ID in the MongoDB database using Mongoose, updates the chat object with the new data, saves the changes, and then redirects the user back to the "View Chats" route.

7. **Delete Chat Route (`DELETE /chats/:id`)**:
   - This route handles the deletion of an existing chat.
   - It receives a request to delete a chat with the specified ID, finds the chat object in the MongoDB database using Mongoose, deletes it, and then redirects the user back to the "View Chats" route.

## Packages Used

1. **Express.js**: A minimalist web framework for Node.js used for handling HTTP requests and responses, routing, middleware, and more.

2. **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward schema-based solution to model application data and interact with MongoDB databases.

3. **Path**: A core Node.js module used for handling file paths. In your application, it's used to resolve paths to static files and views.

4. **Method-Override**: A middleware for Express.js that enables the use of HTTP verbs such as PUT and DELETE in places where the client doesn't support it, such as HTML forms.

## Installation

To install WhatsApp Clone locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kamalkolisetty/Express-WhatsApp-Clone-with-MongoDB
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the database (see [Database Setup](#database-setup)).**

4. **Start the server:**
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can access the routes described above to view, create, edit, and delete chat messages.

## Database Setup

1. **Install MongoDB**: Make sure you have MongoDB installed on your system.

2. **Create a Database**: Run MongoDB and create a database named `whatsapp`.

3. **Connect to Database**: Update the connection string in `app.js` to connect to your MongoDB database.

## Demonstration

![one] (images/1.png)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

