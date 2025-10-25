const posts = [
    {
        title: 'The Future of Artificial Intelligence',
        slug: 'future-of-ai',
        content: 'AI is rapidly evolving, from large language models to self-driving cars. This post explores what the next decade might hold.'
    },
    {
        title: 'A Beginner\'s Guide to Investing',
        slug: 'beginner-investing-guide',
        content: 'Investing can be intimidating. We break down the basics, from stocks and bonds to index funds and diversification.'
    },
    {
        title: 'Mastering the Perfect Sourdough Loaf',
        slug: 'perfect-sourdough-loaf',
        content: 'Learn the secrets to a tangy flavor, an open crumb, and that perfect, crispy crust. All you need is flour, water, salt, and patience.'
    },
    {
        title: '10 Must-See Places in Kyoto, Japan',
        slug: 'kyoto-japan-travel',
        content: 'From the golden pavilion of Kinkaku-ji to the bamboo groves of Arashiyama, here is the ultimate travel itinerary for Japan\'s ancient capital.'
    },
    {
        title: 'The Science of Sleep: Why 8 Hours Matters',
        slug: 'science-of-sleep',
        content: 'Discover what happens in your brain during REM sleep and why consistent, quality sleep is crucial for mental and physical health.'
    },
    {
        title: 'How to Build a High-Performance Team',
        slug: 'high-performance-team',
        content: 'Building a great team goes beyond hiring smart people. It\'s about fostering psychological safety, clear goals, and a culture of feedback.'
    },
    {
        title: 'The Pomodoro Technique: A Simple Guide',
        slug: 'pomodoro-technique-guide',
        content: 'Boost your productivity by working in focused 25-minute intervals. We explain the method and why it\'s so effective at battling procrastination.'
    },
    {
        title: 'Understanding the Hidden World of Fungi',
        slug: 'hidden-world-of-fungi',
        content: 'Mycelial networks act as a vast underground communication system for forests. This post delves into the fascinating science of mycology.'
    },
    {
        title: '5 Easy Ways to Declutter Your Digital Life',
        slug: 'digital-declutter-tips',
        content: 'From organizing your email inbox to managing cloud storage and unsubscribing from newsletters, these tips will bring calm to your digital world.'
    },
    {
        title: 'Why High-Intensity Interval Training (HIIT) Works',
        slug: 'why-hiit-works',
        content: 'HIIT workouts are short, intense, and incredibly effective. Learn the science behind excess post-exercise oxygen consumption (EPOC).'
    },
    {
        title: 'The Rise and Fall of the Library of Alexandria',
        slug: 'library-of-alexandria',
        content: 'Once the center of all human knowledge, its destruction remains one of history\'s greatest losses. We explore its origins and eventual demise.'
    },
    {
        title: 'An Introduction to Container Gardening',
        slug: 'container-gardening-intro',
        content: 'No yard? No problem. Learn how to grow vegetables, herbs, and flowers on your balcony or patio using pots and containers.'
    },
    {
        title: 'The Art of Remote Work: Staying Productive',
        slug: 'remote-work-productivity',
        content: 'Working from home requires discipline. We share practical tips for creating a dedicated workspace and maintaining a healthy work-life balance.'
    }
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){

    const session = await getServerSession();

    return NextResponse.json(posts);
}