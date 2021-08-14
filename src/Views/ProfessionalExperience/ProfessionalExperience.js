
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {Routing} from '../../Routes/Routes';
import Layout from '../../Layout/Layout';

const Experience = () => {
  return (
    <div id='container'>
      <Layout/>
      <footer>
      <Routing/>
        <div className='content'>
        <RightAlignedTimeline/>
        </div>
      </footer>
    </div>
  );
};

export default Experience;


function RightAlignedTimeline() {
  return (
    <Timeline align="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Maths Intern AT TCF Foundation</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Spark Program, Intern Interns Pakistan</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>ML Engineer, omdena</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>ML Intern, NICHE</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
