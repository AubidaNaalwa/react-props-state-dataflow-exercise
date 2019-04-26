import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Register from '../../src/components/Register';
import Calendar from '../../src/components/Calendar';

configure({ adapter: new Adapter() });

describe("spotcheck7", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('The App component should render the Calendar component with props', () => {
        const wrapper = mount(<App />);
        let calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.exists(), 'You must create a component called Calendar').toBeTruthy()
        let expectedProps = {
            reservations: [
                { day: "Monday", time: 2000, name: "Earl" },
                { day: "Monday", time: 1845, name: "Ella" },
                { day: "Tuesday", time: 1930, name: "Linda" },
                { day: "Wednesday", time: 2015, name: "Anni" }]
        }
        let actualProps = calendarComponent.first().props()
        expect(actualProps, `The reservations array must be passed as props. Expected ${expectedProps}, instead found ${actualProps}`).toEqual(expectedProps)
    })
    it('The App component should render the Register component with props', () => {
        const wrapper = mount(<App />);
        let registerComponent = wrapper.find(Register);
        expect(registerComponent.exists(), 'You must create a component called Register').toBeTruthy()
        let expectedProps = {
            reservations: [
                { day: "Monday", time: 2000, name: "Earl" },
                { day: "Monday", time: 1845, name: "Ella" },
                { day: "Tuesday", time: 1930, name: "Linda" },
                { day: "Wednesday", time: 2015, name: "Anni" }]
        }
        let actualProps = registerComponent.first().props()
        expect(actualProps, `The reservations array must be passed as props. Expected ${expectedProps}, instead found ${actualProps}`).toEqual(expectedProps)
    })
    it('You must pass props using data fropm your state', () => {
        const wrapper = mount(<App />)
        let registerComponent = wrapper.find(Register);
        expect(registerComponent.first().props().reservations, 'props passed to the Register component did not utilize the state').toEqual(wrapper.state().reservations)
        let calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.first().props().reservations, 'props passed to the Calendar component did not utilize the state').toEqual(wrapper.state().reservations)
    })
    it('You must render a div on the page for each reservation', () => {
        const wrapper = mount(<App />);
        let calendarDiv = wrapper.find('#calendar')
        let registerDiv = wrapper.find('#register')
        expect(calendarDiv.exists(), 'could not find element with an id of calender').toBeTruthy()
        expect(registerDiv.exists(), 'could not find element with an id of register').toBeTruthy()
        expect(calendarDiv.html(), "could not find 'Earl has a reservation on Monday @ 2000' rendered on the page").toContain("Earl has a reservation on Monday @ 2000")
        expect(calendarDiv.html(), "could not find 'Anni has a reservation on Wednesday @ 2015' rendered on the page").toContain('Anni has a reservation on Wednesday @ 2015')
        expect(registerDiv.html(), "could not find 'Monday @ 2000' rendered on the page").toContain("Monday @ 2000")
        expect(registerDiv.html(), "could not find 'Wednesday @ 2015' rendered on the page").toContain('Wednesday @ 2015')
    });
})