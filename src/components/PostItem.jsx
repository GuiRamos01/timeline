import "../styles/PostItem.sass"
import { Link } from "react-router-dom";

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

export function PostItemSkeleton() {
  return (
    <div id="PostItem" className="skeleton">
      <div className="content-img skeleton-box" />
      <div className="postContent">
        <div className="title skeleton-box" />
        <div className="title skeleton-box" />
        <div className="title skeleton-box" />
      </div>
    </div>
  );
}

export function PostItem({post}) {
    const title = decodeHtmlEntities(post.title?.rendered);
    const ogImageUrl = post.yoast_head_json?.og_image?.[0]?.url || null;
    const excerpt = decodeHtmlEntities(post?.yoast_head_json?.description ?? "");

  return (
    <Link reloadDocument to={`/news/${post.slug}`}>
        <div id="PostItem">
            <img className="content-img" alt="" src={ogImageUrl}/>
            <div className="postContent">
                <h1>{title}</h1>
                <p className="dateHeader">
                <b>{post.yoast_head_json?.author}</b> • {new Date(post.date).toLocaleDateString()}
                </p>
                <div className="subtitle" dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
        </div>
    </Link>
  );
}

export default PostItem;
