import React, {useEffect} from "react";
import "../../App.css";
import "../ProjectHero.css";
import { Link } from "react-router-dom";

function ProjectPage(props) {
  var path = props.location.pathname;
  path.toString();

  // useEffect(() => {
  //   path.slice(1, 3)
    
  // }, [])
 
  const brands = {
    pl: {
      path: "/pluraledge",
      title: "Pluraledge",
      images: [
        "/images/pluraledge/1.jpg",
        "/images/pluraledge/2.jpg",
        "/images/pluraledge/3.jpg",
        "/images/pluraledge/4.jpg",
        "/images/pluraledge/5.jpg",
        "/images/pluraledge/6.jpg",
      ],
      front: "/images/pluraledge/1.jpg",
    },
    la: {
      path: "/laglamorer",
      title: "La Glamorer",
      images: ["/images/laglamorer/1.jpg"],
      front: "/images/laglamorer/front.png",
    },
    fr: {
      path: "/franchise",
      title: "Franchise Business Solutions",
      images: [
        "/images/franchise/1.jpg",
        "/images/franchise/2.jpg",
        "/images/franchise/3.jpg",
      ],
      front: "/images/franchise/front.png",
    },
    el: {
      path: "/ellie",
      title: "Ellie",
      images: ["/images/ellie/1.png"],
      front: "/images/ellie/front.png",
    },

    ai: {
      path: "/airbuild",
      title: "Airbuild",
      images: [
        "/images/airbuild/1.jpg",
        "/images/airbuild/2.jpg",
        "/images/airbuild/3.jpg",
        "/images/airbuild/4.jpg",
        "/images/airbuild/5.jpg",
        "/images/airbuild/6.jpg",
        "/images/airbuild/7.jpg",
      ],
      front: "/images/airbuild/front.jpg",
    },
  };

  return (
    <>
      {/* <div
        className="project-hero-container "
        style={{
          backgroundImage: `url(${
            brands[props.location.brandProps.shortcode].front
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content-above-hero"></div>
      </div> */}

      {brands[
        props.location.brandProps
          ? props.location.brandProps.shortcode
          : path.slice(1, 3)
      ].images.map((value, index) => {
        return (
          <img
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "auto",
              width: "100%",
            }}
            src={`${value}`}
          />
        );
      })}
    </>
  );
}

export default ProjectPage;
