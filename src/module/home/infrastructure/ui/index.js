import React, { useState } from "react";
import Navbar from "../../../../shared/components/navbar";
import Content from "../components/content";
import { DetailCharacter } from "../components/content/styled";
import CardInfo from "../components/cardInfo";
import CharacterInfoItem from "../components/characterInfoItem";
import MyButton from "../components/Button";
import { WrapperButtonGenerate } from "../components/Button/styled";

import { useQuery, useLazyQuery } from "@apollo/client";
import moment from 'moment'
import {getRandomNumber} from "../../../../shared/utils";
import {GET_TOTAL_CHARACTER} from "../../models/getTotalCharacters";
import {GET_CHARACTER} from "../../models/getCharacter";

export default function Home() {
    const [currentCharacter, setCurrenCharacter] = useState({});
    const [historyCharacters, setHistoryCharacters] = useState([]);

    const { data: count } = useQuery(GET_TOTAL_CHARACTER);
    const [geCharacter] = useLazyQuery(GET_CHARACTER);

    async function generateNewCharacter() {
        const randomId = getRandomNumber(count.characters.info.count)
        console.log('llego aki')
        const res = await geCharacter({ variables: { id: randomId } })
        setHistoryCharacters([...historyCharacters, res.data.character])
        setCurrenCharacter(res.data.character)
    }

    function handleSelectCurrentCharacter(character) {
        window.scrollTo(0, 0)
        setCurrenCharacter(character);
    }

    return (
        <div>
            <Navbar />

            <Content>
                {Object.keys(currentCharacter)?.length <= 0 && (
                    <h1>No se ha cargado ningún personaje</h1>
                )}
                {Object.keys(currentCharacter)?.length > 0 && (
                    <DetailCharacter>
                        <div>
                            <img
                                style={{ width: "100%" }}
                                alt="bu"
                                src={currentCharacter?.image}
                            />
                        </div>
                        <div>
                            <CardInfo borderBottom>
                                <h4>{currentCharacter?.name}</h4>
                                <span>CHARACTER ID: {currentCharacter.id}</span>
                            </CardInfo>
                            <CardInfo top>
                                <CharacterInfoItem
                                    label="Status"
                                    value={currentCharacter?.status}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Species"
                                    value={currentCharacter?.species}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Type"
                                    value={currentCharacter?.type}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Gender"
                                    value={currentCharacter?.gender}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Origin"
                                    value={currentCharacter?.origin?.name}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Location"
                                    value={currentCharacter?.location?.name}
                                    marginTop
                                    borderBottom
                                />
                                <CharacterInfoItem
                                    label="Created at"
                                    value={moment(currentCharacter?.created).format("ddd MMMM DD YYYY")}
                                    marginTop
                                />
                            </CardInfo>
                        </div>
                    </DetailCharacter>
                )}
                <WrapperButtonGenerate  marginTop>
                    <MyButton onClick={generateNewCharacter} marginTop mode="gradient">Generate</MyButton>
                </WrapperButtonGenerate>

                {Object.keys(currentCharacter)?.length > 0 && (
                    <div style={{ marginTop: 20 }}>
                        <h2 style={{ textAlign: "center", marginBottom: 20 }}>History</h2>
                        {historyCharacters.length > 0 &&
                            historyCharacters.map((character, index) => (
                                <div
                                    style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
                                    key={`characterHistoryElement--${index}`}
                                >
                                    <img style={{ width: 100, height: 100 }} alt="bu" src={character?.image} />
                                    <CardInfo width>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: ".9rem",
                                            }}
                                        >
                                            <h4>{character.name}</h4>
                                            <WrapperButtonGenerate>
                                                <MyButton onClick={() => handleSelectCurrentCharacter(character)}>View</MyButton>
                                            </WrapperButtonGenerate>
                                        </div>
                                    </CardInfo>
                                </div>
                            ))}
                    </div>
                )}
            </Content>
        </div>
    );
}
