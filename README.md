A minimalist responsive grid component for React.

See [usage and examples](https://juliensanmartin.github.io/minimalist-react-grid/).

## Todos (WIP)
#### Tests
#### Improve Docs

## Props

The component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `spacing`         | _number_   | Value one of : [0, 8, 16, 24, 40], by default 0. Define the spacing between children inside the grid |

The children components takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `size`            | _number_   | Value between 1 and 12, by default 1. Define the space taken by the children component inside the grid |

## Installation

```bash
npm install minimalist-react-grid
```

## Usage

### Import the component

```javascript
import Grid from 'minimalist-react-grid'
```

### Wrap the component around what you need in order to create a responsive layout

The grid works like a 12 cells row table and will dispatch the children into the grid depending on what space/size they need.

```javascript
// Define a Grid with 3 children with a 8px spacing between each of the children.
<Grid spacing={8}>
  // Uses half the width of the grid. 6 cells left on this line
  <FirstComponent size={6}>children 1</FirstComponent> 

  // Uses 8 cells. Because the previous line only has 6 cells left this component will
  // be displayed in the next line and takes 8 cells. It remains 4 cells on the second line. 
  <SecondComponent size ={8}>children 2</SecondComponent>
  
  // Uses 2 cells. Because the second line still have 4 cells, it's enough to displays the third component
  // on the second line. it remains still 2 cells on this line
  <ThirdComponent size={2}>children 3</ThirdComponent>
</Grid>
```

### Nested Grid

As the grid takes any component as children, you could pass another grid to it to start building more complex responsiv layout

```javascript
// Define a Grid with 2 children with a 8px spacing between each of the children.
<Grid spacing={8}>
  // Define a Grid with 2 children with a 16px spacing between each of the children.
  // Uses 8 cells on the first line. It remains 4 cells on this line.
  <Grid spacing={16} size={8}>
    // Uses half the width of the grid. 6 cells left on this line
    <FirstComponent size={6}>children 1</FirstComponent> 

    // Uses 8 cells. Because the previous line only has 6 cells left this component will
    // be displayed in the next line and takes 8 cells. It remains 4 cells on the second line. 
    <SecondComponent size ={8}>children 2</SecondComponent>
  </Grid>  
  
  // Uses 2 cells. Because the first children (Grid) uses 8 cells, there is still 4 cells available which is enough to displays the // third component on the second line. it remains still 2 cells on this line.
  <ThirdComponent size={2}>children 3</ThirdComponent>
</Grid>
```

## Development

```javascript
npm install
npm run dev
```

## Build

```javascript
npm run build
```

## License

MIT
