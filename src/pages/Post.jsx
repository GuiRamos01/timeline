import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.sass"
import "../styles/newsPage.sass"

import { Button } from "@/components/ui/button.jsx";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MSGassine from "../components/SubHeader";
import PostItem, { PostItemSkeleton } from "../components/PostItem";
import PostSkeleton from "../components/SkeletonPost";
import NotFound from "../components/NotFound";

// Função para decodificar os escapes Unicode
function decodeHtmlEntities(str) {
  if (!str) return "";

  // Cria um elemento temporário para decodificar entidades HTML
  const txt = document.createElement("textarea");
  txt.innerHTML = str;

  return txt.value
    .replace(/\\u003C/g, "<")
    .replace(/\\u003E/g, ">")
    .replace(/\\u0026/g, "&")
    .replace(/\\n/g, "\n");
}

const Post = () => {
    const path = useLocation().pathname.split("/")[2];    
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [author, setAuthor] = useState({});
    const [authorImg, setAuthorImg] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?slug=${path}`
        );
        setPost(res.data[0]);

        if (res.data && res.data.length > 0) {
          setLoading(false);
        } else {
          setNotFound(true);
        }

        const res2 = await axios.get(res.data[0]._links?.author?.[0]?.href);
        setAuthor(res2.data);
        setAuthorImg(res2.data.avatar_urls['96']);

        const res3 = await axios.get(
          `https://revistatimeline.com/wp-json/wp/v2/posts?&per_page=5`
        );
        setPosts(res3.data);

        return Response.json(res.data, {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
      } catch (err) {
        setNotFound(true);
        console.error("Erro ao buscar post:", err);
      }
    }

    fetchPost();
  }, [path]);
  
  const title = decodeHtmlEntities(post?.title?.rendered ?? "");
  const content = decodeHtmlEntities(post?.content?.rendered ?? "");
  const excerpt = decodeHtmlEntities(post?.yoast_head_json?.description ?? "");

  const ogImageUrl = post?.yoast_head_json?.og_image?.[0]?.url ?? null;

  const caption =
    post?.yoast_head_json?.schema?.["@graph"]?.find((item) => item?.caption)
      ?.caption ?? null;

  useEffect(() => {
    if (title) {
      document.title = `${title} | Revista Timeline`;

      let metaTitle = document.querySelector("meta[name='title']");
      if (!metaTitle) {
        metaTitle = document.createElement("meta");
        metaTitle.name = "title";
        document.head.appendChild(metaTitle);
      }
      metaTitle.content = title;
    }

    if (excerpt) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = excerpt;
    }
  }, [title, excerpt]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <aside id="newsPage">
      {title && (
        <Helmet>
          <title>{title} | Revista Timeline</title>
        </Helmet>
      )}

      <Header />

      <MSGassine/>

      <div className="Main">
        {loading ? (
          <PostSkeleton/>
        ):(
          <div className="post">
            <div className="newsHeader">
              <h1>{title}</h1>
              {excerpt && <div className="subtitle" dangerouslySetInnerHTML={{ __html: excerpt }} />}

              <div className="author">
                <div className="flex flex-col">
                  <Link to={`/author/${author.slug}`}>
                    {post && <p className="authorHeader">{post.yoast_head_json?.author}</p>}
                  </Link>

                  <p className="dateHeader">
                    Publicado em {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
            
            <img className="content-img" alt="" src={ogImageUrl}/>
            {caption && <p className="caption-img">{caption}</p>}

            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

            {/* <div className="restrictArticle">
              <p className="text-lg">Esta publicação é exclusiva para assinantes</p>
              <h3>A partir de R$29/mês</h3>
              <Button>Assine já</Button>
              <p>Já é assinante? <Link href="#">Entre aqui</Link></p>
            </div> */}

            <div className="authorPost">
                {authorImg && <img onClick={() => navigate(`/author/${author.slug}`)} src={authorImg} alt="" />}

                <Link to={`/author/${author.slug}`}>
                  <div>
                    <h1>{author.name}</h1>
                    <p>{author.description || "Autor(a) da Revista Timeline"}</p>
                  </div>
                </Link>
            </div>

            <div className="msgApoie">
              <h1>APOIE O VERDADEIRO JORNALISMO</h1>
              <p>Nosso objetivo é ser mais do que uma simples publicação; queremos ser uma fonte de inspiração e reflexão. Acreditamos no poder da informação para gerar discussões significativas e fomentar uma sociedade mais informada e engajada.</p>
              <Button>Assine já</Button>
            </div>
          </div>
        )}

        <h1 className="titleBlock">ÚLTIMAS NOTÍCIAS</h1>

        {posts.length > 0 ? (
          <div id="WrapperGrid" className="itemsFlex">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div id="WrapperGrid">
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
          </div>
        )}
      </div>

      <Footer/>
    </aside>
  );
}

export default Post;
