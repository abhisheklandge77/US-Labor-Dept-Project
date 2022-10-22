import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should match snapshot for app component', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should filter out search results", () => {
    const component = render(<App />);
    const searchTextInput = component.container.querySelector('input');
    expect(searchTextInput.value).toBe("");

    fireEvent.change(searchTextInput, { target: { value: 'Data' } });
    expect(searchTextInput.value).toBe("Data");

    const accordian = component.container.querySelector('.accordian-title p');
    expect(accordian.textContent.includes("Data")).toBe(true);
  });

  it("should display side panel content on clicking navbar components", () => {
    const component = render(<App />);
    const dataValidationTab = component.container.getElementsByClassName("nav-tab")[0];
    expect(dataValidationTab.textContent).toBe("Data Validation");
    fireEvent.click(dataValidationTab);
    const accordian = component.container.querySelector('.accordian-title p');
    expect(accordian.textContent).toBe("Data Validation");

    const uirTab = component.container.getElementsByClassName("nav-tab")[1];
    expect(uirTab.textContent).toBe("UIR");
    fireEvent.click(uirTab);
    const uir = component.container.querySelector('.accordian-title ');
    expect(uir.textContent).toBe("Data Entry");
  });

  it("should render main panel on right side by clicking on menu in side panel", () => {
    const component = render(<App />);

    const accordianTitle = component.container.querySelector('.accordian-title');
    expect(accordianTitle.textContent).toBe("Data Validation");
    fireEvent.click(accordianTitle);

    const accordianDetailsMenu = component.container.querySelector('.menu');
    expect(accordianDetailsMenu.textContent).toBe("Validation Software");
    fireEvent.click(accordianDetailsMenu);

    const validationSoftwareTitle = component.container.querySelector('.data-validation-sub-title');
    expect(validationSoftwareTitle.textContent).toBe("Data Validation Software");
  });
});
