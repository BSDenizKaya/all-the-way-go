import { Navbar, Slider, PostCard, PostWidget, Categories, Footer} from '../components';
import { getPosts } from "../services";
import Head from "next/head";

const MyApp = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All The Way Go</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Navbar />
      <Slider />
      {posts.map(post => <PostCard post={post.node} key={post.title}/>)}
      <PostWidget />
      <Categories />
      <Footer />
    </>
  );
}

export default MyApp;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}