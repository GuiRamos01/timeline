import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import "../style.sass"
import "../styles/Categories.sass"
import "../styles/PostItem.sass"

import {PostItem, PostItemSkeleton} from "../components/PostItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../components/NotFound";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import Helmet from "react-helmet"

const CategoryAuthor = () => {
    const path = useLocation().pathname.split("/")[2];    
    const [author, setAuthor] = useState({});
    const [authorImg, setAuthorImg] = useState({});
    const [posts, setPosts] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState({});
    
    const [page, setPage] = useState(1); // controla a página atual
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
      async function fetchPost() {
        try {
          window.scrollTo({ top: 0, behavior: "smooth" })

          const res = await axios.get(
            `https://revistatimeline.com/wp-json/wp/v2/users?slug=${path}`
          );
          setAuthor(res.data[0]);
          setAuthorImg(res.data[0].avatar_urls['96']);

          const res2 = await axios.get(
            `https://revistatimeline.com/wp-json/wp/v2/posts?author=${res.data[0].id}&per_page=9&page=${page}`
          );
          setPosts(res2.data);

          if (res.data && res.data.length > 0) {
            setLoading(false);
          } else {
            setNotFound(true);
          }

          setTotalPages(Number(res2.headers["x-wp-totalpages"]));

          return Response.json(res.data, {
            headers: { "Access-Control-Allow-Origin": "*" }
          })
          
        } catch (err) {
          setNotFound(true);
          console.error("Erro ao buscar post:", err);
        }
      }

      fetchPost();
    }, [page, path]);

  if (notFound) {
    return <NotFound />;
  }
  
  return (
    <aside id="Categories">
        {author && author.name && (
          <Helmet>
            <title>{author.name} | Revista Timeline</title>
          </Helmet>
        )}

        <Header/>
        <SubHeader/>
    
        <div className="Main">
          <div className="HeaderAuthor">
            {authorImg && <img src={authorImg} alt="" />}
            <h1>{author.name}</h1>
            <p>{author.description || "Autor(a) da Revista Timeline"}</p>
          </div>

          <h3>Publicações de {author.name}</h3>

          {loading ? (
            <div id="WrapperGrid">
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
            </div>
          ) : (
            <div id="WrapperGrid">
              {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          )}

          <Pagination className="navegation">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={page <= 1 ? "is-disabled" : "p-button"}
                  onClick={() => {
                    if (page > 1) {
                      setLoading(true); // ativa loading imediatamente
                      setPage(page - 1); // dispara o useEffect e a requisição
                    }
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>{totalPages}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className={page >= totalPages ? "is-disabled" : "p-button"}
                  onClick={() => {
                    if (page < totalPages) {
                      setLoading(true); // ativa loading imediatamente
                      setPage(page + 1); // dispara o useEffect e a requisição
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <Footer/>
    </aside>
  );
}

export default CategoryAuthor;
