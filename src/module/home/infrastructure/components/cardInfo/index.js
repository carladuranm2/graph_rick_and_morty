import React from 'react'
import {WrapperCardInfo} from "./styled";

export default function CardInfo({children, top, borderBottom}) {
    return (
        <WrapperCardInfo borderBottom={borderBottom} top={top}>
            {children}
        </WrapperCardInfo>
    )
}