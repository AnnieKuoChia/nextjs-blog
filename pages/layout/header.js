import Link from 'next/link'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link href="/">
                    <a><img></img></a>
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
    );
}

export default Header;