const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));  
}}

export  {asyncHandler};

// const asyncHandler = (fn) => async (req,res,nnext) =>{
//     try {
//         await fn(req,res,nnext);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false, 
//             message: error.message || "Internal Server Error"
//         })
//     }
// }