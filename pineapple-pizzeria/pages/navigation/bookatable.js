import Link from "next/link";

export default function bookatable() {
    return <div>
        <h1>Welcome to the Booking Page </h1>
        <p> Here wil come a form for Booking a table</p>
        <Link href="/"><a>Home</a></Link>


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
                    <input required type="text" id="booking-msg" name="booking-msg" className="" placeholder="Message:"/>
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