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

const Categories = () => {
  const path = useLocation().pathname.split("/")[2];    
  const [category, setCategory] = useState({});
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
          `https://revistatimeline.com/wp-json/wp/v2/categories?slug=${path}`
        );
        setCategory(res.data[0]);

        const res2 = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?categories=${res.data[0].id}&per_page=9&page=${page}`
        );
        setPosts(res2.data);

        if (res.data && res.data.length > 0) {
          setLoading(false);
        } else {
          setNotFound(true);
        }

        setTotalPages(Number(res2.headers["x-wp-totalpages"]));
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
    
        <div className="Main">
          {category && category.name && (
            <div className="HeaderCategories">
              <h3>Categoria</h3>
              <h1>{category.name}</h1>
            </div>
          )}

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

export default Categories;
