import FaqParentAndQuestionAnswers from "@/Components/Faq/FaqParentAndQuestionAnswers";
import FaqTitle from "@/Components/Faq/FaqTitle";
import { axiosCall } from "@/lib/useSWRAxios";
import { getFAQList } from "@/services/faq.service";
import { useEffect, useState } from "react";
import { findWhere, first } from "underscore";
export const getServerSideProps = async (ctx) => {
    const { data, success } = await axiosCall(getFAQList())
    if (!success) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            data
        }
    }
}

const Faq = ({ data }) => {
    const [selectedTabId, setSelectedTabId] = useState()
    const [questions, setQuestions] = useState([])
    const [parentCategories, setParentCategories] = useState([])

    useEffect(() => {
        setSelectedTabId(first(data).id)
    }, [])

    useEffect(() => {
        let allQuestions = findWhere(data, { id: selectedTabId })?.questions
        setQuestions(allQuestions)
        let allCategories = findWhere(data, { id: selectedTabId })?.parent_categories
        setParentCategories(allCategories)
    }, [selectedTabId])

    return (
        <div>
            <FaqTitle />
            <div className="section-faq-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills nav-faq mb-3 row" id="pills-tab" role="tablist">
                                {data?.map((tab, idx) => {
                                    return (
                                        <li key={idx} className={`nav-item col-lg-4 `} role="presentation" onClick={() => setSelectedTabId(tab.id)}>
                                            <a className={`nav-link text-uppercase ${selectedTabId == tab.id && 'active'}`} id={`pills-${tab.id}-tab`} data-toggle="pill"
                                                href={`#pills-${tab.id}`} role="tab" aria-controls={`pills-${tab.id}`} aria-selected="true"
                                            >
                                                {tab.category_name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="tab-content tab-content-faq" id="pills-tabContent">
                                <div id={`faq-${selectedTabId}-accordion`} className="faq-accordion">
                                    <FaqParentAndQuestionAnswers selectedTabId={selectedTabId} parentCategories={parentCategories} questions={questions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
