import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

function PostWidget({categories, slug}) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <div className="postWidget-container rounded-lg">
        <h3 className="text-xl mb-4 font-semibold border-gray-400 border-b pb-3">
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        {relatedPosts.map(post => {
          return (
            <div className="flex items-center w-full mb-4" key={post.title}>
              <div className="w-16 flex-none">
                <Image 
                  src={post.featuredImage.url} 
                  alt={post.title} 
                  height="60"
                  width="60"
                  className="align-middle rounded-md"
                />
              </div>
              <div className="flex-grow ">
                <Link href={`/posts/${post.slug}`} className="text-sm" key={post.title}>
                  <span className="hover:text-blue-400 transition duration-200">
                    {post.title}  
                  </span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default PostWidget;
