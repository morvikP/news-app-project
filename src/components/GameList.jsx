import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import LoadingPost4 from "./LoadingPost4";
import Error from "./Error";

function GameList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://edebed92e9ef305c.mokky.dev/Game');
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
        <div className="add__game">
            {isLoading ? (<LoadingPost4 />) : (
                <>
                    {posts.map((Game) => (
                        <GameCard key={Game.id} Game={Game} />
                    ))}
                </>
            )}
        </div>
    );
}
export default GameList;