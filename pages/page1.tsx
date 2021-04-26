import React, { ReactElement } from "react";

function Heading(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.globalStyle}</h2>
      {/* local css */}
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
      {/* global css */}
      <style  jsx global>
        {`
          h2 {
            color: blue;
          }
        `}
      </style>
    </div>
  );
}

export default function Page1() {
  return (
    <div>
      <Heading title="Se do nay" globalStyle="mau xanh nay " />
      <h1> the h1 </h1>
      <h2> the nay se sanh </h2>
    </div>
  );
}
