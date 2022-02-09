import PropTypes from 'prop-types';
import Header from './Header';  

export default function Page({ props, children, cool }) {
  return (
    <div>
      <Header />
      <h2>Hello from Page.js</h2>
      {/* {props.children} */}
      {children}
      {cool}
    </div>
  );
}

Page.prototype = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
