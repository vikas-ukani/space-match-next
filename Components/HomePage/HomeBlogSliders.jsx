import { useEffect, useState } from "react"
import { getData } from "../../lib/callAPI/call"
import BlogCardCarousel from '../Common/Sliders/BlogCardCarousel'
const HomeBlogSliders = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(async () => {
        let response = await getData('/blogs?rec=4')
        setBlogs(response.data)
    }, [])
    return (
        <div >

            <div className="section-blogs section-blog-home bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="title-sm text-center text-white">Blog</h4>
                            </div>
                            <p className="blog-sub-title text-center">Information and ideas to help you turn your idea into reality.</p>
                        </div>
                        {/* <BlogCardCarousel blogs={blogs}  /> */}

                        {blogs?.map(blog => {
                            return (
                                <div key={blog.id} className="col-lg-6 col-md-6" >
                                    <div className="card-blog">
                                        <div className="row no-gutters">
                                            <div className="col-lg-6 overflow-hidden">
                                                <div className="card-blog-image overlay" style={{ backgroundImage: "url(" + blog.blog_image_path + ")" }}></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="card-blog-content  equalHeight1">
                                                    <div className="section-title">
                                                        <h4 className="title-xs">
                                                            <a className="text-dark" href={'/blog/' + blog.slug}>
                                                                {blog.title}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <p className="text-grey mt-4 mb-2">
                                                        {blog.brief}
                                                    </p>
                                                    <a className="text-grey text-uppercase mt-auto" href={'/blog/' + blog.brief}>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <a href="{{url( '/blogs')}}" className="text-see-more">more from our blog <span>→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBlogSliders;