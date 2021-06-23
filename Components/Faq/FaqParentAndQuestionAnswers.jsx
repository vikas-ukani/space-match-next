import FaqQuestionAnswers from "./FaqQuestionAnswers";

const FaqParentAndQuestionAnswers = ({ selectedTabId, parentCategories, questions }) => {
    return (
        <div className="tab-pane fade show active" id={`pills-${selectedTabId}`} role="tabpanel" aria-labelledby={`pills-${selectedTabId}-tab`}>
            <div class="section-title mt-3 mb-4">
                {(parentCategories && parentCategories.length)
                    ?
                    parentCategories.map((categories, idx) => {
                        return (
                            <div key={idx}>
                                <h3 class="title-xs font-weight-bold my-4">
                                    {categories.category_name}
                                </h3>
                                <FaqQuestionAnswers selectedTabId={selectedTabId} questions={categories.questions} />
                            </div>
                        )
                    })
                    :
                    <FaqQuestionAnswers selectedTabId={selectedTabId} questions={questions} /> 

                }

            </div>
        </div>
    );
}

export default FaqParentAndQuestionAnswers;