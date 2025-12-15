# TimeSea - E-Commerce for Watches

**TimeSea** is a premium e-commerce platform dedicated to selling high-quality watches. Built with a robust technology stack, it offers a seamless shopping experience for users and a comprehensive dashboard for administrators.

## Features

### User Side
- **Authentication**: Secure login and signup with Email/Password and **Google OAuth**.
- **Account Management**: Update profile, manage addresses, and change passwords.
- **Product Discovery**: Browse watches by category, brand, and search functionality.
- **Product Details**: View detailed information, images, and reviews for each watch.
- **Shopping Cart**: Add items, update quantities, and remove items.
- **Wishlist**: Save favorite items for later.
- **Wallet System**: Integrated wallet for refunds and quick payments.
- **Coupons**: Apply discount coupons during checkout.
- **Checkout**: Secure checkout process with multiple payment options.
- **Payments**: 
    - **Razorpay**: Online payments.
    - **Wallet**: Pay using wallet balance.
    - **Cash on Delivery (COD)**.
- **Order Management**: Track orders, cancel/return items (with wallet refunds), and download invoices.
- **Password Recovery**: Forgot password functionality with OTP verification.

### Admin Side
- **Dashboard**: Visual overview of sales, user statistics, and charts.
- **Product Management**: Add, edit, delete, and list products with image uploads.
- **Category & Brand Management**: Manage product categories and brands.
- **Order Management**: View all orders, update statuses (Shipped, Delivered, etc.), and manage returns.
- **User Management**: View users and block/unblock access.
- **Coupon Management**: Create and manage discount coupons.
- **Offer Management**: Manage category-wide offers.
- **Sales Report**: Generate and download sales reports (PDF/Excel).

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Frontend**: EJS (Embedded JavaScript templates), CSS
- **Authentication**: Passport.js (Local & Google Strategy)
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Image Handling**: Multer (for uploads)

## Installation

1.  **Clone the Repository**
    ```bash
    git clone git@github.com:NRnishad/TimeSea.git
    cd TimeSea
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=3000
    MONGO_DB_URL=your_mongodb_connection_string
    
    # Google OAuth
    CLIENT_ID=your_google_client_id
    CLIENT_SECRET=your_google_client_secret
    
    # Razorpay
    YOUR_KEY_ID=your_razorpay_key_id
    YOUR_KEY_SECRET=your_razorpay_key_secret
    
    # Nodemailer
    NODEMAILER_PASS_KEY=your_email_app_password
    
    # Session Secret (Optional but recommended)
    SESSION_SECRET=your_session_secret
    ```

4.  **Start the Server**
    ```bash
    npm start
    ```
    Or for development with nodemon:
    ```bash
    npm run server
    ```

5.  **Access the Application**
    Open your browser and visit `http://localhost:3000`.

## Directory Structure

- `config/`: Database configuration.
- `controllers/`: Logic for handling requests (User, Admin, Product, Order, etc.).
- `middlewares/`: Authentication and other middleware (e.g., specific blocks for Admin/User).
- `models/`: Mongoose schemas for MongoDB.
- `public/`: Static files (CSS, Images, JS).
- `routes/`: Express route definitions.
- `views/`: EJS templates for User and Admin interfaces.
- `uploads/`: Directory for uploaded images.

## Author

**NRnishad**
- GitHub: [NRnishad](https://github.com/NRnishad)
- Project Repo: [TimeSea](https://github.com/NRnishad/TimeSea)
