// const jwt = require('jsonwebtoken');

// exports.auth = (req,res,next) => {
//     const token = req.header('X-Authorization');

//     if(token) {
//         try {
//             const decodedToken = jwt.verify(token, "SECRETSECRET");

//             req.user = decodedToken;
//             next();
//         } catch (error) {
//             res.status(400).json({
//                 message: "You are not authorizated"
//             })
//         }
//     }
// }

// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your-secret-key');
//     req.user = decoded.user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = { auth };

// const jwt = require('jsonwebtoken');

// exports.auth = (req, res, next) => {
//     const token = req.header('X-Authorization');

//     if (token) {
//         try {
//             const decodedToken = jwt.verify(token, "SECRETSECRET");

//             req.user = decodedToken;
//             next(); // Don't forget to call next() to pass control to the next middleware
//         } catch (error) {
//             res.status(401).json({
//                 message: "Invalid token"
//             });
//         }
//     } else {
//         res.status(401).json({
//             message: "Unauthorized"
//         });
//     }
// };

// const jwt = require('jsonwebtoken');
// exports.authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     res.status(401).json({
//         status: 'fail',
//         message: 'Unauthorized!',
//       });
//   }
//   const token = authHeader.split(' ')[1];
//   try {
//     const user = jwt.verify(token, 'SECRET');
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({
//         status: 'fail',
//         message: 'Unauthorized!',
//       });
//   }
// };

const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  const token = req.header('X-Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication token not provided' });
  }

  try {
    const decodedToken = jwt.verify(token, "SECRETSECRET");

    if (!decodedToken || !decodedToken._id) {
      return res.status(401).json({ message: 'Invalid user information in the token' });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Failed to authenticate token' });
  }
};