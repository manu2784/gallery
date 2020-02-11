import React from "react";
import { shallow, configure } from "enzyme";
import ImageGrid from "./ImageGrid";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("ImageGrid", () => {


  it("should render the image grid page", () => {

    const grid = shallow(<ImageGrid />);
    expect(grid).toMatchSnapshot();
  });

});


