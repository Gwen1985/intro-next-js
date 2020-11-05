import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Menu.module.css";

export default function menu() {
    return <div>
        <Head>
            <title>Pineapple Pizzeria Menu</title>
            <link rel="icon" href="/pinClipart.png"/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Mulish&display=swap"
                  rel="stylesheet"/>
        </Head>

        <header className={styles.header}>
            <div className="row">

                <div className="col-sm-8 col-md-7">
                </div>

                <div className="col-sm-4 col-md-5 mt-2 d-flex justify-content-center">
                    <a href="mailto:gwen.ellegeest@outlook.com" className="text-light">
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/gwen.makaveli/" className="text-light ml-2">
                        <svg width="18" height="18" viewBox="0 0 16 16"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            <path
                                d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
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
                                <Link href="/navigation/menu"><a className="ml-4 text-light"> Menu </a></Link>
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