import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Basket from "../components/Basket";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import { getSession } from "next-auth/react";
import Image from "next/image";


import type { Session } from "next-auth";
interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };

  return (
    <div className="">
    
      <Head>
        <title>Валентин</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Basket />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List> 
             
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
               
            
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
               
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <main className="relative h-[200vh] bg-black">
       <section className="sticky top-0 mx-auto flex h-screen items-center justify-center">
 <div >
        <video  autoPlay muted loop layout="fill" 
            objectFit="cover"  >
        <source src="/medium .mp4" />
      </video>
     
          
        </div>
    </section>
      </main>
       
  <div className="hidden md:block" >
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]"> 
      <div className=" md:h-[80vh] hidden md:flex flex-wrap p-5" >
      <div className="hidden md:flex flex-1  flex-col" >
        <div className="relative flex-1 flex-col m-5 cursor-pointer " >
          <Image className="rounded-3xl"
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_medium_2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover" 
            objectPosition="top"
          />
          
        </div>
         
        <div className="relative flex-1 flex m-5 cursor-pointer">
          <Image className="rounded-3xl"
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/main-camera/camera_deep_purple__fviv8fv1dyqa_medium_2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover" 
          />

        </div>
      </div>
   <div style={{
     flex: "1",
    display: "flex",
    flexDirection: "column",
    
    justifyContent: "center",
    alignItems:"center"
   }}>
        <div className="relative flex-1 flex cursor-pointer">
        <video className="rounded-3xl" autoPlay muted loop layout="fill" 
            objectFit="cover"  >
        <source src="/medium_2x.mp4" />
      </video>
     
          
        </div>
      </div>
     <div className="flex-1 md:flex-2 flex flex-col" >
        
        <div className="relative flex-1 flex cursor-pointer">
   <div style={{
     flex: "1",
    display: "flex",
    flexDirection: "column"
    }}>
        <div className="relative flex-1 flex m-5 cursor-pointer">
          <Image className="rounded-3xl" 
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/esos/emergency_sos_endframe__8kkswd4nlsyi_medium_2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover" 
          />
              
            </div>
          </div>
   <div className="flex-1 flex col" >
        <div className="relative flex-1 flex cursor-pointer m-5">
              {" "}
              <Image className="rounded-3xl"
                src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/chip/chip_deep_purple__bs3dtgitlt6q_small_2x.jpg"
                alt=""
                layout="fill"
            objectFit="cover" 
            objectPosition="left"
              />
              
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex cursor-pointer rounded-3xl">
          <Image 
          className="rounded-3xl " 
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/ceramic/ceramic_deep_purple__fhc53fxovp2e_medium_2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover" 
            objectPosition="top"
          />
   
        </div>
      </div>
    </div> 
    
   
    
    
    </section>
    </div>
     
     <div className="block md:hidden" >
      <section className="relative z-40 -mt-[100vh] mx-auto flex items-center justify-center min-h-screen bg-[#1B1B1B]"> 
            <div className="mx-auto max-w-fit pt-20 pb-24 w-11/12 mb-10 ">
            
            
            <div className="relative flex justify-center items-center  w-350 h-[520px] bg-black rounded-3xl">
              
                <h1 className="absolute top-10 block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-2xl text-center" > Интерактивная <p>выемка и датчик FaceID</p></h1>
                <div className="absolute bottom-0"> 

              <Image className="rounded-3xl"
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_medium_2x.jpg"
            alt=""
            width="300"
            height="300"
            objectFit="contain" 
            objectPosition="top"
          />
        </div>
          
        </div>
                    
             
               
                <div className="relative flex justify-center items-center pt-10"> 
             <h1 className="absolute bottom-12 block text-gray-200 text-2xl drop-shadow-lg text-center" > 48MP камера <span>Умопомрачительная детализация</span></h1>
             
              <Image className="mb-10 rounded-3xl"
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/main-camera/camera_deep_purple__fviv8fv1dyqa_medium_2x.jpg"
            alt=""
            width="400"
            height="500"
            objectFit="contain" 
          />
        </div>
          
      
          
     <video className="mb-10 rounded-3xl" autoPlay muted loop width="400"
            height="500"
            objectFit="contain"  >
        <source src="/medium_2x.mp4" />
      </video>
    
          
            <div className="relative flex justify-center items-center pt-10" > 
               <h1 className="absolute top-12 block text-gray-200 text-3xl drop-shadow-lg text-center">SOS <p className="text-2xl">экстренные вызовы через satellite</p></h1>
              <Image className="mb-10 rounded-3xl" 
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/esos/emergency_sos_endframe__8kkswd4nlsyi_medium_2x.jpg"
            alt=""
            width="400"
            height="500"
            objectFit="contain" 
          /> 
                      </div>
          
          
            <div className="relative flex justify-start items-center  w-350 h-[450px] bg-black rounded-3xl mb-10">
              
                <h1 className="absolute ml-5 top-5 block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-3xl text-center" > Вдохновение <p>за всем этим</p></h1>
                <div className="absolute bottom-0"> 
    
                  <Image className=" rounded-3xl"
                src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/chip/chip_deep_purple__bs3dtgitlt6q_small_2x.jpg"
                alt=""
                width="400"
            height="500"
            objectFit="contain" 
            objectPosition="left"
              /> 
                      </div>
        
        </div>
            <div className="relative flex justify-center items-center  w-350 h-[560px] bg-black rounded-3xl">
              
                <h1 className="absolute top-10 block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-2xl text-center" > Керамический щит <p>Крепче любого стекла у смартфона</p></h1>
                <div className="absolute bottom-0">  
                

          <Image 
          className=" rounded-3xl " 
            src="https://www.apple.com/v/iphone-14-pro/f/images/key-features/features/ceramic/ceramic_deep_purple__fhc53fxovp2e_medium_2x.jpg"
            alt=""
            width="400"
            height="500"
            objectFit="contain" 
            objectPosition="top"
          />
            
        </div>
        
        </div>

      

        </div>
    </section>
    </div>
    
   <button
      className="ease group relative z-30 box-border inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-18 py-9 font-bold text-white transition-all duration-300 focus:outline-none"
      
    >
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>

      <span className="relative z-20 flex items-center font-semibold">
      <a style={{textDecoration:"none", color:"white"}} href="https://3dapple.vercel.app/" target="_blank">
            И это ещё не всё. Жми!
         </a>
     
      </span>
    </button>
    
    </div>
  );
};

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};
