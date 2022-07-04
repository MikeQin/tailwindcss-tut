import Link from 'next/link'
import Recipe from './Recipe';
//import Image from 'next/image'

const Main = () => {
  return (
    <main className='px-16 py-8 bg-gray-100 md:col-span-2'>
      <div className='flex justify-center md:justify-end'>
        <Link href="#">
          <a className='btn text-primary border-primary md:border-2 
          hover:bg-primary hover:text-white transition ease-out
          duration-500'>Log in</a>
        </Link>
        <Link href="#">
          <a className='btn text-primary border-primary md:border-2 ml-2 
          hover:bg-primary hover:text-white transition ease-out
          duration-500'>Sign in</a>
        </Link>
      </div>

      <header>
        <h2 className='text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninja</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
        <div className='mt-8 grid lg:grid-cols-3 gap-10'>
          <Recipe
            imgSrc="/img/stew.jpg"
            title="5 Bean Chilli Stew"
            by="Mario"
            mins="25"
          />

          <Recipe
            imgSrc="/img/noodles.jpg"
            title="Veg Noodles"
            by="Luigi"
            mins="20"
          />

          <Recipe
            imgSrc="/img/curry.jpg"
            title="Tofu Curry"
            by="Ninja"
            mins="15"
          />
        </div>

        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
        <div className='flex justify-center mt-4'>
          <div className='btn bg-secondary-100, text-secondary-200 
          hover:shadow-inner hover:text-red-500 transform hover:scale-125 hover:bg-opacity-50
          transition ease-out duration-300'>
            Load more
          </div>
        </div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Grid Layout</h4>
        <div>
          <ul>
            <li>
              <Link href='/grid'>Application Landing Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;