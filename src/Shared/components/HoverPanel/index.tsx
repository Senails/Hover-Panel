import { HexagonSlot } from "../HexagonSlot";
import styles from "./index.module.scss";



export function HoverPanel(){
    let imageList = [
        "./HoverPanel/hoverPanel1.jpg",
        "./HoverPanel/hoverPanel2.jpg",
        "./HoverPanel/hoverPanel3.jpg",
        "./HoverPanel/hoverPanel4.jpg",
        "./HoverPanel/hoverPanel5.jpg",
        "./HoverPanel/hoverPanel6.jpg",
        "./HoverPanel/hoverPanel7.jpg",
        "./HoverPanel/hoverPanel8.jpg",
        "./HoverPanel/hoverPanel9.jpg",
        "./HoverPanel/hoverPanel10.jpg",
        "./HoverPanel/hoverPanel11.jpg",
        "./HoverPanel/hoverPanel12.jpg",
        "./HoverPanel/hoverPanel8.jpg",
        "./HoverPanel/hoverPanel9.jpg",
        "./HoverPanel/hoverPanel4.jpg",
        "./HoverPanel/hoverPanel5.jpg",
        "./HoverPanel/hoverPanel6.jpg",
        "./HoverPanel/hoverPanel7.jpg",
        "./HoverPanel/hoverPanel10.jpg",
        "./HoverPanel/hoverPanel11.jpg",
        "./HoverPanel/hoverPanel12.jpg",
        "./HoverPanel/hoverPanel1.jpg",
        "./HoverPanel/hoverPanel2.jpg",
        "./HoverPanel/hoverPanel3.jpg",
    ]

    let lists = [];

    let cointer = 0;
    for(let i=0;i<13;i++){
        let slots = []
        for(let j=0;j<13;j++){
            cointer=cointer>(imageList.length-1)?cointer%imageList.length:cointer;
            slots.push(<HexagonSlot key={j} imageURL={imageList[cointer]}/>)
            cointer+=i;
        }
        lists.push(<div className={styles.hexagonList} key={i}>{slots}</div>)
    }

    return <div className={styles.hoverPanel}>
        <div className={styles.hexagonsConteiner}>
            {lists}
        </div>

        {/* shadow on border */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* shadow on border */}
    </div>
}

// 