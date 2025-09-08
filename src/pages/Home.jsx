import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import "../style.sass"
import "../styles/Home.sass"
import "../styles/PostItem.sass"

import axios from "axios";
import { Link } from "react-router-dom";
import {PostItem, PostItemSkeleton} from "../components/PostItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button.jsx"

import AuthorsJson from "../scripts/authors.json"

const Home = () => {
  const [posts, setPosts] = useState({});
  const [posts2, setPosts2] = useState({});
  const [authors] = useState(AuthorsJson);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <ChevronRight/>,
    prevArrow: <ChevronLeft/>,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?&per_page=5`
        );
        setPosts(res.data);

        return Response.json(res.data, {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
      } catch (err) {
        console.error("Erro ao buscar post:", err);
      }
    }

    fetchPost();
  }, []);

  useEffect(() => {
    async function fetchPosts2() {
      try {
        const res = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?categories=600&per_page=9`
        );

        setPosts2(res.data);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    }

    fetchPosts2();
  }, []);

  useEffect(() => {
      document.title = `Revista Timeline`;
  }, []);
  
  return (
    <aside id="Home">
        <Header/>
        <SubHeader/>
    
        <div className="Main">
          {posts.length > 0 ? (
            <div id="WrapperGrid" className="itemsFlex">
              {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
              <Link to="/ultimas-noticias"><Button>+Mais notícias</Button></Link>
            </div>
          ) : (
            <div id="WrapperGrid" className="itemsFlex">
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
            </div>
          )}

          {posts.length > 0 && (
            <div className="block2">
              <div className="headerBlock">PRINCIPAIS COLUNISTAS</div>

              <Slider {...settings2}>
                {authors.map((author) => (
                  <div key={author.id} className="Author">
                    <Link to={author.link}>
                      <div className="detailsAuthor">
                        <img src={author.avatar_urls} />
                        <h1>{author.name}</h1>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          )}

          <div className="block">
            {posts2.length > 0 && (
              <div className="headerBlock">ARTIGOS EM DESTAQUE</div>
            )}

            {posts2.length > 0 ? (
                <Slider {...settings}>
                  {posts2.map((post) => (
                    <PostItem key={post.id} post={post} />
                  ))}
                </Slider>
            ) : (
              <div id="WrapperGrid">
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
              </div>
            )}
          </div>

        </div>
        <Footer/>
    </aside>
  );
}

export default Home;
