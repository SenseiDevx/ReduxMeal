import React from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styles from './header.module.css'
import {useFavorites} from "../../hooks/useFavorites";

const Header = () => {

    const { favorites } = useFavorites()

    return (
        <div>
            <header className={styles.header}>
                <BookmarkIcon />
                <span>{favorites.length}</span>
            </header>
        </div>
    );
};

export default Header;