import { style } from 'typestyle';
const H2: string = style({
  fontSize: 60,
  color: 'aquamarine',
  textDecoration: 'underline',
  fontStyle: 'italic',
  $nest: {
    '&:hover': {
      color: 'navy'
    },
    '&::after': {
      content: `' World!!'`
    },
    '&::selection': {
      color: 'yellow'
    }
  }
});

export default H2;
