"use client";

import { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import "./scrollTimeLine.css";

const ScrollTimeline = (props) => {
  const { classes = "" } = props;

  const timelineRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [scrollBtnTop, setScrollBtnTop] = useState(0);

  useEffect(() => {
    const timeline = timelineRef.current;
    const scrollBtn = scrollBtnRef.current;
    const scrollTrack = scrollTrackRef.current;

    // Setup kéo thả nút cuộn
    interact(scrollBtn).draggable({
      restrict: {
        restriction: scrollTrack,
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      },
      onmove: (event) => {
        moveScrollBtn(event.dy);
      },
    });

    const moveScrollBtn = (dy) => {
      const maxScroll = scrollTrack.clientHeight - scrollBtn.clientHeight;
      let yPos = parseFloat(scrollBtn.style.top || 0) + dy;
      yPos = Math.max(0, Math.min(yPos, maxScroll));
      setScrollBtnTop(yPos);

      const scrollRatio = yPos / maxScroll;
      timeline.scrollTop =
        scrollRatio * (timeline.scrollHeight - timeline.clientHeight);
    };

    // Xử lý sự kiện cuộn trong timeline
    const handleScroll = () => {
      const maxScrollTop = timeline.scrollHeight - timeline.clientHeight;
      const scrollRatio = timeline.scrollTop / maxScrollTop;
      const maxScrollBtn = scrollTrack.clientHeight - scrollBtn.clientHeight;
      const newBtnPos = scrollRatio * maxScrollBtn;
      setScrollBtnTop(newBtnPos);
    };

    // Gắn sự kiện cuộn vào timeline
    timeline.addEventListener("scroll", handleScroll);

    // Xử lý click vào thanh cuộn
    const handleTrackClick = (event) => {
      const rect = scrollTrack.getBoundingClientRect();
      const clickY = event.clientY - rect.top;
      const maxScroll = scrollTrack.clientHeight - scrollBtn.clientHeight;
      const newPos = Math.max(0, Math.min(clickY, maxScroll));
      setScrollBtnTop(newPos);

      const scrollRatio = newPos / maxScroll;
      timeline.scrollTop =
        scrollRatio * (timeline.scrollHeight - timeline.clientHeight);
    };

    scrollTrack.addEventListener("click", handleTrackClick);

    return () => {
      timeline.removeEventListener("scroll", handleScroll);
      scrollTrack.removeEventListener("click", handleTrackClick);
    };
  }, []);

  return (
    <div className="timeline-container min-h-96 relative">
      <div className={`timeline ${classes}`} ref={timelineRef}>
        {props?.children}
      </div>
      {/* <div className="timeline-scroll" ref={scrollTrackRef}>
        <div
          className="scroll-btn"
          style={{ top: `${scrollBtnTop}px` }}
          ref={scrollBtnRef}
        ></div>
      </div> */}
      <div
        className="w-[2px] ml-5 absolute h-full right-0 bg-red-500  before:content-['Hello\_World'] before:text-blue-500 after:content-['Hello\_World'] after:text-blue-500"
        ref={scrollTrackRef}
      >
        {/* <div
          before="hello"
          className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-red-500 "
        ></div> */}

        {/* <div className="w-[2px] h-96 bg-red-500"></div> */}

        <div
          style={{ top: `${scrollBtnTop}px` }}
          ref={scrollBtnRef}
          className="flex scroll-btn justify-center items-center w-8 h-8 rounded-full border-2 border-red-500 text-red-500"
        >
          <span>&#8596;</span>
        </div>

        {/* <div className="w-[2px] h-96 bg-red-500"></div> */}

        {/* <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-red-500"></div> */}
      </div>
    </div>
  );
};

export default ScrollTimeline;
