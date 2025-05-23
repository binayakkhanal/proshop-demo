import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    console.log("token...", token)


    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite : 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Days
    });
}

export default generateToken;