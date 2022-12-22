import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import me from '../public/assets/me.jpeg';


function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#40dbfc]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-300'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt earum eius, est
                        fugiat modi perspiciatis praesentium! Accusantium eligendi eos eveniet ipsum laborum placeat,
                        recusandae ullam voluptate. Aperiam deleniti eaque non, nulla omnis provident recusandae
                        reiciendis totam voluptatem voluptatibus. A est laborum nam, natus nemo neque placeat provident
                        reiciendis. Ab aliquam animi autem cupiditate deleniti eaque earum eius error esse fugiat fugit
                        labore laudantium libero magnam, molestiae, nemo odio omnis quaerat recusandae reiciendis rem
                        rerum saepe sit sunt velit vero voluptates? Architecto assumenda at debitis eaque eos eum fuga
                        labore maxime nesciunt officia, placeat, rem repellendus reprehenderit sint tempora voluptate!
                    </p>
                    <p className='py-2 text-gray-300'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magnam, molestiae? A aliquid
                        aspernatur assumenda at, deserunt dolore dolores, eum excepturi, facere facilis fuga fugiat
                        fugit illo incidunt itaque iure magni obcaecati quod tempore voluptatibus. Ab ad amet autem
                        deleniti dicta dolor, dolorem dolores earum error excepturi illum minima modi reprehenderit
                        similique voluptate. Architecto at beatae blanditiis doloremque facilis hic itaque maiores
                        mollitia nobis perferendis, placeat reiciendis repellendus reprehenderit sit soluta suscipit
                        totam. Nisi, quae.
                    </p>
                    <Link href='/#projects' legacyBehavior>
                        <p className='py-2 text-gray-300 underline cursor-pointer'>
                            Check out some of my latest projects.
                            <span><svg className="w-5 h-5 ml-2 inline" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg"><path
                                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path
                                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></span>
                        </p>
                    </Link>
                </div>
                <div
                    className='md:w-full md:h-auto w-[300px] m-auto  rounded-xl flex items-center justify-center p-4 '>
                    <Image src={me} className='rounded-xl' alt='/'/>
                </div>
            </div>

        </div>
    );
};

export default About;