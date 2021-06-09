import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
          <div>
              <h4>Warning!</h4>
              Are you sure you want to do this?
          </div>
      </ApprovalCard>

      <ApprovalCard> 
      <CommentDetail
        author="Pencho"
        timeAgo="Today at 1:00PM"
        comment="Hi, there!"
        image={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Ivanka"
        timeAgo="Today at 1:59PM"
        comment="How are you my friends?"
        image={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Shtilian"
        timeAgo="Today at 2:39PM"
        comment="Fine, thanks! And you?"
        image={faker.image.avatar()}
      />
      </ApprovalCard>  
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
