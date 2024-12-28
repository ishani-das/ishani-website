import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend SWE Intern @ Intuit</h3>
            <h4 className="vertical-timeline-element-subtitle">Mountain View, CA</h4>
            <p>
              Incoming.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack SWE Intern @ Magna Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Implemented the integration of WolframAlpha into into our AP Calc AB quiz question generation flow for teachers, enhancing the functionality and accuracy of math quiz responses by 30%. Created an API to regrade quizzes, worked with HTTP request methods and JSON data in JavaScript on React. Designed and implemented multiple UI enhancements, improving user interaction and overall platform aesthetics.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2021 - Sept 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bioinformatics Research Intern @ Mukherjee Lab</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Wrote custom software to analyze how the regulation of gene expression by RNA-binding proteins may be implicated in
            adrenal pathology with Dr. Neelanjan Mukherjee, Assistant Professor at the University of Colorado.
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;