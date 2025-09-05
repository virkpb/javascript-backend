import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // URL to the video file from cloud storage
        required: true,
    },
    thumbnail: {
        type: String, // URL to the thumbnail image from cloud storage
        required: true,
    }, 
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,       
    },
    duration: {
        type: Number, // Duration in seconds from cloud processing
        required: true,
    }, 
    views: {
        type: Number,
        required: true,
        default: 0,
    }, 
    isPublished: {
        type: Boolean,
        required: true,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
     

// const videoSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     description: {
//         type: String,
//         required: true,
//         trim: true,        
//     },    
//     videoUrl: {
//         type: String,
//         required: true,
//         trim: true,
//     },    
//     thumbnailUrl: {
//         type: String,
//         required: true,
//         trim: true,
//     },    
//     views: {
//         type: Number,
//         required: true,
//         default: 0,
//     },    
//     likes: {
//         type: Number,
//         required: true,
//         default: 0,
//     },    
//     dislikes: {
//         type: Number,
//         required: true,
//         default: 0,
//     },    
//     comments: {
//         type: Number,
//         required: true,
//         default: 0,
//     },    
    // createdAt: {
    //     type: Date,
    //     required: true,
    //     default: Date.now,
    // },    
//     updatedAt: {
//         type: Date,
//         required: true,
//         default: Date.now,
//     },    
//     uploadedBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",        
//     }, 
 
// },{timestamps: true});