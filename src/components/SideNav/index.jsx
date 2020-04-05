import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import {window} from 'browser-monads'
import styles from './sidenav.module.scss'

import calIcon from '../../assets/images/icons/cal.svg'
import timeIcon from '../../assets/images/icons/time.png'
import heartIcon from '../../assets/images/icons/heart.png'
import leaderIcon from '../../assets/images/icons/leader.png'
import favIcon from '../../assets/images/icons/fav.png'
import cogIcon from '../../assets/images/icons/cog.svg'
import logoutIcon from '../../assets/images/icons/logout.png'

import logoImage from '../../assets/images/logo.png'
import textImage from '../../assets/images/logo_text.png'

const items = [
    {
        title: 'Schedule',
        icon: calIcon,
        link: '#',
    },
    {
        title: 'Classroom',
        icon: timeIcon,
        link: '/class',
    },
    {
        title: 'My Stats',
        icon: heartIcon,
        link: '#',
    },
    {
        title: 'Leaderboard',
        icon: leaderIcon,
        link: '#',
    },
    {
        title: 'Favourites',
        icon: favIcon,
        link: '#',
    },
    {
        title: 'Settings',
        icon: cogIcon,
        link: '#',
    },
]

const SideNav = ({avatar}) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpand = (e) => {
        e.stopPropagation()
        setExpanded(true)
    }

    const handleHide = () => {
        setExpanded(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleHide)
    }, [])

    return (
    <div className={expanded ? styles.Expanded : styles.SideNav}>
    {/* <div className={styles.Expanded}> */}
        <div className={styles.Top}>
            <div className={styles.Avatar} onClick={handleExpand}>
                <div className={styles.Line} />
                <div className={styles.Line} />
                <div className={styles.Line} />
            </div>
            <div className={styles.Logo}>
               <Link to='/'><img src={logoImage} alt="WellNest" /><img src={textImage} alt="WellNest" /></Link>
            </div>
            <div className={styles.Nav}>
                {items.map(({title, icon, link}) => (
                    <div key={title} className={styles.Item}>
                        <div className={styles.Icon}>
                            <img src={icon} alt="Navigation Link" />
                        </div>
                        <div className={styles.Text}><Link to={link}>{title}</Link></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)}

export default SideNav