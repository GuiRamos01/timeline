import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import "../style.sass"
import "../styles/Categories.sass"
import "../styles/PostItem.sass"

import {PostItem, PostItemSkeleton} from "../components/PostItem";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import PostsJson from "../scripts/postsSearch.json"

const Search = () => {
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1); // controla a página atual
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const { search } = window.location;
  const searchTerm = new URLSearchParams(search).get('q');
  const encodedInput = encodeURIComponent(searchTerm);

  const searchText = DOMPurify.sanitize(searchTerm);

  useEffect(() => {
    async function fetchPosts() {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" })

        const res = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?search=${encodedInput}&per_page=9&page=${page}`
        );
        setPosts(res.data);

        if (res.data) {
          setLoading(false);
        }

        setTotalPages(Number(res.headers["x-wp-totalpages"]));

        return Response.json(res.data, {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    }

    fetchPosts();
  }, [page, encodedInput]);
  
  return (
    <aside id="Categories">
        <Header/>
        <SubHeader/>
    
        <div className="Main">
          <div className="HeaderSearch">
            <h3>Busca por:</h3>
            <h1>{searchText}</h1>
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
          ) : posts.length === 0 ? (
            <h3 className="w-full">Sem resultado na busca...</h3>
          ) : (
            <div className="w-full">
              <div id="WrapperGrid" className="itemsFlex">
                {posts.map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}
              </div>

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
          )}
        </div>
        <Footer/>
    </aside>
  );
}

export default Search;
