import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import classnames from 'classnames';

const SPACING = [0, 8, 16, 24, 40];
const GRID_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * GridItem Component
 * Should be used inside a Grid Component
 */
export default class GridItem extends PureComponent {
  static displayName = 'GridItem';

  static propTypes = {
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACING),
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for all the screen sizes with the lowest priority.
     */
    size: PropTypes.oneOf(GRID_SIZES),
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    className: PropTypes.string
  };

  static defaultProps = {
    spacing: 0
  };

  render() {
    const { spacing, size, children, className, id } = this.props;

    const gridItemClass = classnames(className, styles.gridItem);

    const style = {
      padding: `${spacing / 2}px`,
      maxWidth: `${size * 100 / 12}%`,
      flexBasis: `${size * 100 / 12}%`
    };

    return (
      <div
        spacing={spacing}
        size={size > 12 ? 12 : size}
        className={gridItemClass}
        style={style}
      >
        {children}
      </div>
    );
  }
}
