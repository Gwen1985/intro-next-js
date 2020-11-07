import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import '@fortawesome/fontawesome-free/js/all.js';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pineapple Pizzeria</title>
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

                        <div className="row pt-5">
                            <div className=" col-sm-12 col-md-12 d-flex justify-content-center text-light">
                                <div className={styles.title}>
                                    <p>Pineapple Pizzeria</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 d-flex justify-content-center text-light">
                                <div className={styles.title2}>
                                    <p> The Best Pizzeria In Belgium </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 pt-2 d-flex justify-content-center">
                                <div className={styles.bookingBtn}>
                                    <Link href="/navigation/contact"><a className="btn btn-warning rounded-pill"
                                                                        id={styles.bookingBtn}><p
                                        className="pt-2">Book a
                                        table</p></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.main2} id="convenienceSection">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 pt-5 d-flex justify-content-center">
                            <p className={styles.conv}> Convenience </p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-3 pt-5 d-flex justify-content-end">
                            <img src="/people.svg" alt="people" height="100px"/>
                        </div>

                        <div className="col-md-2 pt-5 d-flex justify-content-center">
                            <img src="/clima.svg" alt="clima" height="100px"/>
                        </div>

                        <div className="col-md- pt-5 d-flex justify-content-center">
                            <img src="/wifi.svg" alt="wifi" height="100px"/>
                        </div>

                        <div className="col-md-2 pt-5 d-flex justify-content-center">
                            <img src="/animals.svg" alt="animals" height="100px"/>
                        </div>

                        <div className="col-md-3 pt-5 ">
                            <img src="/parking.svg" alt="animals" height="100px"/>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">

                        <div className="col-sm-2 col-md-3 pt-5 d-flex justify-content-end">
                            <p className={styles.convText}>Facilities for disabled people</p>
                        </div>

                        <div className="col-sm-2 col-md-2 pt-5 d-flex justify-content-center">
                            <p className={styles.convText}>Air Conditioning</p>
                        </div>

                        <div className="col-sm-2 col-md- pt-5 d-flex justify-content-center">
                            <p className={styles.convText}>Free Wi-Fi</p>
                        </div>

                        <div className="col-sm-2 col-md-2 pt-5 d-flex justify-content-center">
                            <p className={styles.convText}>Pets allowed</p>
                        </div>

                        <div className="col-sm-4 col-md-3 pt-5 ">
                            <p className={styles.convText}>Parking for costumers</p>
                        </div>
                    </div>
                </section>

                <section id="menuSection">
                    <div className="row">

                        <div className="col-md-9 d-flex justify-content-center" id={styles.menuImg_1}>
                            <p className={styles.menuTitle}> MENU</p>
                        </div>

                        <div className="col-md-3" id={styles.menuImg_2}>
                        </div>

                    </div>
                </section>

                <section className="container" id={styles.menuContainer}>
                    <div className="row">

                        <div className="col-md-7" id={styles.table}>
                            <table>
                                <tr>
                                    <th className={styles.pizzaListTitle}>Pizza's</th>
                                    <th className={styles.drinksListTitle}> Drinks</th>
                                    <th className={styles.dessertsListTitle}> Desserts</th>
                                </tr>

                                <tr>
                                    <td className={styles.pizzaList}>Margherita</td>
                                    <td className={styles.drinksList}>Coffee</td>
                                    <td className={styles.dessertsList}>Tiramisu</td>
                                </tr>

                                <tr>
                                    <td className={styles.pizzaList}>Hawaii</td>
                                    <td className={styles.drinksList}>Coca-Cola</td>
                                    <td className={styles.dessertsList}>Ice cream</td>
                                </tr>

                                <tr>
                                    <td className={styles.pizzaList}>Vegetarian</td>
                                    <td className={styles.drinksList}>Fanta</td>
                                    <td className={styles.dessertsList}>Panna Cotta</td>
                                </tr>

                                <tr>
                                    <td className={styles.pizzaList}>Peperoni</td>
                                    <td className={styles.drinksList}>Sprite</td>
                                </tr>

                                <tr>
                                    <td className={styles.pizzaList}>Mexican</td>
                                    <td className={styles.drinksList}>Beer</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className="pt-5 d-flex justify-content-center"></td>
                                </tr>
                            </table>

                            <Link href="/navigation/contact"><a
                                className="btn btn-warning d-flex justify-content-center" id={styles.seeMore}
                                role="button"> See More </a></Link>
                        </div>

                        <div className="col-md-5 pl-5" id={styles.image_3}>
                        </div>

                    </div>
                </section>

                <section className="container" id={styles.aboutContainer}>

                    <div className="row">

                        <div className="col-md-6" id={styles.image_4}>
                        </div>

                        <div className="col-md-6 pl-3">
                            <p className={styles.aboutListTitle}>About us</p>

                            <p className={styles.aboutList}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam sit amet laoreet ligula.
                                Nullam laoreet urna et malesuada sagittis. Suspendisse rutrum dolor sit amet lorem
                                finibus, a mattis nibh sodales. Curabitur egestas ut ex sit amet rutrum. Duis lectus
                                eros, gravida et rutrum vitae, fermentum et libero. Mauris fringilla orci ac mi tempus
                                accumsan. Vivamus eleifend magna eu leo fermentum facilisis. Nullam tellus ipsum,
                                scelerisque ut vestibulum vitae, iaculis id neque. </p>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">

                        <div className="col d-flex justify-content-center">
                            <p className={styles.contactUs}> Contact us</p>
                        </div>

                    </div>
                </section>

                <section className="container" id={styles.contactContainer}>

                    <div className="row">

                        <div className="col-md-7 pt-5 d-flex justify-content-center">
                            <form method="post" className={styles.contactForm}>

                                <div className="pt-4">
                                    {/*E-MAIL*/}
                                    <label htmlFor="email" className="">Your e-mail: </label><br/>
                                    <input required type="email" id="email" name="email" className={styles.inputFields}
                                           placeholder="Your@email.com"/>
                                </div>

                                <div className="pt-4">
                                    {/*FIRST NAME + LAST NAME*/}
                                    <label htmlFor="name" className="">First name & Last name: </label><br/>
                                    <input required type="text" id="name" name="name" className={styles.inputFields}
                                           placeholder="First & Last name:"/>
                                </div>

                                <div className="pt-4">
                                    {/*MOBILE NR*/}
                                    <label htmlFor="mobile-nr" className="">GSM: </label><br/>
                                    <input required type="text" id="mobile-nr" name="mobile-nr" className={styles.inputFields}
                                           placeholder="+32 470 / 12 34 56"/>
                                </div>

                                <div className="pt-4">
                                    {/*BOOKING MESSAGE */}
                                    <label htmlFor="booking-msg" className="">Message: </label><br/>
                                    <input required type="text" id="booking-msg" name="booking-msg" className={styles.inputFields}
                                           placeholder="Message:"/>
                                </div>

                                <div className="container-md d-flex justify-content-center">
                                    <div className=" pt-5">
                                        <button type="submit" id="submit" name="submit"
                                                className={styles.sendBtn} >
                                            SEND
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-5" id={styles.image_5}>
                        </div>

                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className="row jumbotron">

                    <div className="col-md-3 pl-5 ml-5">
                        <p className={styles.footerTitle}>Contact</p>

                        <a href="tel:123 12 12">+32 (09) 123 12 12</a>
                        <p className={styles.footertext}>email@contact.com</p>

                        <a href="https://www.facebook.com/gwen.makaveli/" className="">
                            <i className="fab fa-facebook-f"/>
                        </a>

                        <a href="https://www.facebook.com/gwen.makaveli/" className=" ml-4">
                            <i className="fab fa-instagram"/>
                        </a>

                        <a href="https://www.facebook.com/gwen.makaveli/" className=" ml-4">
                            <i className="fab fa-twitter"/>
                        </a>
                    </div>

                    <div className="col-md-3 pl-5">
                        <p className={styles.footerTitle}>Opening Hours</p>
                        <p className={styles.footertext}>Monday-Friday 08:00 - 20:00m</p>
                        <p className={styles.footertext}>Saturday  09:00 - 21:00</p>
                    </div>

                    <div className="col-md-6">

                    </div>

                </div>

            </footer>
        </div>
    )
}