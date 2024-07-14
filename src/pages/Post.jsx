import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import LikeBtn from "../components/LikeBtn";
import useTheme from '../contexts/theme';

export default function Post() {
    const [post, setPost] = useState(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const { theme } = useTheme();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    if (userData && post.userid === userData.$id) {
                        setIsAuthor(true);
                    }
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate, userData]);

    const findId = (arr, str) => {
        return arr ? arr.includes(str) : false;
    };

    const handleLikes = async () => {
        if (post && userData) {
            const updatedLikes = isLiked
                ? post.likes.filter((id) => id !== userData.$id)
                : [...post.likes, userData.$id];

            setIsLiked((prev) => !prev);

            const find = findId(post.likes, userData.$id);
            setLikeCount(
                !isLiked && !find
                    ? (post.likes ? post.likes.length : 0) + 1
                    : isLiked && find
                    ? (post.likes ? post.likes.length : 0) - 1
                    : post.likes ? post.likes.length : 0
            );

            try {
                await appwriteService.updatePost(post.$id, {
                    ...post,
                    likes: updatedLikes,
                });
                console.log("Likes updated successfully");
            } catch (error) {
                console.error("Failed to update likes:", error);
            }
        }
    };

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    const find = findId(post.likes, userData?.$id);
                    setIsLiked(find);
                    setLikeCount(post.likes ? post.likes.length : 0);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate, userData]);

    const deletePost = () => {
        if (post) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredimg);
                    navigate("/");
                }
            });
        }
    };

    return post ? (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
            <Container>
                <div className={`flex flex-col md:flex-row items-start mb-4 relative rounded-xl p-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
                    <div className="md:w-1/2 md:pr-4">
                        <div className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            {post.title}
                        </div>
                        {isAuthor && (
                            <div className="flex flex-col space-y-3 mb-4">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                                    onClick={deletePost}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                        <div className="mt-4 flex items-center space-x-2">
                            <LikeBtn
                                name="Like"
                                likeCount={likeCount}
                                handleLikes={handleLikes}
                                isLiked={isLiked}
                            />
                            <span className="text-lg font-light">
                                Like{likeCount > 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <img
                            src={appwriteService.getFilePreview(post.featuredimg)}
                            alt={post.title}
                            className="rounded-xl border border-gray-300 object-contain w-full h-auto max-w-md"
                        />
                    </div>
                </div>
                <div className={`text-xl font-light ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    {parse(post.content, {
                        replace: (domNode) => {
                            if (domNode.name === 'p') {
                                return <p className="mb-4">{domNode.children.map(child => child.data)}</p>;
                            }
                            return domNode;
                        }
                    })}
                </div>
            </Container>
        </div>
    ) : null;
}
