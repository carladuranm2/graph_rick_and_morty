import React from 'react'
import {Button} from "./styled";

export default function MyButton({children, onClick, mode}) {
    return (
        <Button onClick={onClick} mode={mode}>
            {children}
        </Button>
    )
}