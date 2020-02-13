import React from "react";
import moment from "moment";

export default function Book(props) {
  return (
    <div className="Book">
      <h2>{props.title}</h2>
      <div className="Book_author">by {props.authoer}</div>
      <div className="Book_publisher">
        Published by: {props.publisher} on{" "}
        {moment(props.published_date).format("DD MMM YYYY")}
      </div>
      <div className="Book_description">{props.description}</div>
      <div className="Book_details">Rank {props.rank} this week</div>
    </div>
  );
}
