import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import '@fortawesome/fontawesome-free/js/all.js';

export default function about() {
    return <div>

        <Head>
            <title>Pineapple Pizzeria About Us</title>
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
                                    <h1 className={styles.aboutTitle}> ABOUT US </h1>
                                    <p className={styles.aboutTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Proin velit ex,
                                        ullamcorper vehicula purus non, egestas molestie lacus. Etiam porttitor metus
                                        elit, non pellentesque tortor malesuada sit amet. Suspendisse laoreet massa in
                                        massa consectetur pellentesque. Vivamus sollicitudin varius tincidunt. Integer
                                        at lorem vehicula, imperdiet felis nec, blandit eros. Quisque tincidunt mi
                                        auctor arcu interdum, non vehicula metus cursus. Duis dapibus turpis at velit
                                        varius, vitae cursus ex blandit.</p>

                                    <p className={styles.aboutTxt}>Mauris viverra convallis tortor. Lorem ipsum dolor
                                        sit amet, consectetur
                                        adipiscing elit. Ut fermentum nec risus non porttitor. In pretium massa vel nibh
                                        hendrerit, quis sagittis erat placerat. Duis urna est, rhoncus eget lobortis ac,
                                        scelerisque in urna. Curabitur quam nisi, aliquam eu placerat vitae, viverra nec
                                        libero. Nam finibus viverra lectus, vel elementum ex mattis et. Nulla a nisi
                                        eleifend, scelerisque diam at, vulputate nulla. Morbi vel dapibus nisl, non
                                        feugiat felis. Donec id elementum ex. Fusce ac consectetur tortor. Nullam non
                                        felis dui. Praesent nunc mauris, vestibulum vehicula venenatis volutpat, auctor
                                        nec dui. Sed sed laoreet lectus. Integer sollicitudin laoreet felis ut tempor.
                                        Duis eget volutpat ipsum.</p>

                                    <p className={styles.aboutTxt}>Aliquam malesuada velit nec massa bibendum posuere.
                                        Nam ac iaculis eros. Sed
                                        vitae lacus ut diam bibendum gravida. Ut dictum est augue, a efficitur sapien
                                        ullamcorper nec. Mauris nec elementum purus, sit amet lacinia ipsum. Sed sit
                                        amet eleifend leo. Suspendisse vitae risus condimentum, pulvinar magna vitae,
                                        egestas risus. Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos. </p>

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
                                    <h1 className={styles.customerRevTitle}> Costumers Reviews </h1>
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

                            <div className="col-sm-2 col-md-3">
                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </main>

    </div>
}