import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 
import './Main.css';
import { Responsive,WidthProvider } from 'react-grid-layout';
import React, { Component } from 'react';

const ResponsiveGridLayout = WidthProvider(Responsive);

export class Main extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layoutDynamic = [

    ];
    return (
      <ResponsiveGridLayout className="layout" layouts={layoutDynamic}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 1}}>
      <div key="a" data-grid={{x: 0, y: 0, w: 3, h: 1.2, static: true}}> Connection Status (static)</div>
      <div key="b" data-grid={{x: 3, y: 0, w: 5, h: 1.2, static: true}}> Swarm Commands (static)</div>
      <div key="c" data-grid={{x: 8, y: 0, w: 4, h: 1.2, static: true}}> Swarm Status (static)</div>
      <div className ="staticGrid" key="1" data-grid={{x: 0, y: 0, w: 8, h: 3}}> Swarm Environnement Mapping (static)</div>
      <div key="2" data-grid={{x: 8, y: 1.3, w: 4, h: 2, autoSize:true}}>Swarm Console Logs</div>
      <div key="3" data-grid={{x: 8, y: 3.2, w: 4, h: 1}}>Code editor</div>
      <div key="4" data-grid={{x: 0, y: 4, w: 12, h: 4}}>Drone List and Details</div>
    </ResponsiveGridLayout>
    )
  }
}