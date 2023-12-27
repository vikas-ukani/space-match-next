import Link from "next/link";
import BlogCardCarousel from "../../Components/Common/Sliders/BlogCardCarousel";
import { getData } from "../../lib/callAPI/call";

const BlogSlug = ({ blog, moreBlogs }) => {
    return (
        <div>
            <div className="section-single-blog">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h1 className="title-lg">{blog.title}</h1>
                            </div>
                            <p className="date">
                                {new Date(blog.created_at).toDateString()}
                            </p>
                            <p>{blog.brief}</p>
                            <div className="text-center single-blog-image">
                                <img src={blog.blog_image_path} className="img-fluid w-100" alt={blog.title} />
                            </div>
                            <div dangerouslySetInnerHTML={{
                                __html: blog.content
                            }} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-blogs section-related-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb-5">
                                <h4 className="title-sm text-center">More blog articles</h4>
                            </div>
                        </div>




                        <div className="col-lg-12">
                            {moreBlogs && (
                                <>
                                    <div className="related-carousel slick-hide-carousel">
                                        {moreBlogs.map(blg => {
                                            return (
                                                <div key={blg.id} className="items-single">
                                                    <div className="card-blog">
                                                        <div className="row no-gutters">
                                                            <div className="col-lg-6 overflow-hidden">
                                                                <pre>{JSON.stringify(blg.blog_image_path, null, 1)}</pre>

                                                                <img src={blg.blog_image_path} className="card-blog-image overlay" alt="" />
                                                                {/* <div className="card-blog-image overlay" style={{ backgroundImage: "url(" + blog.blog_image_path + ")" }}></div> */}
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="card-blog-content equalHeight1">
                                                                    <div className="section-title">
                                                                        <h4 className="title-xs">
                                                                            <Link href={'/blog/' + blg.slug} className="text-dark">
                                                                                {blg.title}
                                                                            </Link>
                                                                        </h4>
                                                                    </div>

                                                                    {/* <p className="text-grey mt-4">{{ $blog-> brief}}</p> */}

                                                                    <a className="text-grey text-uppercase mt-auto" href="{{url( '/blog/'.$blog->slug)}}">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="row flex-nowrap loader-slide overflow-hidden">
                                        <div className="col-sm-6 col-12">
                                            <div className="row no-gutters">
                                                <div className="col-lg-6">
                                                    <div className="ssc ssc-card">
                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-square scc-single-square"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="ssc ssc-card px-lg-4 py-4">
                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-head-line mb-4"></div>
                                                        </div>

                                                        <div className="ssc-wrapper w-70">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <div className="ssc-line w-70"></div>
                                                                <div className="ssc-line w-25"></div>
                                                            </div>
                                                        </div>

                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-line w-70"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12">
                                            <div className="row no-gutters">
                                                <div className="col-lg-6">
                                                    <div className="ssc ssc-card">
                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-square scc-single-square"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="ssc ssc-card px-lg-4 py-4">
                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-head-line mb-4"></div>
                                                        </div>

                                                        <div className="ssc-wrapper w-70">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <div className="ssc-line w-70"></div>
                                                                <div className="ssc-line w-25"></div>
                                                            </div>
                                                        </div>

                                                        <div className="ssc-wrapper">
                                                            <div className="ssc-line w-70"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <Link href="/blogs" className="text-see-more">
                                    See more articles <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths = async () => {
    const result = await getData('/blogs');
    const { data } = result;
    if (!data) {
        return {
            notFound: true
        }
    }
    let paths = [...data.map(blogs => {
        return {
            params: { slug: blogs.slug }
        }
    })]
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const response = await getData('/blogs/' + params.slug)
    const blog = response.data

    const responseMoreBlogs = await getData('/blogs?rec=6')
    const moreBlogs = responseMoreBlogs.data
    return {
        props: {
            blog: (blog ? blog : null),
            moreBlogs: (moreBlogs ? moreBlogs : null),
        }
    }
}

export default BlogSlug;