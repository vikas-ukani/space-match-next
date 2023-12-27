import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from './SliderDefaultSettings';

const BlogCardCarousel = ({ blogs, setting = {} }) => {
    const properties = { ...settings, ...setting }
    return (
        <div >
            <Slider {...properties}>
                {blogs.map(blog => {
                    return (
                        <div key={blog.id} className="items-single col-12">
                            <div className="card-blog">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 overflow-hidden">
                                        <div className="card-blog-image overlay" style={{ backgroundImage: "url(" + blog.blog_image_path + ")" }} ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-blog-content">
                                            <div className="section-title">
                                                <h4 className="title-xs">
                                                    <Link href={'/blog/' + blog.slug} className="text-dark">
                                                        {blog.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                            <p className="text-grey mt-4">{blog.brief}</p>
                                            <Link href={'/blog/' + blog.slug} className="text-grey text-uppercase mt-auto">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default BlogCardCarousel;