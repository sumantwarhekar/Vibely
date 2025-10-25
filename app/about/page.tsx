export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
    title:'About Us',
    description:'Trying to up come with a new social media company'
};

export default async function About(){
    return(
        <main>
            <h1>About Us</h1>
            <p>Trying to up come with a new social media company.</p>
        </main>
    );
}