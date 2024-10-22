"use client";

function Layout(props) {
  return (
    <div
      className={`w-full h-full overflow-x-hidden overflow-y-hidden ${
        props?.className ?? ""
      }`}
    >
      {props?.children}
    </div>
  );
}

export default Layout;
