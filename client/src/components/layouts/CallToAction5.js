import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction5 = () => {
    return (
        <div className='py-5'>
            <div
                class="md:my-10 mx-auto px-4  md:flex gap-3 justify-between ">
                <div class=" bg-green-600 p-5 rounded-2xl">
                    <h1 class="text-2xl font-medium pt-2 text-white py-2">
                        Teeth Whitening
                    </h1>
                    <p
                        class="mt-1  text-slate-900 text-lg">
                        Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.
                    </p>
                    <h1 class="text-2xl font-medium pt-2 text-white  py-2 ">
                        Teeth Cleaning
                    </h1>
                    <p
                        class="mt-3  text-slate-900 text-lg">
                        Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries).
                    </p>
                    <h1 class="text-2xl font-medium pt-2 text-white  py-2">
                        Modern Anesthetic
                    </h1>
                    <p
                        class="mt-3  text-slate-900 text-lg">
                        Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.
                    </p>
                </div>


                <div class="relative lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                    <div class="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
                    <img class="h-full w-full rounded-2xl lg:w-full lg:h-full" src="https://dentalsleeppractice.com/wp-content/uploads/2018/03/01.jpg" alt="" />
                </div>

            </div>


        </div>

    )
}

export default CallToAction5
