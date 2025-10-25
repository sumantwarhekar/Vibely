import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import { SignInButton, SignOutButton } from "@/components/buttons";

export default function NavMenu(){
    return(
        <nav className={styles.nav}>
            <Link  href={'/'}>
                <Image
                    src="/vibely.svg"
                    width={64}
                    height={64}
                    alt="Vibely Logo"
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <SignInButton/>
                    <SignOutButton/>
                </li>
            </ul>
        </nav>
    );
}