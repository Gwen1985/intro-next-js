import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pineapple Pizzeria</title>
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

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-3 col-md-2">

                        </div>

                        <div className="col-sm-6 col-md-6 d-flex justify-content-center border border-light"
                             id={styles.menuList}>
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
                                    <td className="pt-5">
                                        <Link href="/navigation/contact"><a id={styles.seeMoreBtn}><p
                                        className="pt-2">See More</p></a></Link>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="col-sm-3 col-md-4">

                        </div>

                    </div>
                </section>


            </main>

            {/*<footer className={styles.footer}>*/
            }
            {/*</footer>*/
            }
        </div>
    )
}