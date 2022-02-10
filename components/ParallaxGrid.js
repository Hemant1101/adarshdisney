import React, { useEffect, useRef, useState } from "react";
import ParallaxStyle from "./Parallax.module.css";
import Parallax from "parallax-js";
import $ from "jquery";

function ParallaxGrid() {
  const scene = useRef();
  useEffect(() => {
    var parallax = new Parallax(scene.current);
  }, []);
  return (
    <>
      <section
        id="scene"
        ref={(node) => (scene.current = node)}
        className="scene"
        data-pointer-events="true"
        data-x-origin="0.5"
        data-y-origin="0.5"
        data-scalar-y="150.0"
        data-scalar-x="100.0"
        data-friction-x="0.05"
        data-friction-y="0.05"
      >
        <div className="layer main" data-depth="1.0">
          <div className="layerMainWrapper">
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
            <div className="col">
              <a className="a" href="#">
                <div className="hover">
                  <div className="pad align_bottom">
                    <h2 className="h2">Project Title</h2>
                  </div>
                </div>
                <div
                  className={ParallaxStyle.bg_img}
                  style={{
                    backgroundImage:
                      "url(http://www.caseycallis.com/codepen/img1.jpg);",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ParallaxGrid;
