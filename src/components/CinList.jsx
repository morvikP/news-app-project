import { useState, useEffect } from "react";
import axios from "axios";
import CinCard from "./CinCard";
import LoadingPost4 from "./LoadingPost4";
import Error from "./Error";

function CinList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/cin');
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
        <div className="add__cin">
            {isLoading ? (<LoadingPost4 />) : (
                <>
                    {posts.map((cin) => (
                        <CinCard key={cin.id} cin={cin} />
                    ))}
                </>
            )}
        </div>
    );
}

export default CinList;