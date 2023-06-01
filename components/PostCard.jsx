import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="post-cards">
      <div className="post-card shadow-lg">
        <img
          src={post.featuredImage.url} 
          alt={post.title} 
          className="w-full h-60 object-cover shadow-lg rounded-t-lg object-center"
        />
        <h1 className="my-4 cursor-pointer text-xl font-semibold hover:text-blue-400 transition duration-300">
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
      <div className="block lg:flex text-center items-center justify-center mb-6 w-full">
        <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            alt={post.author.name}
            height="30"
            width="30"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-300 ml-2 font-medium text-sm">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle text-sm text-gray-300">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-200 font-normal px-2 lg:px-5 -mt-2">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-300 inline-block text-lg font-medium text-blue-400 px-4 py-3 cursor-pointer hover:text-gray-300">Read More</span>
        </Link>
      </div>
      </div>
    </div>
    
  );
}

export default PostCard;
