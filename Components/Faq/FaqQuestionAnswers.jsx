const FaqQuestionAnswers = ({ selectedTabId, questions }) => {
    return (
        <div className="tab-pane fade show active" id={`pills-${selectedTabId}`} role="tabpanel" aria-labelledby={`pills-${selectedTabId}-tab`}>
            {questions?.map((question, idx) => {
                return (
                    <div key={idx}>
                        <div className="faq-header" id={`faq-${question.id}`} >
                            <div className="section-title">
                                <h4 className="title-xs">
                                    <a className="text-dark d-block" data-toggle="collapse"
                                        data-target={`#faqcollapse${question.id}`}
                                        aria-expanded="{{ $showexp }}" aria-controls={`faqcollapse${question.id}`}>
                                        {question.question}
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <div id={`faqcollapse${question.id}`} className="collapse {{ $showq }}" aria-labelledby={`faq${question.id}`} data-parent={`#faq-${question.id}-accordion`}>
                            <div className="faq-body">
                                {question.answer}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FaqQuestionAnswers;