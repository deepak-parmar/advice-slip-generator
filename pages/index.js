import Head from "next/head";
import Image from "next/image";
import React from "react";

import desktopDivider from "../public/images/pattern-divider-desktop.svg"
import mobileDivider from "../public/images/pattern-divider-mobile.svg"


class AdviceSlipGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null, advice: null
    }
    this.fetchNewQuote = this.fetchNewQuote.bind(this)
  }

  componentDidMount = () => this.fetchNewQuote()
  
  fetchNewQuote = () => {
    document.getElementsByTagName("button")[0].classList.add("animate-spin")
    const state = this
    fetch("https://api.adviceslip.com/advice")
		.then(response => response.json())
    .then(data => {
      state.setState({
        id: data.slip.id,
				advice: data.slip.advice
			})
		})
    .catch(() => {
      alert("Something went wrong! Try again.")
    });
    document.getElementsByTagName("button")[0].classList.remove("animate-spin")
	}

  render = () =>
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Advice Generator App | Frontend Mentor</title>
  </Head>
  <main className={"flex flex-col items-center p-4"}>
    <section className={"bg-[#313a49] max-w-[32rem] min-h-[20rem] p-6 lg:p-12 rounded-xl flex flex-col justify-center items-center"}>
      
      {/* advice id */}
      <h1 className={"text-[#52ffa8] uppercase text-[11px] tracking-[4.8px] pb-6"}>Advice #{this.state.id}</h1>
      
      {/* advice */}
      <q className={"text-[#cee3e9] leading-1 text-[1.54rem] text-center tracking-wide pb-6"}>
        {this.state.advice}
      </q>
      
      {/* Desktop divider */}
      <div className={"hidden lg:block"}>
        <Image src={desktopDivider} width={415.81} height={14.98} alt="" />
      </div>

      {/* Mobile divider */}
      <div className={"block lg:hidden"}>
        <Image src={mobileDivider} width={295} height={16} alt="" />
      </div>
    </section>
    <button className={"bg-[#52ffa8] p-5 rounded-full w-[3.875rem] h-[3.875rem] -mt-8 transition ease-in-out duration-75 hover:drop-shadow-[0_0_18px_rgb(82,255,168)]"} onClick={this.fetchNewQuote}>
      <Image src="/images/icon-dice.svg" width="22" height="22" alt="Refresh advice button" />
    </button>
  </main>
  </>
}

export default AdviceSlipGenerator