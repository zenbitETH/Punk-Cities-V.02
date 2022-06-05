import Layout from "../components/Layout";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
require("dotenv").config();

const IPFS = require("ipfs-mini");
const ipfs = new IPFS({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

//list to update
const convertPlaceType = placeInput => {
  if (placeInput === "⛲ Parque Público") {
    return 0;
  } else if (placeInput === "🛹 Skate Park") {
    return 1;
  } else if (placeInput === "⚽ Cancha de Fut") {
    return 2;
  } else if (placeInput === "🏀 Cancha de Basket") {
    return 3;
  } else if (placeInput === "😄 Juegos infantiles") {
    return 4;
  } else if (placeInput === "🏋️‍♀️ Gym al aire libre") {
    return 5;
  } else if (placeInput === "🎭 Galeria de Arte / Museo") {
    return 6;
  } else if (placeInput === "🏟️ Estadio") {
    return 7;
  } else if (placeInput === "🏖️ Playa") {
    return 8;
  } else if (placeInput === "♻️ Punto de Reciclaje") {
    return 9;
  } else if (placeInput === "🚏 Parada de autobus") {
    return 10;
  } else if (placeInput === "📚 Biblioteca") {
    return 11;
  } else if (placeInput === "🎓 Universidad") {
    return 12;
  } else if (placeInput === "⛪ Iglesia o Templo") {
    return 13;
  } else if (placeInput === "🗳️ Oficina de gobierno") {
    return 14;
  } else if (placeInput === "🌳 Árbol") {
    return 15;
  } else {
    return 0;
  }
};

const formatPlaceType = placeInput => {
  if (placeInput === "⛲ Parque Público") {
    return "Parque Público";
  } else if (placeInput === "🛹 Skate Park") {
    return "Bus Stop";
  } else if (placeInput === "⚽ Cancha de Fut") {
    return "City Hall";
  } else if (placeInput === "🏀 Cancha de Basket") {
    return "Cityzen Theater";
  } else if (placeInput === "😄 Juegos infantiles") {
    return "Community center";
  } else if (placeInput === "🏋️‍♀️ Gym al aire libre") {
    return "Fireman Station";
  } else if (placeInput === "🎭 Galeria de Arte / Museo") {
    return "Hospital";
  } else if (placeInput === "🏟️ Estadio") {
    return "Kid´s playground";
  } else if (placeInput === "🏖️ Playa") {
    return "Landmark";
  } else if (placeInput === "♻️ Punto de Reciclaje") {
    return "Open-air gym";
  } else if (placeInput === "🚏 Parada de autobus") {
    return "Police Station";
  } else if (placeInput === "📚 Biblioteca") {
    return "Public Park";
  } else if (placeInput === "🎓 Universidad") {
    return "Soccer court";
  } else if (placeInput === "⛪ Iglesia o Templo") {
    return "Stadium";
  } else if (placeInput === "🗳️ Oficina de gobierno") {
    return "Temple";
  } else if (placeInput === "🌳 Árbol") {
    return "Árbol";
  } else {
    return "NA";
  }
};

const returnImagePerPlace = placeInput => {
  if (placeInput === "⛲ Parque Público") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png";
  } else if (placeInput === "🛹 Skate Park") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/1-Skate-Park.png";
  } else if (placeInput === "⚽ Cancha de Fut") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/2-Soccer-Court.png";
  } else if (placeInput === "🏀 Cancha de Basket") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/3-Basketball-Court.png";
  } else if (placeInput === "😄 Juegos infantiles") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/4-Kids-Playground.png";
  } else if (placeInput === "🏋️‍♀️ Gym al aire libre") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/5-Open-air-Gym.png";
  } else if (placeInput === "🎭 Galeria de Arte / Museo") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/6-Art-Gallery.png";
  } else if (placeInput === "🏟️ Estadio") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/7-Stadium.png";
  } else if (placeInput === "🏖️ Playa") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/8-Bech.png";
  } else if (placeInput === "♻️ Punto de Reciclaje") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/9-Recycling-center.png";
  } else if (placeInput === "🚏 Parada de autobus") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/10-Bus-Stop.png";
  } else if (placeInput === "📚 Biblioteca") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/11-Library.png";
  } else if (placeInput === "🎓 Universidad") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/12-University.png";
  } else if (placeInput === "⛪ Iglesia o Templo") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/13-Temple.png";
  } else if (placeInput === "🗳️ Oficina de gobierno") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/14-Goverment%20office.png";
  } else if (placeInput === "🌳 Árbol") {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/15-Tree.png";
  } else {
    return "https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/0-Public-Park.png";
  }
};

const convertQuestType = questInput => {
  if (questInput === "1 Solarpunk (+1⚡)") {
    return 0;
  } else {
    return 1;
  }
};

