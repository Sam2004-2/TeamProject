import React from "react";

export function NavigationBar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <a to="/" className="my-plan">My Plan</a>
          </li>
          <li>
            <a to="/" className="action-plan">Action Plan</a>
          </li>
          <li>
            <a to="/" className="mail-notes">Mail / Notes</a>
          </li>
          <li>
            <a to="/" className="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
