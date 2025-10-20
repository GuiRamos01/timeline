import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import "../style.sass"
import "../styles/Categories.sass"
import "../styles/PostItem.sass"

import {PostItem, PostItemSkeleton} from "../components/PostItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import NotFound from "../components/NotFound";

const UltimasNoticias = () => {
  const path = useLocation().pathname.split("/")[2];    
  const [posts, setPosts] = useState({});
  const [notFound, setNotFound] = useState(false);

  const [page, setPage] = useState(1); // controla a página atual
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" })

        const res = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?&per_page=9&page=${page}`
        );
        setPosts(res.data);

        if (res.data && res.data.length > 0) {
          setLoading(false);
        } else {
          setNotFound(true);
        }

        setTotalPages(Number(res.headers["x-wp-totalpages"]));
      } catch (error) {
        setNotFound(true);
        console.error("Erro ao carregar posts:", error);
      }
    }

    fetchPosts();
  }, [page, path]);
  
  if (notFound) {
    return <NotFound />;
  }

  return (
    <aside id="Categories">
        <Header/>
        <SubHeader/>

        <head>
          <title>Últimas Notícias | Revista Timeline</title>
        </head>
    
        <div className="Main">
          <div className="HeaderCategories">
            <h1>Últimas Notícias</h1>
          </div>

          {loading ? (
            <div id="WrapperGrid" className="itemsFlex">
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
            </div>
          ) : (
            <div id="WrapperGrid" className="itemsFlex">
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

export default UltimasNoticias;
