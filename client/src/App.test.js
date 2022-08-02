import { render, screen } from '@testing-library/react';
import App from './App';
// import CreateRecipe, {validate} from "../../client/src/components/CreateRecipe/CreateRecipe.jsx"
// import { shallow, mount } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




// describe('Pruebas en <Header />', () => {
//   test('<Header /> se renderiza bien', () => {
//       const titulo = 'name';
//       const jsxHeader = shallow(<CreateRecipe name={titulo}/>);
//       expect(jsxHeader).toMatchSnapshot();
//   })

// });

// describe('<CreateRecipe />', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<CreateRecipe />);
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   it('El form deberia cambiar de estado cuando escriban en el input de username', () => {
//     wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'NewUsr'}});
//     const ele = wrapper.find('input[name="name"]');
//     expect(ele.prop('value')).toEqual('NewUsr');
//   });
// })
