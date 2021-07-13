import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { Chip } from '@material-ui/core';
import searchService from '../../components/searchBar/searchService';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
  },
}));

const countTotalPages = (count) => {
  let actualCount = 0;
  if (count > 1000) {
    actualCount = (1000 / 10);
  }
  if (count < 1000) {
    actualCount = Math.ceil(count / 10);
  }
  return actualCount;
};

export default function PaginationOutlined({ count, query }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(searchService({ query: query.trim(), page: value }));
  };
  const styles = {
    chipStyle: {
      marginTop: 12,
    },
  };
  return (
    <div className={classes.root}>
      <Typography>
      {countTotalPages(count) ? <Chip label={`Page ${page} of ${countTotalPages(count)} pages`} style={styles.chipStyle} /> : null}
      </Typography>
      <div>
      {countTotalPages(count)
        ? <Pagination count={countTotalPages(count)} page={page} onChange={handleChange} /> : null}
      </div>
    </div>
  );
}
