import { useState } from "react";
import Header from "./Header";

function App() {

  const [articles, setArticles] = useState([]);

  const fetchArticles = async (event) => {
  
    event.preventDefault();

    const articlesFromApi = [
      {
        "title": "Article 1"
      },
      {
        "title": "Article 2"
      }
    ];

    setArticles(articlesFromApi);
  }

  return (
    <>
      <Header submitArticlesCallback={fetchArticles}/>

      <main>
      
        {articles.map((article) => {
          return (<h1>{article.title}</h1>)
        })}

      </main>
    </>
  );
}

export default App;
