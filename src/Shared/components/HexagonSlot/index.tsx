import styles from "./index.module.scss";



type Props = {
    imageURL?:string
};

export function HexagonSlot({ imageURL }:Props){
    return <div className={styles.hexagon}>
        <div className={styles.hexagonShadow}>
            <div className={styles.blurBlack}></div>
        </div>
        <div className={styles.borderHexagon}>
            <div className={styles.hexagonImage} 
            style={{backgroundImage: `url(${imageURL})`}}></div>
            <div className={styles.dark}></div>
        </div>
    </div>
}