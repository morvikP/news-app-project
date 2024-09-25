import { useState, useEffect } from "react";
import axios from "axios";
import MainCard from "./MainCard";
import LoadingPost2 from "./LoadingPost2";
import Error from "./Error";

function MainList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/main');
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
        <div className="down__small">
            {isLoading ? (<LoadingPost2 />) : (
                <>
                    {posts.map((main) => (
                        <MainCard key={main.id} main={main} />
                    ))}
                </>
            )}
        </div>
    );
}
export default MainList;