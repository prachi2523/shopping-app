import { PRODUCT_DATA } from "./productData"

export const CATEGORY_DATA = [
    {
        id: 1,
        name: 'Newspaper',
        path: 'newspaper',
        icon: 'newspaper-o'
    },
    {
        id: 2,
        name: 'Magazine',
        icon: 'book',
        path: 'magazine'
    },
    {
        id: 3,
        name: 'Podcast',
        icon: 'podcast',
        path: 'podcast'
    },
    {
        id: 4,
        name: 'Games',
        icon: 'gamepad',
        path: 'games'
    },
    {
        id: 5,
        name: 'Accessories',
        icon: 'windows',
        path: 'accessories'
    },
    {
        id: 6,
        name: 'Head Phone',
        icon: 'headphones',
        path: 'headphones'
    },
    {
        id: 7,
        name: 'Head Phone',
        icon: 'headphones',
        path: 'headphones'
    },
]

const PriceOptions = [
    {
        name: "Rs. 600 and below"
    },
    {
        name: "Rs. 601 to 1000"
    },
    {
        name: "Rs. 1001 to 1500"
    },
    {
        name: "Rs. 1501 to 2000"
    },
    {
        name: "Rs. 2000 and above"
    }
]

const discountOption = [
    {
        name: "50%"
    },
    {
        name: "40%"
    },
    {
        name: "30%"
    },
    {
        name: "20%"
    }
]

const ratingOption = [
    {
        name: "3 and above"
    },
    {
        name: "4 and above"
    },
    {
        name: "5 and above"
    },
]

export const filterOptions = [
    {
        name: "Categories",
        options: CATEGORY_DATA
    },
    {
        name: "Product on sale",
        options: [{
            name: "test"
        }]
    },
    {
        name: "Price",
        options: PriceOptions
    },
    {
        name: "Free Delivery",
        options: PRODUCT_DATA
    },
    {
        name: "Customer Rating",
        options: ratingOption
    },
    {
        name: "Offers",
    },
    {
        name: "Discount",
        options: discountOption
    }
]