import styles from './styles.module.css'
import classNames from 'classnames';

const Layout = (props) => {
    const {title = 'Привет', descr, urlBg, colorBg} = props;

    const layoutStyle = {
        backgroundImage: urlBg ? `url(${urlBg})` : null,
        backgroundColor: colorBg ? `${colorBg}` : null
    };

    return (
        <section className={styles.root} style={layoutStyle}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    {
                        descr && <div className={classNames(styles.desc, styles.full)}>
                            <p>{descr}</p>
                        </div>
                    }
                </article>
            </div>
        </section>
    )
};

export default Layout;
