import { render, fireEvent, getByTestId, queryByTitle, findByText } from '@testing-library/react';
import App from './App';

test('snapshot test for app', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("should filter out search results",()=>{
  const component = render(<App/>);
  const searchText = component.container.querySelector('input');
  fireEvent.change(searchText, { target: { value:'' } });
  expect (searchText.value).toBe("");

  const result=(searchText);
  fireEvent.change(searchText, { target: { value:'Data' } });
  expect(result.value).toBe("Data");
});

it("should display side pannel content on clicking navbar components",async()=>{
  const component= render(<App/>);
  const data_tab=component.container.getElementsByClassName("nav-tab")[0];
  expect (data_tab.textContent).toBe("Data Validation");
  await fireEvent.click(data_tab);
  const accordian=component.container.querySelector('.accordian-title p');
  expect(accordian.textContent).toBe("Data Validation");
  //expect(accordian).toBe("");

   const uir_tab=component.container.getElementsByClassName("nav-tab")[1];
   expect (uir_tab.textContent).toBe("UIR");
   await fireEvent.click(uir_tab);
    const uir=component.container.querySelector('.accordian-title ');
    expect(uir.textContent).toBe("Data Entry");
});

it("should reender right side pannel by clicking on childeren labeled data",async()=>{
  const component= render(<App/>);
  const data_tab=component.container.getElementsByClassName("nav-tab")[0];
  expect (data_tab.textContent).toBe("Data Validation");
  
  await fireEvent.click(data_tab);
  const accordian=component.container.querySelector('.accordian-title p');
  expect(accordian.textContent).toBe("Data Validation");

  await fireEvent.click(accordian);
  expect(component).toBe("");
  // const validation=component.findAllByLabelText("Validation Software");
  // expect(validation.textContent).toBe("validation Software");
 });
