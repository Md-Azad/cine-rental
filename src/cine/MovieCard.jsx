import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cineUtils";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const {cartData, setCartData} = useContext(MovieContext);

    function handleCloseModal(){
        setShowModal(false)
        setSelectedMovie(null)
    }

    function handleShowModal(movie){
        setShowModal(true)
        setSelectedMovie(movie)
    }
    function handleAddtoCart(movie){

        const found = cartData.find((item) =>{
            return item.id === movie.id;
        })
        if(!found){
            setCartData([...cartData,movie])
        }else{
            return alert(`The movie ${movie.title} exists already`)
        }
        
    }
  return (

    <>
    {
        showModal && <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} onCartAdd={handleAddtoCart} />
    }
    
    <div className="flex flex-col">
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl h-[500px]">
        <a href="#" onClick={()=>handleShowModal(movie)}>
        <img
          className="w-full h-[300px] object-cover"
          src={getImgUrl(movie.cover)}
          alt={movie.title}
        />
        </a>
        <figcaption className="pt-4">
          <h3 className="text-xl h-12 mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} /> 
           
          </div>
          <a
            onClick={()=>handleAddtoCart(movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm "
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </div>
    </>
  );
}
