import React, { useState } from 'react'

export default function Pokemon({ name, type, urlImg, abilities }) {



    return (
        <div style={{

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'

        }}>
            <h1>
                {name}
            </h1>

            <h2>
                {type}
            </h2>
            <img src={urlImg} />

            <br />
            <table>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                    </tr>
                    {
                        abilities.map((x, i) =>
                            (
                                <tr key={i}>

                                    <td>
                                        {i+1}
                                    </td>
                                    <td>
                                        {x.ability.name}
                                    </td>
                                </tr>
                            )
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}
