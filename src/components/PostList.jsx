import PostCard from "./PostCard"
import { useState, useEffect} from "react";
import axios from "axios";
import LoadingPost3 from "./LoadingPost3";
import Error from "./Error";

function PostList(){

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    fetchPosts();
}, []);

    if (isError)
        { return <Error />
        }

    return(
        <div class="block__correct">
            {isLoading ? (<LoadingPost3 />) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post}/>
                    ))};
                </>
            )}
        </div>
    );
}

export default PostList;