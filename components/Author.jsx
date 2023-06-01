import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => (
  <div className="author-container text-center grid grid-cols-1 rounded-lg">
    {/* RESPONSIVE AND DYNAMIC */}
    <div className="xl:ml-14 lg:ml-52 md:ml-28 sm:ml-14 xs:ml-14 2xs:ml-10">
      <Image
        unoptimized
        alt={author.name}
        height="100"
        width="100"
        className="rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="py-2 text-xl font-bold">{author.name}</h3>
    <p className="text-md">{author.bio}</p>
  </div>
);

export default Author;