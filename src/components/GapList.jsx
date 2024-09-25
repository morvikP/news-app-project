import Gap from "./Gap"
import { useState, useEffect} from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";

function PostList(){

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/gap');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    fetchPosts();
}, []);

    return(
        <div class="block__correct">
            {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((gap) => (
                        <Gap key={gap.id} gap={gap}/>
                    ))};
                </>
            )}
        </div>
    );
}

export default PostList;