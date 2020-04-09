import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  //const dish = selectedDish;
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  let comment = null;

  if (comments) {
    comment = comments.map((comment) => {
      return (
        <li key={comment.id}>
          {comment.comment}
          <br></br>
          <br></br>
          --{comment.author} ,
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
          <br></br>
          <br></br>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{comment}</ul>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  const dish = props.selectedDish;
  const comments = dish && dish.comments ? dish.comments : null;

  return (
    <div className="row">
      <RenderDish dish={dish} />
      <RenderComments comments={comments} />
    </div>
  );
};

export default DishDetail;