const formatQuestType = questInput => {
  if (questInput === "1 Solarpunk (+1⚡)") {
    return "Solarpunk";
  } else {
    return "Cyberpunk";
  }
};

export default function NewPlace({ tx, writeContracts, readContracts }) {
  const [name, setName] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [address, setAddress] = useState("");
  const [tag, setTag] = useState("");
  const [questType, setQuestType] = useState("");
  const [buffer, setBuffer] = useState(null);
  const [image, setImage] = useState(null);
  const [Image3D, setImage3D] = useState(null);

  const handleNameChange = e => setName(e.target.value);
  const handlePlaceTypeChange = e => {
    setPlaceType(e.target.value);
    const image3D = returnImagePerPlace(e.target.value);
    setImage3D(image3D);
    
    //Is this the correct way to set the 3d asset url? //
    const image3DWithourUrl = image3D.replace("https://bafybeids5w4e7ybnw5mfpvvsevhllutfkjkbfhhfjft6ff36qwh3ldbj5q.ipfs.nftstorage.link/", "ipfs://");
    setImage(image3DWithourUrl);
  };
  const handleAddressChange = e => setAddress(e.target.value);
  const handleTagChange = e => setTag(e.target.value);
  const handleQuestTypeChange = e => setQuestType(e.target.value);

  const registerPlace = async () => {
    const placeId = (await tx(readContracts.YourContract.placeId())).toString();

    const metadata = {
      version: "1.0.0",
      tokenID: placeId,
      metadata_id: uuidv4(),
      content: "Content",
      name: name,
      description: "This is a place description",
      image: image,
      imageMimeType: "image/png",
      image3D: Image3D,
      address: address,
      tag: tag,
      attributes: [
        {
          trait_type: "place_type",
          value: formatPlaceType(placeType),
        },
        {
          trait_type: "quest_type",
          value: formatQuestType(questType),
        },
      ],
      appId: "punkcities",
    };

    const metadataString = JSON.stringify(metadata);
    const cid = await ipfs.add(metadataString);
    const url = `ipfs://${cid}`;

    let placeInput = convertPlaceType(placeType);
    let questInput = convertQuestType(questType);

    tx(writeContracts.YourContract.registerPlace(placeInput, questInput, url));
  };
    
  return (
    <Layout class="text-center content-center">
      <div class="NewPlace">
        <div class="NewIcon">⛲</div>
        <div class="text-white text-4xl">Nuevo lugar</div>
          <div class="inputs">
            <label class="text-white" for="TypeOfPlace">¿Qué tipo de lugar quieres registrar?</label>
            <select id="TypeOfPlace" type="text" placeholder="Park" onChange={handlePlaceTypeChange} >
              <option disabled selected>El lugar que quiero regisrtrar es...</option>
              <option>⛲ Parque Público</option>
              <option>🛹 Skate Park</option>
              <option>⚽ Cancha de Fut</option>
              <option>🏀 Cancha de Basket</option>
              <option>😄 Juegos infantiles</option>
              <option>🏋️‍♀️ Gym al aire libre</option>
              <option>🎭 Galeria de Arte / Museo</option>
              <option>🏟️ Estadio</option>
              <option>🏖️ Playa</option>
              <option>♻️ Punto de Reciclaje</option>
              <option>🚏 Parada de autobus</option>
              <option>📚 Biblioteca</option>
              <option>🎓 Universidad</option>
              <option>⛪ Iglesia o Templo</option>
              <option>🗳️ Oficina de gobierno</option>
              <option>🌳 Árbol</option>
            </select>
            <label class="text-white">¿Cúal es el nombre del lugar?</label>
            <input type="text" placeholder="Conocemos este lugar como..." onChange={handleNameChange}/>
            <label class="text-white">¿Cual es la dirección del lugar?</label>
            <input type="text" placeholder="Pega la dirección de goolge maps"  onChange={handleAddressChange}/>
            <label class="text-white">Elige etiqutas de las actividades en este lugar</label>
            <input type="text" placeholder="Ciclismo, Clases de arte, Familia" onChange={handleTagChange}/>
            <label class="text-white"> ¿Qué recompensa prefieres?</label>
            <select id="TypeOfPlace" type="text" placeholder="Park"  onChange={handleQuestTypeChange}>
              <option disabled selected>
              ⚡ Energia Solarpunk o 💽 Chips Cyberpunk
              </option>
              <option>¡Quiero energia! (+1⚡)</option>
              <option>¡Quiero chips! (+1💽)</option>
            </select>
          </div>
          <div class="CreateAcc hover:bg-solar-100" type="submit" onClick={registerPlace}>
            Registrar lugar
          </div>
      </div>
    </Layout>
  )
}

