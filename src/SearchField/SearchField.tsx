import React from 'react';

import { Paper, InputBase, IconButton, Divider, } from '@material-ui/core';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Directions as DirectionsIcon
} from '@material-ui/icons';

import useStyles from './useStyles'

interface SearchFieldProps {
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>
}

const SearchField: React.FC<SearchFieldProps> = ({ onChange, onKeyPress, ...rest }) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={ classes.root }>
            {/* <IconButton className={ classes.iconButton } aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <InputBase
                { ...rest }
                onChange={ onChange }
                onKeyPress={ onKeyPress }
                className={ classes.input }
                placeholder="검색어를 입력하세요"
                inputProps={ { 'aria-label': 'search google maps' } }
            />
            <IconButton type="submit" className={ classes.iconButton } aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <Divider className={ classes.divider } orientation="vertical" />
            <IconButton color="primary" className={ classes.iconButton } aria-label="directions">
                <DirectionsIcon />
            </IconButton> */}
        </Paper>
    );
}

export default SearchField