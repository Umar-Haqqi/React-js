import React, { useState } from 'react';
import {Text} from "./Text";

export default function VideoSix() {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <button onClick={() => { setShowText(!showText) }}>Show Text</button>

            {showText && <Text />}
        </>
    )
}
