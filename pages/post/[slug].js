import { useRouter } from "next/router";
import { PostDetail, Categories, PostWidget, Author, Comments, CommentForm, Loader, Footer } from "../../components";
import { getPosts, getPostDetails } from "../../services";


function PostDetails({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container ml-40">
        <div className="post-container">
          <div className="">
            <PostDetail post={post} />
            <Comments slug={post.slug} />
            <CommentForm slug={post.slug} />
          </div>
          <div className="sidebar">
            <div className="">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
            </div>
            <div className="">
              <Categories />
              <Author author={post.author} />
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </>
  );
}

export default PostDetails;


// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}