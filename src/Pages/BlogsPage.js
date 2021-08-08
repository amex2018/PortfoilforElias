import React, { useEffect } from 'react';
import Tittle from '../Components/Tittle';
import allBlogs from '../Components/allBlogs';
import AOS from 'aos';
import 'aos/dist/aos.css'

function BlogsPage() {
     useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div>
            <div className="b-title">
                <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage" data-aos="fade-up">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;
