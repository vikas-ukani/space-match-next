import Link from "next/link";
import { getData } from "../../lib/callAPI/call";

const AllMalls = ({ malls }) => {
    return (
        <div>
            <div className="section-sm-banner overlay" style={{ backgroundImage: "url('/images/blog-banner.jpg')" }} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center text-white">
                            <div className="section-title">
                                <h1 className="title-xlg">Shopping Centre Showcase</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 my-lg-5">
                <div className="container container-1420">
                    {!malls && (
                        < div className="section-title text-center" >
                            <h4 className="title-xs">No malls found.</h4>
                        </div>
                    )}
                    {malls && malls.length && (
                        <div className="row justify-content-lg-start justify-content-center" id="malls-appends">
                            {malls.map(mall => {
                                return (
                                    <div key={mall.id} className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
                                        <div className="card-city card-mall">
                                            <Link href={"/mall/" + mall.slug} >
                                                <a >
                                                    {/* @php
                                                        $fname = basename($mall->listing_image_path);
                                                        $path = substr($mall->listing_image_path, 0, strrpos($mall->listing_image_path, $fname));
                                                        $imgPath = $path."small_".$fname;
                                                        @endphp */}
                                                    <div className="card-city-image">
                                                        <img src={mall.banner_image_path} className="img-fluid" alt={mall.name} />
                                                    </div>

                                                    <div className="card-city-content">
                                                        <div className="section-title">
                                                            <h4 className="title-md">
                                                                {mall.name}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                    }


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <Link href={"/all-malls"} >
                                    <a href="" id="showMoreMalls" className="text-see-more">More Shopping Centre Showcase <span>→</span></a>
                                </Link>
                                <input type="hidden" id="cur_page" value="1" />
                                <input type="hidden" id="last_page" value="{{ $malls->meta->last_page }}" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
        // </div >
    );
}

export const getStaticProps = async () => {
    const response = await getData('/space-malls');
    const malls = response.data;

    return {
        props: {
            malls
        }
    }
}

export default AllMalls;