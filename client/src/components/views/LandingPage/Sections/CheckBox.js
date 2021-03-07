import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((item, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(item._id)}
          checked={Checked.indexOf(item._id) === -1 ? false : true}
        />
        <span>{item.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="continents" key="1">
          {renderCheckBoxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
