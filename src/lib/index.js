import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import classnames from 'classnames';
import GridItem from './grid-item';

const SPACING = [0, 8, 16, 24, 40];

/**
 * Grid Component : 12-column grid layout
 * A grid component using https://material-ui-next.com/layout/grid/ as inspiration.
 * Need to be use with GridItem
 *
 * <Grid spacing={16}> // create space of 16px between gridItem
 *	<div size={12}>size=12</div> takes 12 columns of 12 so will take the full width
 *	<div size={6}>size=6</div> // takes 6 columns of 12 so will take the half width and have space for 6 more column
 * </Grid>
 */
export default class Grid extends PureComponent {
  static displayName = 'Grid';

  static propTypes = {
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACING),
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
    const { spacing, children, className } = this.props;

    const gridClass = classnames(className, styles.grid);

    return (
      <div spacing={spacing} className={gridClass}>
        {this._renderChildren()}
      </div>
    );
  }

  _renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return (
        <GridItem size={child.props.size} spacing={this.props.spacing}>
          {child}
        </GridItem>
      );
    });
  };
}

