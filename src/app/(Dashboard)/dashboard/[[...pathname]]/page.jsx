"use client";

import React from "react";

const Dashboard = ({ params }) => {
  const path = params?.pathname ? params?.pathname[0] : "/";

  let content = null;
  switch (path) {
    case "/":
      content = (
        <>
          <h1 className="text-2xl font-semibold">dashboard Page</h1>
          <p>This is the content of dashboard page.</p>
        </>
      );
      break;
    case "markets":
      content = (
        <>
          <h1 className="text-2xl font-semibold">markets Page</h1>
          <p>This is the content of markets page.</p>
        </>
      );
      break;
    case "transactions":
      content = (
        <>
          <h1 className="text-2xl font-semibold">transactions Page</h1>
          <p>This is the content of transactions page.</p>
        </>
      );
      break;
    case "profile":
      content = (
        <>
          <h1 className="text-2xl font-semibold">profile Page</h1>
          <p>This is the content of profile page.</p>
        </>
      );
      break;
    case "setting":
      content = (
        <>
          <h1 className="text-2xl font-semibold">setting Page</h1>
          <p>This is the content of setting page.</p>
        </>
      );
      break;
    case "help":
      content = (
        <>
          <h1 className="text-2xl font-semibold">help Page</h1>
          <p>This is the content of help page.</p>
        </>
      );
      break;
    case "logout":
      content = (
        <>
          <h1 className="text-2xl font-semibold">logout Page</h1>
          <p>This is the content of logout page.</p>
        </>
      );
      break;
    default:
      content = (
        <>
          <h1 className="text-2xl font-semibold">Dashboard Default page</h1>
          <p>(when route is /dashboard/123)</p>
        </>
      );
  }

  return (
    <div className="">
      <div className="">{content}</div>
    </div>
  );
};

export default Dashboard;
