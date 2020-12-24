import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
export default function Info({showLink}) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="hilary's story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Hand cut designs made with love and natural elements by yours truly, in the beautiful Napa Valley. *coming soon* hideandwild.com
            </p>
            {showLink && (
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
