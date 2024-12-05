import jwt from "jsonwebtoken";

export const sendJwt = async (
    user,
    res,
    statusCode,
    message
) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.status(statusCode)
        .json({
            message,
            token
        });
};