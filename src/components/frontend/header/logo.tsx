import React from "react";
import { Link } from "react-router-dom";
export default function Logo({logoUrl}) {
  return (
    <div className="brand">
      <Link
        to={logoUrl}
        className="text-xl uppercase text-primary ubuntu-bold-italic"
      >
        pfservicios
      </Link>
    </div>
  );
}
