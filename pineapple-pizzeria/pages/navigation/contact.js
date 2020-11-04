import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Contact.module.css";

export default function contact() {
    return <div>

        <Head>
            <title>Pineapple Pizzeria Book a table</title>
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
                                <Link href="/"><a className="text-light"> Home </a></Link>
                                <Link href="/navigation/about"><a className="ml-4 text-light">About </a></Link>
                                <Link href="/navigation/menu"><a className="ml-4 text-light"> Menu </a></Link>
                                <Link href="/navigation/contact"><a
                                    className="ml-4 text-light"> Contact </a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


        <div className=" container-md d-flex justify-content-center">

            <form method="post">
                <div className="pt-2">
                    {/*FIRST NAME*/}
                    <label htmlFor="first-name" className=""></label>
                    <input required type="text" id="first-name" name="first-name" className=""
                           placeholder="First name:"/>
                </div>
                <div className="pt-2">
                    {/*LAST NAME*/}
                    <label htmlFor="last-name" className=""></label>
                    <input required type="text" id="last-name" name="last-name" className="" placeholder="Last name:"/>
                </div>
                <div className="pt-2">
                    {/*E-MAIL*/}
                    <label htmlFor="email" className=""></label>
                    <input required type="email" id="email" name="email" className="" placeholder="E-mail:"/>
                </div>
                <div className="pt-2">
                    {/*MOBILE NR*/}
                    <label htmlFor="mobile-nr" className=""></label>
                    <input required type="text" id="mobile-nr" name="mobile-nr" className=""
                           placeholder="Mobile number:"/>
                </div>
                <div className="pt-2">
                    {/*BOOKING DATE */}
                    <label htmlFor="booking-date" className=""></label>
                    <input required type="date" id="booking-date" name="booking-date" className=""
                           placeholder="Booking Date:"/>
                </div>
                <div className="pt-2">
                    {/*BOOKING MESSAGE */}
                    <label htmlFor="booking-msg" className=""></label>
                    <input required type="text" id="booking-msg" name="booking-msg" className=""
                           placeholder="Message:"/>
                </div>
                <div className="container-md d-flex justify-content-center">
                    <div className=" pt-2">
                        <button type="submit" id="submit" name="submit" className="btn btn-primary rounded-lg">
                            Book Table
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <h4>Welcome to the Booking Page </h4>
        <p> Here wil come a form for Booking a table</p>
        <Link href="/"><a>Home</a></Link>

    </div>


}