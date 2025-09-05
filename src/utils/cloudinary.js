import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const uploadToCloudinary = (filePath, options = {}) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(filePath, options, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null;
        // upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {resource_type: "auto"}
        );
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);// delete the file from server if upload is not properly done
        return null;
    }
}

export {uploadOnCloudinary};
