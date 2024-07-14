import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import useTheme from '../contexts/theme';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className={`w-full py-8 ${theme === 'light'? 'bg-white' : 'bg-black'}`}>
            <Container>
                <div className="flex flex-wrap justify-center">
                    {posts.map((post) => (
                        <div key={post.$id} className="w-1/4 p-2">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;