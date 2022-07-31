import React from 'react'
import Navbar from "../../../../shared/components/navbar";
import Content from "../components/content";
import {DetailCharacter} from "../components/content/styled";

export default function Home() {

    return (
        <div>
            <Navbar />

            <Content>
                <DetailCharacter>
                    <div>
                        <img style={{width: '100%'}} alt="bu" src="https://rickandmortyapi.com/api/character/avatar/339.jpeg"/>
                    </div>
                    <div>2</div>
                </DetailCharacter>
                <h1>Content</h1>
            </Content>
        </div>
    )
}