import { PropsComponente } from "./PropsComponente"

export const SegundoComponente = () => {
  return (
    <>
        <h1>Soy el segundo Componente</h1>
        <PropsComponente
            titulo='React'
            subtitulo='Aprendiendo React'
            numero={18}
        />
    </>
  )
}
