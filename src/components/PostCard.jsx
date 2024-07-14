import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import useTheme from '../contexts/theme';

function PostCard({ $id, title, featuredimg }) {
    const { theme } = useTheme();
    // Generate the preview URL safely
    let previewUrl = '';
    if (featuredimg) {
        try {
            previewUrl = appwriteService.getFilePreview(featuredimg);
        } catch (error) {
            console.error("Error getting file preview:", error);
        }
    } else {
        console.error("Missing fileId (featuredImage)");
    }

    return (
        <Link to={`/post/${$id}`}>
            <div className={`w-full bg-gray-400 rounded-xl p-4 duration-300 hover:bg-gray-200 hover:scale-105 flex flex-col h-full justify-between`} >
                <div className='flex flex-col items-center'>
                    {previewUrl ? (
                        <img src={previewUrl} alt={title} className='rounded-xl h-48 w-full object-cover' />
                    ) : (
                        <div className="placeholder-image text-center">Image not available</div>
                    )}
                </div>
                <h2 className={`text-lg font-bold ${theme === 'light' ? 'text-black' : 'text-black'}`}>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;

