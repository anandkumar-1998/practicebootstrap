import Link from "next/link";
import React from "react";
import { FaHome, FaTable } from "react-icons/fa";
export default function Sidebar({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-auto bg-dark sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top">
            <a href=""></a>
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto text-center align-items-center">
              <li className="nav-items ">
                <Link href="/" className="nav-link py-3 px-2">
                  <FaHome size={20} />
                </Link>
              </li>
              <li className="nav-items">
                <Link href="/dashboard" className="nav-link py-3 px-2">
                  <FaTable size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm p-3 min-vh-100">{children}</div>
      </div>
    </div>
  );
}
