import { useModalContext } from "../../components/context/ContentContext"



const ModalData = ({movie}) => {

    const {setMovie} = useModalContext();

    setMovie(movie);
}

export default ModalData