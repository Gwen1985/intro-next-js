import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Contact.module.css";
import '@fortawesome/fontawesome-free/js/all.js';


export default function contact() {
    return <div>

        <Head>
            <title>Pineapple Pizzeria Book a table</title>
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

        <section>
            <div className="row">

                <div className="col-md-9 d-flex justify-content-end" id={styles.menuImg_1}>
                    <div className={styles.navigation}>
                        <Link href="/"><a className="ml-4 text-light"> Home </a></Link>
                        <Link href="/navigation/about"><a className="ml-4 text-light">About </a></Link>
                        <Link href="/navigation/menu"><a className="ml-4 text-light"> Menu </a></Link>
                        <Link href="/navigation/contact"><a className="ml-4 text-light"> Contact </a></Link>
                    </div>
                </div>

                <div className="col-md-3" id={styles.menuImg_2}>

                </div>

            </div>
        </section>



        <div className=" container-md-fluid d-flex justify-content-center">

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

    </div>


}