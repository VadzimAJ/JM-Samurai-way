import React from 'react';

type SwitcherPropsType = {
  switcher: boolean;
}

function SwitcherBlock(props: SwitcherPropsType) {
  console.log("Switcher rendering");

  return (
    <div>
      <SwitcherButton title="On" color="#00ff5f" switcher={props.switcher} />
      <SwitcherButton title="Off" color="#ff4f00" switcher={!props.switcher} />
      <SwitcherIndicator switcher={props.switcher} />
    </div>
  )
}

type SwitcherButtonPropsType = {
  title: string;
  color: string;
  switcher: boolean;
}

function SwitcherButton(props: SwitcherButtonPropsType) {
  const buttonColor = props.switcher ? props.color : "transparent";

  return (
    <div style={{ backgroundColor: buttonColor }}>
      <h1>{props.title}</h1>
    </div>
  )
}

type SwitcherIndicatorPropsType = {
  switcher: boolean;
  
}

function SwitcherIndicator(props: SwitcherIndicatorPropsType) {
  const indicatorColor = props.switcher ? "#00ff5f" : "#ff4f00";

  return (
    <div style={{ backgroundColor: indicatorColor, height: "20px" }}>
    </div>
  )
}

export default SwitcherBlock;