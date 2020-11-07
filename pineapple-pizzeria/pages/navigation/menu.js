import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Menu.module.css";
import '@fortawesome/fontawesome-free/js/all.js';

export default function menu() {
    return <div>
        <Head>
            <title>Pineapple Pizzeria Menu</title>
            <link rel="icon" href="/pinClipart.png"/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Mulish&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"/>
        </Head>

        <header className={styles.header}>
            <div className="row">

                <div className="col-sm-8 col-md-7">
                </div>

                <div className="col-sm-4 col-md-5 mt-2 d-flex justify-content-center">
                    <a href="mailto:gwen.ellegeest@outlook.com" className="">
                        <i className="far fa-envelope"/>
                    </a>

                    <a href="https://www.facebook.com/gwen.makaveli/" className=" ml-4">
                        <i className="fab fa-facebook-f"/>
                    </a>

                </div>

            </div>
        </header>

        <main>
            <section>

                <div className={styles.mainSection}>
                    <div className="row">

                        <div className=" col-sm-8 col-md-7">
                        </div>

                        <div className="col-sm-4 col-md-5 pt-3">
                            <div className={styles.navigation}>
                                <Link href="/"><a className="ml-4 text-light"> Home </a></Link>
                                <Link href="/navigation/about"><a className="ml-4 text-light">About </a></Link>
                                {/*<Link href="/navigation/menu"><a className="ml-4 text-light"> Menu </a></Link>*/}
                                <Link href="/navigation/contact"><a
                                    className="ml-4 text-light"> Contact </a></Link>
                            </div>
                        </div>

                    </div>
                    <div className={styles.aboutSection}>
                        <div className="row">

                            <div className="col-sm-2 col-md-3">
                            </div>

                            <div className="col-sm-8 col-md-6 bg-light border-light">
                                <div className="container-fluid">


                                    <div className={styles.aboutImg}>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-2 col-md-3">
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-2 col-md-3">
                            </div>

                            <div className="col-sm-8 col-md-6 bg-light border-light">
                                <div className="container-fluid">
                                    <h1 className={styles.menuTitle}> Menu </h1>
                                    <div className="container">
                                        <p className={styles.aboutTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Proin velit ex,
                                            ullamcorper vehicula purus non, egestas molestie lacus. Etiam porttitor metus
                                            elit, non pellentesque tortor malesuada sit amet. Suspendisse laoreet massa in
                                            massa consectetur pellentesque. Vivamus sollicitudin varius tincidunt. Integer
                                            at lorem vehicula, imperdiet felis nec, blandit eros. Quisque tincidunt mi
                                            auctor arcu interdum, non vehicula metus cursus. Duis dapibus turpis at velit
                                            varius, vitae cursus ex blandit.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-2 col-md-3">
                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </main>


    </div>
}