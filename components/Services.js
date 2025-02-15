import styles from './Services.module.css'

export default function Services() {
    return (
        <div className={styles.services}>
            <ul>
                <li> <code>Software Design </code></li>
                <li><code>Architecture</code></li>
                <li><code>Modernization</code></li>
                <li><code>Research</code></li>
                <li><code>Strategy</code></li>
               <li><code>Consulting</code></li>  
            </ul>
        </div>
    )
}