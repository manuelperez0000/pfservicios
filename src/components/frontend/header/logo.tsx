import React from "react";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="brand">
      <Link
        to="/"
        className="text-xl uppercase text-primary ubuntu-bold-italic"
      >
        pfservicios
      </Link>
    </div>
  );
}
