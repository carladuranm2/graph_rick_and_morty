import React from 'react'
import {WrapperCharacterInfoItem} from "./styled";

export default function CharacterInfoItem({label, value, marginTop, borderBottom}) {
    return (
        <WrapperCharacterInfoItem marginTop={marginTop} borderBottom={borderBottom}>
            <h4>{label}:</h4>
            <span>{value || 'Without result'}</span>
        </WrapperCharacterInfoItem>
    )
}