import React from 'react'

export default function Planet() {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ];

    return (
        <div>
            {/* ternary operator */}
            {/* {planets.map(
                (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
            )} */}

            {planets.map((planet,key)=>{
                if(planet.isGasPlanet) return <p>{planet.name}</p>
            })}
        </div>
    )
}
