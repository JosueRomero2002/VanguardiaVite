import { Panel } from "rsuite";

const MYCARD = (props) => (
  <Panel
    shaded
    bordered
    bodyFill
    style={{ display: "inline-block", width: 240 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header={props.name}>
      <p>
        <small>{props.description}</small>
      </p>
    </Panel>
  </Panel>
);

export default MYCARD;
