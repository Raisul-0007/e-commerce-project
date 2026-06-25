import { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"
import { ApiData } from '../components/ContextApi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice'

const ProductDetails = () => {
  const productsId = useParams()
  const { loading } = useContext(ApiData)
  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const [show, setShow] = useState(false)
  const [ship, setShip] = useState(false)
  const [tab, setTab] = useState("description")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productsId.id}`)
      .then((res) => setProduct(res.data))
  }, [productsId.id])

  const clientRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5

    return product?.rating > index + 1 ? (
      <IoIosStar key={index} />
    ) : product?.rating > number ? (
      <IoIosStarHalf key={index} />
    ) : (
      <IoIosStarOutline key={index} />
    )
  })

  const discountPrice =
    product?.price && product?.discountPercentage
      ? (product.price / 100) * product.discountPercentage
      : 0

  const mainPrice = product?.price ? product.price - discountPrice : 0

  const handleCart = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }))
  }

  if (loading) {
    return (
      <h1 className="font-dm text-center text-[40px]">
        Loading........
      </h1>
    )
  }

  return (
    <Container>

      <div>
        <h1 className="text-[34px] font-bold">Products</h1>
        <div className="flex items-center text-[12px] text-[#6D6D60]">
          Home <SlArrowRight className="mx-1" /> Products
        </div>
      </div>

      <div className="py-10">
        <img
          className="w-1/3 mx-auto"
          src={product.thumbnail}
          alt=""
        />
        <h2 className="text-center text-[30px] font-bold">
          {product.title}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex text-[#FFD881]">
          {clientRating}
        </div>
        <p className="text-[#767676] text-[14px]">1 Review</p>
      </div>

      <div className="flex gap-2 py-3">
        <del className="text-[#767676]">${product.price}</del>
        <h4 className="text-[#262626] font-bold">
          ${mainPrice.toFixed(2)}
        </h4>
      </div>

      <div className="flex gap-3 py-4">
        <button
          onClick={() => handleCart(product)}
          className="border px-4 py-2 hover:bg-black cursor-pointer hover:text-white"
        >
          Add to Cart
        </button>
      </div>

      <div className="lg:w-2/5">

        <div
          onClick={() => setShow(!show)}
          className="flex justify-between cursor-pointer py-3 border-b"
        >
          <h3 className="font-bold">FEATURES & DETAILS</h3>
          {show ? <FaMinus /> : <FaPlus />}
        </div>

        {show && (
          <p className="py-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet...
          </p>
        )}

        <div
          onClick={() => setShip(!ship)}
          className="flex justify-between cursor-pointer py-3 border-b"
        >
          <h3 className="font-bold">SHIPPING & RETURNS</h3>
          {ship ? <FaMinus /> : <FaPlus />}
        </div>

        {ship && (
          <p className="py-3 text-sm text-gray-600">
            Shipping details here...
          </p>
        )}
      </div>

      <div className="lg:w-2/5 mt-5">

        <div className="flex border-b">
          <button
            onClick={() => setTab("description")}
            className={`p-3 border-b-2 ${
              tab === "description"
                ? "border-black text-black"
                : "border-transparent"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setTab("review")}
            className={`p-3 border-b-2 ${
              tab === "review"
                ? "border-black text-black"
                : "border-transparent"
            }`}
          >
            Review
          </button>
        </div>

        <div className="py-3">

          {tab === "description" && (
            <p className="bg-gray-100 p-3 text-sm">
              {product.description}
            </p>
          )}

          {tab === "review" && (
            <div>
              {product?.reviews?.length ? (
                product.reviews.map((item, index) => (
                  <div key={index} className="border-b py-2">
                    <div className="flex justify-between">
                      <h4>{item.reviewerName}</h4>
                      <span>{item.rating} ★</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.comment}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No reviews found
                </p>
              )}
            </div>
          )}

        </div>
      </div>

    </Container>
  )
}

export default ProductDetails