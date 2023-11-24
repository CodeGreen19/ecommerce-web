import React, { Fragment } from "react";
import Options from "../Options";

function Dashboard() {
  return (
    <Fragment>
      <div className="hidden md:block">
        <Options />
      </div>
      <div>
        dashboard _ Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Porro illum eos veritatis quod unde iusto odio eum praesentium eligendi
        provident dolore, sit ipsum dignissimos temporibus! Temporibus natus
        placeat consequatur tenetur?
      </div>
    </Fragment>
  );
}

export default Dashboard;
