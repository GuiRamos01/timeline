const PostSkeleton = () => {
  return (
    <div className="post skeleton">
      <div className="newsHeader">
        <div className="title skeleton-box" />
        <div className="subtitle skeleton-box" />
        <div className="subtitle skeleton-box" />
      </div>

      <div className="caption-img skeleton-box" />

      <div className="content">
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
        <div className="line skeleton-box" />
      </div>
    </div>
  );
}
export default PostSkeleton;
