import Image from "next/image"
import { useEffect, useState } from "react"
import { getData } from "../../lib/callAPI/call"

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(async () => {
        const result = await getData('/blogs');
        const { data } = result;
        if (data) {
            setBlogs(data);
        } else {
            setBlogs([]);
        }
    }, [])

    return (
        <div>
            <div className="section-sm-banner overlay" style={{ backgroundImage: "url(/images/blog-banner.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center text-white">
                            <div className="section-title">
                                <h1 className="title-xlg">Blog</h1>
                            </div>
                            <p className="banner-sm-text">Ideas and inspiration to help you turn your idea into reality</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-blogs">
                <div className="container">
                    {!blogs && (<div className="ml-5">No article found.</div>)}
                    {blogs && (
                        <div>
                            <div className="row" id="blogs-appends">
                                {blogs.map(blog => {
                                    return (
                                        <div key={blog.id} className="col-lg-6 col-md-6">
                                            <div className="card-blog">
                                                <div className="row no-gutters">
                                                    <div className="col-lg-6 overflow-hidden">
                                                        <Image src={blog.blog_image_path} layout="fill" alt="" srcSet="" className="card-blog-image overlay " />
                                                        {/* <div className="card-blog-image overlay" style={{ backgroundImage: "url(" + blog.blog_image_path + ")" }}></div> */}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card-blog-content equalHeight1">
                                                            <div className="section-title">
                                                                <h4 className="title-xs">
                                                                    <a className="text-dark" href={'/blogs/' + blog.slug}>  {blog.title} </a>
                                                                </h4>
                                                            </div>
                                                            <p className="text-grey mt-4">
                                                                {blog.brief}
                                                            </p>
                                                            <a className="text-grey text-uppercase mt-auto" href={"url(" + ('/blogs/' + blog.slug) + ")"}>Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row d-none">
                                <div className="col-lg-12 text-centerce">
                                    <ul className="pagination justify-content-center my-5">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="">
                                        {/* @if($blogs->meta->last_page > 1) */}
                                        <a href="#" id="showMoreBlogs" className="text-see-more">see more articles <span>→</span></a>
                                        {/* @endif */}
                                        <input type="hidden" id="cur_page" value="1" />
                                        <input type="hidden" id="last_page" value="{{ $blogs-q }}" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blogs;