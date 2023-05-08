import Head from 'next/head';
import image from 'next/image';
import { useState, useRef } from 'react';
import Avatar from '../componentes/avatar';
import Botao from '../componentes/botao';
import { UpoadImagem } from '../componentes/uploadImagem';

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null)

  return (
    <>
      <h1>Olá mundo</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Abrir seletor de arquivos</button>


      <UpoadImagem 
      setImagem={setImagem} 
      imagemPreview={imagem?.preview}
      aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />
      <Avatar />
      <Botao texto={'login'} cor='invertido' manipularClique={() => console.log('Botão clicado')} />
    </>
  )
}