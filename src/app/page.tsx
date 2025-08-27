'use client'

import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { liDoGian } from "./interfaces/lidogian";

export default function Home() {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(40)
  const [isNotClickOke, setClickOke] = useState(true)

  return (
    <>
    {isNotClickOke? (
      <div className="font-sans flex flex-col justify-start items-center pt-20 max-h-[100vh] overflow-hidden p-2">
        <p>
          Bé nguỵt sẽ khong dận anh nũa mò đùng khommmmm?❤️
        </p>      
        <Image 
          src="/capoo-cat.webp" 
          alt="Capoo cat" 
          width={300} 
          height={300} 
          priority
        />
        <div className="flex gap-3 flex-wrap justify-center items-center">
          <Button
            color="success"
            variant="contained"
            sx={{
              textTransform: 'none',
              height: `${height}px`,
              width: `${width}px`
            }}
            onClick={() => {
              setClickOke(false);
              liDoGian.create('Đúng rùiii');
            }}
          >
            Đúng rùiii
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{
              textTransform: 'none',
              height: '40px'
            }}
            onClick={() => {
              setWidth(prev => prev + 40);
              setHeight(prev => prev + 20);
              liDoGian.create('Mơ điii');
            }}
          >
            Mơ điii
          </Button>
        </div>
      </div>
    ):(
      <div className="flex flex-col justify-start items-center py-20 p-2">
        <p>
          Anh bíc ngay mòoooooo❤️❤️
        </p>
        <p>
          Iuuuu bé nguỵt quá chàiiii❤️❤️❤️
        </p>
        <Image 
          src="/cat-bugcat.webp" 
          alt="Capoo cat" 
          width={300} 
          height={300} 
          priority
        />
        <Image 
          src="/capoo-blush.webp" 
          alt="Capoo cat" 
          width={300} 
          height={300} 
          priority
        />
        <Image 
          src="/bugcat-cat.webp" 
          alt="Capoo cat" 
          width={300} 
          height={300} 
          priority
        />
      </div>
    )}
    </>
  );
}
