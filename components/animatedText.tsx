import '../styles/animatedText.module.scss'
export default function AnimatedText() {
    return (
        <section className="section-process">
            <div className="process-steps-container">
                <div className="process-step-container process-step-1">
                    <div className="process-step-title-container">
                        <h1 className="process-step-title">
                            Develop.
                            </h1>
                        <div className="process-step-title-overlay">
                            Develop.
                            </div>
                    </div>
                </div>
                <div className="process-step-container process-step-2">
                    <div className="process-step-title-container">
                        <h1 className="process-step-title">
                            Preview
                            </h1>
                        <div className="process-step-title-overlay">
                            Preview
                            </div>
                    </div>
                </div>
                <div className="process-step-container process-step-3">
                    <div className="process-step-title-container">
                        <h1 className="process-step-title">
                            Ship.
                            </h1>
                        <div className="process-step-title-overlay">
                            Ship.
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}