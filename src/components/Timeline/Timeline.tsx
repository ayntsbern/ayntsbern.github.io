import './Timeline.scss';

export function Timeline() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-10 mx-auto">

                    <div className="timeline timeline-four">

                        <div className="timeline-item">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="year mt-1">
                                            Company name ltd.
                                            2018-2019
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Business</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"><span className="date"><i className="far fa-lightbulb"></i> <span className="year mt-1">2017-2018</span></span></div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"><span className="date"><i className="far fa-paper-plane"></i> <span className="year mt-1">2015-2016</span></span></div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Marketing</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}