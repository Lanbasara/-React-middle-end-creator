import React from "react";
import { shallow } from "enzyme";

// 引入被测试组件
import Login from "../login/index.js";

// case1 测试组件是否正常渲染
// 通过查找存在 input 和 button,测试组件正常渲染
describe("FormView", () => {
  it("Form Component should be render", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("Button").exists()).toBeTruthy();
  });
});