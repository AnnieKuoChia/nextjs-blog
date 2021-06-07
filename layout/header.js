import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <Image
                                src="/image/logo.png"
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </a>
                    </Link>
                </div>
                <div className="navbar">
                    <Link href="/">
                        <a><img></img></a>
                    </Link>
                    <Link href="/">
                        <a>所有展覽<br />Exhibitions</a>
                    </Link>
                    <Link href="/">
                        <a>我要辦展<br />Service</a>
                    </Link>
                    <Link href="/">
                        <a><img></img></a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;