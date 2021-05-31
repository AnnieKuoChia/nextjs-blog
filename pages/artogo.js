import Header from './layout/header'
import Hot from './component/hot'
import Footer from './layout/footer'

export default function Home() {
    return(
        <div className="content">
            <Header />
            <Hot />
            <Footer />
        </div>
    );
}
