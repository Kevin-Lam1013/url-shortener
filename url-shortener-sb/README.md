## 📌 Environment Variables Configuration  

To run the backend, create a `.env` file in the project's root directory and add the following environment variables:  

### 🔹 Database Configuration  
.env example : 
```env
DATABASE_URL=jdbc:mysql://localhost:3306/database-name
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_DIALECT=org.hibernate.dialect.MySQLDialect
```

### 🔹 JWT Authentication
Generate a 64-character secret key using https://jwtsecret.com/generate and add it here : 

```env
JWT_SECRET=your_generated_secret
```

### 🔹 Frontend Configuration
Define the frontend URL to allow cross-origin requests:

```env
FRONTEND_URL=http://localhost:5173
```
