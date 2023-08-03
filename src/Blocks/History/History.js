import {Link} from "react-router-dom";

export const History = (props) => {
  const {} = props;

  return(
    <section className="sHistory section">
      <div className="container">
        <div className="sHistory__box">
          <div className="sHistory__header">
            <h1>History</h1>
          </div>
          <div className="sHistory__table">
            <div className="sHistory__t-head">
              <div className="sHistory__row row">
                <div className="col-4">
                  <div className="sHistory__t-head-txt">Date</div>
                </div>
                <div className="col-4">
                  <div className="sHistory__t-head-txt">Type</div>
                </div>
              </div>
            </div>
            <HistoryItem
              date={"July 6, 2022"}
              type={"Image Generator"}
            />
            <HistoryItem
              date={"July 6, 2022"}
              type={"Image Generator"}
            />
            <HistoryItem
              date={"July 6, 2022"}
              type={"Image Generator"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const HistoryItem = (props) => {
  const {date, type, details} = props;

  return (
    <div className="sHistory__item">
      <div className="sHistory__row row">
        <div className="col-4">
          <div className="sHistory__date">{date}</div>
        </div>
        <div className="col-4">
          <div className="sHistory__type">{type}</div>
        </div>
        <div className="col-4">
          <div className="sHistory__links-row row justify-content-end">
            <div className="col-auto">
              <Link to={details} className="sHistory__details">Detail</Link>
            </div>
            <div className="col-auto">
              <Link to="/" className="sHistory__download">Download</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}