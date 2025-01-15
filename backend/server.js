import express, { application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
const port = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(cors({origin: "*", credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("API is running...");
});

app.use('/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    // any route that is not api will be redirected to index.html
    app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', build, 'index.html'))
    );
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});