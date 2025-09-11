import { motion } from "motion/react"
const Card = ({ style, text, image }) => {

    return image && !text ? (
        <motion.img className='absolute w-15 cursor-grab' src={image} style={style}></motion.img>
    ) : (
        <div className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab'
            style={style}>
            {text}
        </div>
    )
}

export default Card
