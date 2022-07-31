import React from 'react'
import {Button} from "./styled";

export default function MyButton({children, mode}) {
    return (
        <Button mode={mode}>
            {children}
        </Button>
    )
}