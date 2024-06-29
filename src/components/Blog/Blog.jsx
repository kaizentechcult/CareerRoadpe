// import { useParams } from "react-router-dom";
// // import bla from "data"
// // import Header1 from "../../components/BlogComponents/Header1";
// // import SideNavigation from "../../components/SideNavigation/SideNavigation";
// // import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";
// // import RelatedBlog from "../../components/RelatedBlog/RelatedBlog";
// import { Link } from "react-router-dom";
// // import adviceCategories from "../../Data/category";
// // import RelatedBlog from "../../../BlogComponents/BlogComponents/"
// import Header1 from "../BlogComponents/Header1"
// // import adviceCategories from "../Data"

// const Blog = () => {
//   let params = useParams();
//   const id = params.id;
//   const data = blogs.find((blog) => blog.link === id);
//   const tag = adviceCategories.find((cat) => cat.tag === data.filterTag);
//   document.title = data.title;
//   return (
//     <div className="flex justify-center ">
//       {/* <ScrollProgress /> */}
//       <div className="w-[90%] md:w-4/5 flex flex-col justify-start  pt-10">
//         <div className="pt-24 flex justify-start items-center gap-2 text-sm text-[#5e6c84]">
//           <Link to={"/career-central"}>Home</Link>
//           <i className="fa-solid fa-chevron-right"></i>
//           <Link to={`/career-central/category/${tag.filterTag}`}>
//             {data.tagName}
//           </Link>
//           <i className="fa-solid fa-chevron-right"></i>
//           <Link to={`/career-central/${data.link}`}>{data.title}</Link>
//         </div>
//         <div
//           id="blog-content"
//           className="blog-content flex justify-between pb-8 h-full gap-20 "
//         >
//           <div className="flex flex-col w-full pt-8 ">
//             <h1 className="font-semibold text-2xl md:text-4xl">{data.title}</h1>
//             {/* <SideNavigation className={"md:hidden flex flex-col gap-2"} /> */}
//             <p className="text-[#707070]" key={data.id}></p>
//             <img
//               src={data.img}
//               alt="blogimage"
//               className="w-full lg:h-[30rem] object-cover rounded-xl my-8"
//             />
//             {data.content}
//           </div>
//           <div className="hidden md:flex hello w-2/3  justify-center h-full">
//             <div className="">
//               {/* <SideNavigation className="top-32 right-0 p-4 md:pl-32 sticky " /> */}
//             </div>
//           </div>
//         </div>
//         <Header1>Related Article</Header1>
//         <div
//           key={data.id}
//           className="flex flex-col w-full justify-center items-center gap-6"
//         >
//           <div className="flex-col lg:flex-row flex w-full rounded-3xl items-center justify-evenly py-6">
//             {blogs
//               .filter((blog) => blog.link !== id)
//               .map((blogEntry) =>
//                 blogEntry.tag === data.tag ? (
//                   // <BlogCard key={blogEntry.id} blog={blogEntry} />
//                   <RelatedBlog key={blogEntry.id} blog={blogEntry} />
//                 ) : (
//                   <></>
//                 )
//               )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React from 'react'
import blogs from "../Data/blog"

const Blog = () => {
  console.log(blogs)
  return (
    <div>
      {blogs.map((blog)=>(
        <h1>{blog.title}</h1>
      ))}
    </div>
  )
}

export default Blog
