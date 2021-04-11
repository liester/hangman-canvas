import React, {useEffect} from 'react'
import './Hangman.css'

const lineWidth = 5;
const lineColor = '#282c34'


export default function Hangman({misses}) {

    useEffect(() => {
        const canvas = document.getElementById("hangman_canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = '#465269'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(200, 150);
        ctx.lineTo(200, 80)
        ctx.lineTo(500, 80)
        ctx.lineTo(500, 550)
        ctx.moveTo(560, 550)
        ctx.lineTo(440, 550)
        ctx.stroke()
        ctx.moveTo(200, 200);
    }, [])

    useEffect(() => {
        const canvas = document.getElementById("hangman_canvas");
        const ctx = canvas.getContext("2d");
        if (misses === 1) {
            ctx.beginPath()
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.arc(200, 200, 40, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if (misses === 2) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(200, 240);
            ctx.lineTo(200, 370)
            ctx.stroke();
        }
        if (misses === 3) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(200, 370);
            ctx.lineTo(230, 460)
            ctx.stroke();
        }
        if (misses === 4) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(200, 370);
            ctx.lineTo(170, 460)
            ctx.stroke();
        }
        if (misses === 5) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(200, 290);
            ctx.lineTo(260, 270)
            ctx.stroke();
        }
        if (misses === 6) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(200, 290);
            ctx.lineTo(140, 270)
            ctx.stroke();
        }

    }, [misses])
    return (
        <canvas id="hangman_canvas" width="600" height="600">
            Your browser does not support the canvas element.
        </canvas>
    )
}
