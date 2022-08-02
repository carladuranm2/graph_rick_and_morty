import React from 'react'
import {WrapperCardInfo} from "./styled";

export default function CardInfo({children, top, width, borderBottom}) {
    return (
        <WrapperCardInfo width={width ? width.toString() : width} borderBottom={borderBottom} top={top}>
            {children}
        </WrapperCardInfo>
    )
}