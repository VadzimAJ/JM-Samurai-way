import React from 'react';

type AccodeonPropsType = {
  titleValue: string
  collapsed: boolean
}

function Accordeon (props: AccodeonPropsType) {
  console.log("Accordeon rendering")
      return (
        <div>
          <AccordeonTitle title={props.titleValue}/>
          {!props.collapsed && <AccordeonBody/>}
        </div>
      )
  
}

type AccodeonTitlePropsType = {
  title: string
}

function AccordeonTitle (props: AccodeonTitlePropsType) {
  console.log("AccordeonTitle rendering")
  return (
    <h3>---{props.title}---</h3>
  )

}

function AccordeonBody () {
  console.log("AccordeonTitle rendering")
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default Accordeon;