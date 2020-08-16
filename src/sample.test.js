
import { Test } from "./Test";

it("renders correctly", () => {
  const wrapper = shallow(
    <Test mono='mono' otraVaina='otraVaina'/>
  );

  expect(wrapper).toMatchSnapshot();
});


it("formats temp correctly", () => {
  // mount our Temperature component
  const wrapper = mount(
    <Test mono='mono' otraVaina='otraVaina' />
  );

  // extract the text from the LargeText styled component
  const text = (wrapper.find("div.test-field")).text();
  console.log(text)
  // ensure it matches what is expected
  expect(text).toEqual("otraVainadf");
});

it("calls toggle on click", () => {
  // create a spy function
  const spy = sinon.spy();
  // pass spy function as our toggleForecast prop
  const wrapper = mount(
    <Test mono='mono' otraVaina='otraVaina' toggle={spy}/>
  );

  // find the first div and simulate a click event on it
  wrapper
    .find("div.clickable")
    .first()
    .simulate("click");

  // ensure that our spy (toggleForecast) was called when click was simulated
  expect(spy.calledOnce).toBe(true);
});