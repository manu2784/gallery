import React from "react";
import { shallow, configure } from "enzyme";
import SingleImage from "./SingleImage";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("ImageGrid", () => {

  it("should render the image grid page", () => {
      
    const props = {match:{ params: { id: 'foo' } }}
    const image = shallow(<SingleImage {...props}/>);
    expect(image).toMatchSnapshot();
  });

});


