import "./News.css";
import Card from "./Card/Card";
import React, { useState } from "react";
import RightNav from "./RightNav/RightNav";
import Loader from "../Loader/Loader";

const News = () => {
  const [articles, setArticales] = useState([]);
  const [loader, setLoader] = useState("true");
  const [place, setPlace] = useState("us");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const getNews = (place, category) => {
    setLoader(true);
    console.log("updating");
    var url = `https://newsapi.org/v2/top-headlines?country=${place}&category=${category}&apiKey=333eecdfb2534d96b8169b42a168ceb7&page=${page}`;
    var req = new Request(url);

    fetch(req).then(function (response) {
      response.json().then((e) => {
        setArticales(e.articles);
        setLoader(false);
        setPlace(place);
        setCategory(category);
        setPage(1);
      });
    });
  };

  const handleScroll = (e) => {
    const bottom =
      Math.abs(
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
      ) < 1;
    if (bottom) {
      setLoader(true);

      var url = `https://newsapi.org/v2/top-headlines?country=${place}&category=${category}&apiKey=333eecdfb2534d96b8169b42a168ceb7&page=${
        page + 1
      }`;
      var req = new Request(url);

      fetch(req).then((res) => {
        res.json().then((e) => {
          setArticales(articles.concat(e.articles));
          setLoader(false);
          setPage(page + 1);
        });
      });
    }
  };

  return (
    <div className="News">
      <div className="wrapper">
        <div className="left" onScroll={handleScroll}>
          {loader && <Loader />}
          {articles.map((i) => {
            return (
              <>
                {i.title && i.description && i.urlToImage ? (
                  <Card
                    title={i.title}
                    image={i.urlToImage}
                    desc={
                      i.description ? i.description.slice(0, 150) + "..." : ""
                    }
                    author={i.author}
                    publishedAt={i.publishedAt}
                  />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <div className="right">
          <RightNav updateNews={getNews} />
        </div>
      </div>
    </div>
  );
};

export default News;
