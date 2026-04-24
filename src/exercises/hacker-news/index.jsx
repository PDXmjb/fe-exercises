import { useEffect, useState } from 'react';
import Comments from './Comments';

function HackerNews() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      );

      const responseData = await response.json();

      const topTen = responseData.slice(0, 10);
      console.log(topTen);

      const titles = [];
      for (const story in topTen) {
        const storyResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${topTen[story]}.json?print=pretty`,
        );
        const storyData = await storyResponse.json();
        titles.push({
          id: storyData?.id,
          title: storyData?.title,
          url: storyData?.url,
          kids: storyData?.kids?.slice(0, 3) || [],
        });
      }
      console.log(titles);

      setData(titles);
    }

    fetchData();
  }, []);

  console.log('data', data);
  // Load the data
  // Display the data
  return (
    <div>
      {data?.map((story) => (
        <div key={story.id}>
          <a href={story.url} target="_blank">
            {story.title}
          </a>
          <Comments ids={story.kids} />
        </div>
      ))}
    </div>
  );
}

export default HackerNews;
