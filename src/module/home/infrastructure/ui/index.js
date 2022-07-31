import React from 'react'
import Navbar from "../../../../shared/components/navbar";
import Content from "../components/content";
import {DetailCharacter} from "../components/content/styled";
import CardInfo from "../components/cardInfo";
import CharacterInfoItem from "../components/characterInfoItem";
import MyButton from "../components/Button";
import {WrapperButtonGenerate} from "../components/Button/styled";

export default function Home() {

    return (
        <div>
            <Navbar />

            <Content>
                <DetailCharacter>
                    <div>
                        <img style={{width: '100%'}} alt="bu" src="https://rickandmortyapi.com/api/character/avatar/339.jpeg"/>
                    </div>
                    <div>
                        <CardInfo borderBottom>
                            <h4>Summer Smith</h4>
                            <span>CHARACTER ID: 339</span>
                        </CardInfo>
                        <CardInfo top>
                            <CharacterInfoItem label='Status' marginTop borderBottom />
                            <CharacterInfoItem label='Species' marginTop borderBottom />
                            <CharacterInfoItem label='Type' marginTop borderBottom />
                            <CharacterInfoItem label='Gender' marginTop borderBottom />
                            <CharacterInfoItem label='Origin' marginTop borderBottom />
                            <CharacterInfoItem label='Location' marginTop borderBottom />
                            <CharacterInfoItem label='Created at' marginTop />
                        </CardInfo>
                    </div>
                </DetailCharacter>
                <WrapperButtonGenerate>
                    <MyButton mode='gradient'>Generate</MyButton>
                </WrapperButtonGenerate>
            </Content>
        </div>
    )
}