import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';


describe('<App />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders test cards', () => {
    const testTitle = 'To-Do'
    const testCards =
      [
        {
          id: 3463,
          title: 'cliff',
          task: 'do something'
        },
        {
          id: 5749,
          title: 'willie',
          task: 'do something else'
        }
      ]
      const div = document.createElement('div');
      ReactDOM.render(<App userHeader={testTitle} userCards={testCards}/>, div);
      ReactDOM.unmountComponentAtNode(div);
  })

  it('matches snapshot', () => {
    // Render the component, as JSON
    const tree = renderer.create(<App />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot();
  });
});
