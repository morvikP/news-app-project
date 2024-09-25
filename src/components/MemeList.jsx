import { useState, useEffect } from "react";
import axios from "axios";
import MemeCard from "./MemeCard";
import LoadingPost4 from "./LoadingPost4";
import Error from "./Error";

function MemeList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/meme');
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

    return (
        <div className="add__meme">
            {isLoading ? (<LoadingPost4 />) : (
                <>
                    {posts.map((meme) => (
                        <MemeCard key={meme.id} meme={meme} />
                    ))}
                </>
            )}
        </div>
    );
}

export default MemeList;