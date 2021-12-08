import React from "react";

const IntroPanel = () => {
    return(
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center text-primary">Welcome to the Generic Magic Forum</h5>
                <p className="card-text">{"The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is, is now the position that it wasn't, and it follows that the position that it was, is now the position that it isn't. In the event that the position that it is in is not the position that it wasn't, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn't. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was."}</p>
            </div>
        </div>
    </>
    );
}
export default IntroPanel;