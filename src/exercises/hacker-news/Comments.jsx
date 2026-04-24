import { useEffect, useState } from 'react';

function Comments({ ids }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const comments = [];
      for (const id in ids) {
        const commentResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${ids[id]}.json?print=pretty`,
        );
        const commentData = await commentResponse.json();
        comments.push({
          id: commentData?.id,
          text: commentData?.text,
        });
      }

      setComments(comments);
    }

    fetchData();
  }, [ids]);

  return (
    <ul className="comments__list">
      {comments?.map((comment) => {
        return <li key={comment.id}>{comment.text}</li>;
      })}
    </ul>
  );
}

export default Comments;
