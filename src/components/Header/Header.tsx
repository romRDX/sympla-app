import React, { useState } from 'react';
import styles from "./header.module.scss";
import Link from 'next/link';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface HeaderProps {
    extended?: boolean;
}

const Header = ({ extended }: HeaderProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
        <header className={ extended ? styles['header__container--extended'] : styles.header__container}>
            <p>Fale com o produtor: <span data-testid="producer-name">[{process.env.NEXT_PUBLIC_PRODUCER_NAME}]</span></p>

            <Image
                src="/logo.png"
                alt="Sympla logo"
                width={163}
                height={71}
            />

            <div>
                <Link href="">Acesse sua conta</Link>
                <Link href="">Cadastre-se</Link>
            </div>

            <GiHamburgerMenu onClick={() => setIsMenuOpen(true)} color='#FFF' size={35} />

            <div className={styles.header__container__mobileMenu}>
                <Image
                    src="/logo.png"
                    alt="Sympla logo"
                    width={163}
                    height={71}
                />
                <p>Fale com o produtor: <span>[Nome_do_Produtor]</span></p>
                <Link href="">Acesse sua conta</Link>
                <Link href="">Cadastre-se</Link>
            </div>
        </header>
        <div className={isMenuOpen ? styles['header__container__mobileMenu--opened'] : styles.header__container__mobileMenu}>
            <div>
                <Image
                    src="/logo.png"
                    alt="Sympla logo"
                    width={163}
                    height={71}
                />
                <IoMdCloseCircleOutline onClick={() => setIsMenuOpen(false)} size={45} />
            </div>
            <p>Fale com o produtor: <span>[Nome_do_Produtor]</span></p>
            <Link href="">Acesse sua conta</Link>
            <Link href="">Cadastre-se</Link>
        </div>
        </>
    );
}

export default Header;