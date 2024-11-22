'use client'

import React, { useRef } from 'react';


function MergeImages({ images, nombre }) {
  const canvasRef = useRef(null);

  const mergeNDownload = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imgElements = await Promise.all(
      images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = (err) => reject(err);
          img.src = src;
        });
      })
    );

    canvas.width = 1000;
    canvas.height = Math.max(...imgElements.map((img) => img.height));

    let xOffset = 0;
    imgElements.forEach((img) => {
      ctx.drawImage(img, xOffset, 0);
    });

    const mergedImageURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = mergedImageURL;
    link.download = `${nombre}.png`;
    link.click();
  };

  return (
    <div >
      <canvas ref={canvasRef} className='hidden'></canvas>
      <button onClick={mergeNDownload} className="bg-blue-900 text-white text-center px-10 py-4 mb-4 rounded-xl">Descargar Personaje</button>
    </div>
  );
}

export default MergeImages;
