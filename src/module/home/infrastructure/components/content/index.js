import React from 'react'
import {WrapperContent} from "./styled";

export default function Content({children}) {

    return (
        <WrapperContent>
            {children}
        </WrapperContent>
    )
}